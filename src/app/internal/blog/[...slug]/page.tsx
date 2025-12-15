import { allBlogs } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'

export const runtime = 'edge';

export const generateStaticParams = async () =>
  allBlogs.map((post) => ({ slug: post.slug.split('/') }))

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug: slugArray } = await params
  const slug = slugArray.join('/')
  const post = allBlogs.find((p) => p.slug === slug)
  if (!post) {
      return
  }
  return { title: post.title }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugArray } = await params
  const slug = slugArray.join('/')
  const post = allBlogs.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-3xl py-10 prose dark:prose-invert">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="text-sm text-gray-500">
          {format(parseISO(post.date), 'MMMM d, yyyy')}
        </time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex justify-center gap-4">
            {post.authors?.map(author => (
                 <span key={author} className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {author}
                 </span>
            ))}
        </div>
      </div>
      <div className="mt-8">
        <Mdx code={post.body.code} />
      </div>
    </article>
  )
}
