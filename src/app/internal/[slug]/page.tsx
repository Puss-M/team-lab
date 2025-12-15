import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import AuthGuard from '@/components/auth/AuthGuard';

export async function generateStaticParams() {
  const posts = await getAllPosts('internal');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function InternalPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, 'internal');

  if (!post) {
    notFound();
  }

  return (
    <AuthGuard>
      <article className="min-h-screen pt-24 pb-12 px-4 container mx-auto max-w-3xl">
        <Link href="/internal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
        </Link>

        <header className="mb-8 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 mb-4">
             <div className="p-1 px-2 border border-secondary/30 bg-secondary/10 rounded text-xs font-mono text-secondary flex items-center gap-1">
               <Lock className="w-3 h-3" /> CONFIDENTIAL
             </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {post.meta.title}
          </h1>
          <div className="flex gap-4 text-sm text-gray-500">
             <time>{new Date(post.meta.date || Date.now()).toLocaleDateString()}</time>
             <span>•</span>
             <span>Internal Doc</span>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.content}
        </div>
      </article>
    </AuthGuard>
  );
}
