import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const rootDir = process.cwd();

export async function getPostBySlug(slug: string, type: 'blog' | 'internal' = 'blog') {
  const realSlug = slug.replace(/\.mdx$/, '');
  const dir = type === 'blog' ? 'content/public/blog' : 'content/private/docs';
  const filePath = path.join(rootDir, dir, `${realSlug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
}

export async function getAllPosts(type: 'blog' | 'internal' = 'blog') {
  const dir = type === 'blog' ? 'content/public/blog' : 'content/private/docs';
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

  // Sort by date descending
  return posts.sort((a: any, b: any) => 
    new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
  );
}
