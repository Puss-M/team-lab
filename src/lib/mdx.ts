import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const rootDir = process.cwd();

export interface PostMeta {
  title: string;
  date: string;
  description?: string;
  authors?: string[];
  tags?: string[];
  slug: string;
}

export async function getPostBySlug(slug: string, type: 'blog' | 'internal' = 'blog'): Promise<{ meta: PostMeta; content: any } | null> {
  if (!slug) {
    console.error("getPostBySlug called with undefined slug!");
    return null;
  }
  
  const realSlug = slug.replace(/\.mdx$/, '');
  const dir = type === 'blog' ? 'data/blog' : 'content/private/docs';
  const filePath = path.join(rootDir, dir, `${realSlug}.mdx`);
  
  console.log(`[MDX] Processing: ${realSlug} (${filePath})`);

  if (!fs.existsSync(filePath)) {
    console.warn(`[MDX] File not found: ${filePath}`);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (!fileContent || fileContent.trim() === '') {
    console.warn(`Empty file found: ${filePath}`);
    return null;
  }

  try {
    const { frontmatter, content } = await compileMDX<Omit<PostMeta, 'slug'>>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });
    
    // Provide defaults for missing fields to prevent crashes
    const safeMeta: PostMeta = {
      title: frontmatter.title || realSlug,
      date: frontmatter.date || new Date().toISOString(), 
      description: frontmatter.description || '',
      authors: frontmatter.authors || [],
      tags: frontmatter.tags || [],
      slug: realSlug,
    };

    return { meta: safeMeta, content };
  } catch (err) {
    console.error(`Error compiling MDX for ${realSlug}:`, err);
    return null;
  }
}

export async function getAllPosts(type: 'blog' | 'internal' = 'blog') {
  const dir = type === 'blog' ? 'data/blog' : 'content/private/docs';
  const postsDir = path.join(rootDir, dir);
  
  if (!fs.existsSync(postsDir)) return [];
  
  const files = fs.readdirSync(postsDir);

  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async (file) => {
        const post = await getPostBySlug(file, type);
        return post?.meta;
      })
  );

  // Filter out undefined/null posts
  const validPosts = posts.filter((post): post is PostMeta => post !== undefined && post !== null);

  // Sort by date descending
  return validPosts.sort((a, b) => 
    new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
  );
}
