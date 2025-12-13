import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "实验室名称", // TODO: Replace with your lab name
  tagline: "探索未知，创造未来", // TODO: Replace with your lab tagline
  favicon: "img/favicon.ico",

  // Future flags
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: "https://lab.university.edu", // TODO: Replace with your domain
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "your-org", // TODO: Replace with your GitHub org
  projectName: "lab-website",

  onBrokenLinks: "throw",

  // Internationalization - Chinese primary, English secondary
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
    localeConfigs: {
      "zh-Hans": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-CN",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "实验室",
      logo: {
        alt: "Lab Logo",
        src: "img/logo.svg",
      },
      items: [
        // 成果 (Achievements) - Dropdown
        {
          label: "成果",
          position: "left",
          items: [
            {
              label: "论文发表",
              to: "/achievements/papers",
            },
            {
              label: "项目演示",
              to: "/achievements/demos",
            },
            {
              label: "获奖情况",
              to: "/achievements/awards",
            },
          ],
        },
        // 资源 (Resources)
        {
          label: "资源",
          to: "/resources",
          position: "left",
        },
        // 快学 (Quick Learn) - Links to Docs
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "快学",
        },
        // 博客 (Blog)
        {
          to: "/blog",
          label: "博客",
          position: "left",
        },
        // 归档 (Archives)
        {
          label: "归档",
          to: "/archives",
          position: "left",
        },
        // 关于 (About) - Dropdown
        {
          label: "关于",
          position: "left",
          items: [
            {
              label: "实验室介绍",
              to: "/about",
            },
            {
              label: "团队成员",
              to: "/about/team",
            },
            {
              label: "联系我们",
              to: "/about/contact",
            },
          ],
        },
        // Language switcher
        {
          type: "localeDropdown",
          position: "right",
        },
        // GitHub link
        {
          href: "https://github.com/your-org/lab-website",  // TODO: Update
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "快速导航",
          items: [
            {
              label: "快学教程",
              to: "/docs/intro",
            },
            {
              label: "团队博客",
              to: "/blog",
            },
            {
              label: "资源下载",
              to: "/resources",
            },
          ],
        },
        {
          title: "成果展示",
          items: [
            {
              label: "论文发表",
              to: "/achievements/papers",
            },
            {
              label: "项目演示",
              to: "/achievements/demos",
            },
            {
              label: "获奖情况",
              to: "/achievements/awards",
            },
          ],
        },
        {
          title: "关于我们",
          items: [
            {
              label: "实验室介绍",
              to: "/about",
            },
            {
              label: "团队成员",
              to: "/about/team",
            },
            {
              label: "联系我们",
              to: "/about/contact",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 实验室名称. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
