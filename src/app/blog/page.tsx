import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import { cn } from '@/lib/utils';
import { Calendar, User } from 'lucide-react';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 container mx-auto">
      <div className="flex flex-col mb-12 items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
          Club Insights
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Thoughts, tutorials, and announcements from the Swift Coding Club team.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group relative p-6 bg-card border border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="mb-4">
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                {post.tags?.[0] || 'Article'}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
               {post.description || "Read more about this topic..."}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto">
              <div className="flex items-center gap-1">
                 <Calendar className="w-3 h-3" />
                 {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                 <User className="w-3 h-3" />
                 {post.authors?.[0] || 'Team'}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
