# Portfolio

A modern personal portfolio with clean & minimal UI showcasing skills, experience, projects and blog posts.

## Built With

![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![Shadcnui](https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white)
![Mdx](https://img.shields.io/badge/MDX-1B1F24.svg?style=for-the-badge&logo=MDX&logoColor=white)
![Nextjs](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![upstash](https://img.shields.io/badge/Upstash-00E9A3.svg?style=for-the-badge&logo=Upstash&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-FF4438.svg?style=for-the-badge&logo=Redis&logoColor=white)

## Deployed With

![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)
![Hostinger](https://img.shields.io/badge/Hostinger-673DE6.svg?style=for-the-badge&logo=Hostinger&logoColor=white)

## Blog Posts

Blog posts are written in **markdown** and are stored in project's directory as `.mdx` file.
Each post includes **frontmatter** for metadate, which include `title`, `description`, `date`, `slug`, `tags`.

```
---
title: "post_title"
description: "post_description"
date: "yyyy-mm-dd"
slug: "post_slug"
tags: ["tag_1", "tag_2", "tag_3"]
---

post content
```

## API Documentation

A serverless **redis** store is used to keep track of **page views** for each blog post.

### Get views

- URL: `/api/views/:slug`
- Methos: `GET`

### Increment views

- URL: `/api/views/:slug`
- Methos: `POST`
