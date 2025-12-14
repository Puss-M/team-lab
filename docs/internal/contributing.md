---
sidebar_position: 2
---

# 投稿与贡献指南

我们鼓励所有成员参与到 **知库 (Knowledge Base)** 的建设中来！无论是一次技术分享的 PPT，还是一篇踩坑笔记，都值得被记录。

## 如何发布内容？

### 方式一：GitHub Pull Request (推荐)

1.  **Fork** 本仓库到你的账号。
2.  在 `docs/` (文档) 或 `blog/` (博客) 下创建新的 Markdown 文件。
    - 博客请遵循 `YYYY-MM-DD-title.md` 的命名格式。
3.  提交 **Pull Request**，管理员 Review 后即可上线。

### 方式二：直接联系管理员

如果你不熟悉 Git 操作，可以将 Markdown 文件或 Word 文档发送给：

- **内容负责人**: Alex (WeChat: xxx)
- 或者直接发到内部群。

## 写作规范

- **标题**: 使用一级标题 `#` 作为文章题目。
- **图片**: 请将图片放在 `static/img/posts/` 目录下，并使用相对路径引用。
- **标签**: 博客文章请在头部添加 Front Matter：
  ```yaml
  ---
  title: 我的分享标题
  authors: [你的名字拼音]
  tags: [Deep Learning, Tutorial]
  ---
  ```

Let's make our community better together!
