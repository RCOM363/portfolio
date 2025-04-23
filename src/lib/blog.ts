import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

import { Blog } from "@/types/blog.types";

const blogsDirectory = path.join(process.cwd(), "src/data/blogs");

// get all blogs
export const getBlogs = cache(async (): Promise<Blog[]> => {
  const fileNames = await fs.readdir(blogsDirectory);

  const allBlogsData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(blogsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        return {
          slug,
          content,
          title: data.title,
          description: data.description || "",
          date: data.date,
          tags: data.tags || [],
          image: data.image || "",
        } as Blog;
      })
  );

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1));
});

// get blog
export const getBlog = cache(
  async (slug: string): Promise<Blog | undefined> => {
    try {
      const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
      const fileContents = await fs.readFile(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title,
        description: data.description || "",
        date: data.date,
        tags: data.tags || [],
        image: data.image || "",
      } as Blog;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }
);
