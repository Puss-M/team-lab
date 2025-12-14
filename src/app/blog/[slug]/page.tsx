import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-12 px-4 container mx-auto max-w-3xl">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {post.meta.title}
        </h1>
        <div className="flex gap-4 text-sm text-gray-500">
           <time>{new Date(post.meta.date).toLocaleDateString()}</time>
           <span>•</span>
           <span>{post.meta.authors?.[0]}</span>
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  );
}
