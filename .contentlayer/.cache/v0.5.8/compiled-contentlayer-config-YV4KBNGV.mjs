// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
var InternalDoc = defineDocumentType(() => ({
  name: "InternalDoc",
  filePathPattern: "content/private/docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: false },
    authors: { type: "list", of: { type: "string" } },
    draft: { type: "boolean" },
    summary: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^content\/private\/docs\//, "")
    }
  }
}));
var Blog = defineDocumentType(() => ({
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
    source: { type: "enum", options: ["human", "bot"], default: "human" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blog\//, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, InternalDoc],
  mdx: {
    rehypePlugins: [rehypeKatex, rehypePrism]
  }
});
export {
  Blog,
  InternalDoc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YV4KBNGV.mjs.map
