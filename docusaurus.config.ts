import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Swift Coding Club",
  tagline: "Igniting Ideas, Fostering Collaboration",
  favicon: "img/favicon.ico",

  // Future flags
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: "https://swift-coding-club.com", 
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "swift-coding-club",
  projectName: "club-website",

  onBrokenLinks: "warn",

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
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      title: "Swift Coding Club",
      logo: {
        alt: "Spark Lab Logo",
        src: "img/spark-logo.jpg",
      },
      items: [
        // Projects (was Achievements)
        {
          label: "项目", // Projects
          position: "left",
          items: [
            {
              label: "精选项目",
              to: "/projects/featured", // Need to ensure routes exist or redirect
            },
            {
              label: "黑客松",
              to: "/projects/hackathons",
            },
          ],
        },
        // Resources
        {
          label: "资源",
          to: "/resources",
          position: "left",
        },
        // Quick Learn (Docs)
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "快学",
        },
        // Blog
        {
          to: "/blog",
          label: "博客",
          position: "left",
        },
        // Archives
        {
          label: "归档",
          to: "/archives",
          position: "left",
        },
        // About
        {
          label: "关于",
          position: "left",
          items: [
            {
              label: "社团介绍",
              to: "/about",
            },
            {
              label: "成员列表",
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
          href: "https://github.com/your-org/club-website",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "社团导航",
          items: [
            {
              label: "新手入门",
              to: "/docs/intro",
            },
            {
              label: "技术博客",
              to: "/blog",
            },
            {
              label: "历史归档",
              to: "/archives",
            },
          ],
        },
        {
          title: "精彩活动",
          items: [
            {
              label: "每周分享",
              to: "/blog/tags/sharing",
            },
            {
              label: "项目展示",
              to: "/projects/featured",
            },
          ],
        },
        {
          title: "联系我们",
          items: [
            {
              label: "关于我们",
              to: "/about",
            },
            {
              label: "加入我们",
              to: "/about/contact",
            },
            {
              html: `
                <div class="footer__link-item">
                  <span>微信公众号: SwiftCodingClub</span>
                </div>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Swift Coding Club. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
