import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
import { format } from "date-fns";

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    // 1. Auth Guard
    const authHeader = req.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    if (token !== process.env.INTERNAL_API_KEY) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 2. Parse Body
    const body = await req.json();
    const { title, content, tags, author, summary } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Missing title or content" },
        { status: 400 }
      );
    }

    // 3. Transform to MDX
    const date = new Date();
    const slugDate = format(date, "yyyy-MM-dd");
    const safeTitle = title.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, "-").toLowerCase(); // Simple slug: date-title
    const filename = `${slugDate}-${safeTitle}.mdx`;
    const filepath = `data/blog/${filename}`;

    const frontmatter = `---
title: '${title.replace(/'/g, "''")}'
date: '${date.toISOString()}'
tags: ${JSON.stringify(tags || [])}
draft: false
summary: '${(summary || "").replace(/'/g, "''")}'
authors: ['${author || "BettaFish-Bot"}']
source: 'bot'
---

${content}
`;

    // 4. Push to GitHub
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const owner = process.env.GITHUB_REPO_OWNER!;
    const repo = process.env.GITHUB_REPO_NAME!;

    // Check if file exists (Update vs Create) - for now just create/overwrite
    // We need the SHA if updating, but let's assume new files for daily reports usually
    let sha: string | undefined;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: filepath,
      });
      if (!Array.isArray(data) && data.sha) {
        sha = data.sha;
      }
    } catch (e: any) {
        // File does not exist, proceed to create
        if (e.status !== 404) {
             console.error("Error checking file existence:", e);
             // Proceeding might fail if it's not 404, but let's try
        }
    }

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: filepath,
      message: `🤖 API Auto-publish: ${title}`,
      content: Buffer.from(frontmatter).toString("base64"),
      sha, // internal API key gives permission to overwrite if logic allows
      committer: {
        name: "BettaFish Bot",
        email: "bot@swiftcodingclub.com",
      },
      author: {
        name: "BettaFish Bot",
        email: "bot@swiftcodingclub.com",
      },
    });

    return NextResponse.json({ success: true, path: filepath });
  } catch (error: any) {
    console.error("Publish Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
