import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    draft: { type: "boolean" },
    summary: { type: "string" },
    authors: { type: "list", of: { type: "string" } },
    // Source: distinction between human and bot
    source: { type: "enum", options: ["human", "bot"], default: "human" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [rehypeKatex, rehypePrism],
  },
});
