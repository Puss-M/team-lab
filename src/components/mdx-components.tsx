import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer2/hooks'

const CustomLink = (props: any) => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components: MDXComponents = {
  Image,
  a: CustomLink,
  // Add more custom components here (e.g. Pre, Code, etc. if needed)
}

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
