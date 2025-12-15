import { allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { Key } from "lucide-react"; // Import icon if needed, but keeping it simple for now

export const runtime = 'edge';

export const metadata = {
  title: "Internal Dashboard | Swift Coding Club",
};

export default function InternalDashboard() {
  const posts = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Internal Knowledge Base
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Private reports, meeting notes, and auto-published updates from BettaFish.
        </p>
      </header>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="group relative flex flex-col space-y-2 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-transparent transition-all"
          >
            <div className="flex items-center justify-between">
                <time dateTime={post.date} className="text-sm text-gray-500">
                {format(parseISO(post.date), "MMMM d, yyyy")}
                </time>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    post.source === 'bot' 
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                }`}>
                    {post.source === 'bot' ? '🤖 Bot' : '👤 Human'}
                </span>
            </div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              <Link href={`/internal/blog/${post.slug}`} className="hover:underline focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                {post.title}
              </Link>
            </h2>
            
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              {post.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
                {post.tags?.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                        #{tag}
                    </span>
                ))}
            </div>
          </article>
        ))}
        {posts.length === 0 && (
            <div className="text-center py-12">
                <p className="text-gray-500">No internal posts found.</p>
            </div>
        )}
      </div>
    </div>
  );
}
