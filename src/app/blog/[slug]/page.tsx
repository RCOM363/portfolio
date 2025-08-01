import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { MoveLeft, Calendar } from "lucide-react";

import { BlurFade } from "@/components/magicui/blur-fade";
import { getBlogs, getBlog } from "@/lib/blog";
import ViewCounter from "@/components/ViewCounter";
import { ShareButton } from "@/components/ShareButton";

// generate metadate for each blog
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    return {
      title: "Post Not Found",
      description: "The requested blog blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      tags: blog.tags,
      images: blog.image ? [{ url: blog.image }] : [],
    },
  };
}

// generate static params of each blog
export async function generateStaticParams() {
  const posts = await getBlogs();

  return posts.map((blog) => ({
    slug: blog.slug,
  }));
}

// Configure options for MDXRemote
const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrettyCode], // syntax higlighting
  },
};

const BLUR_FADE_DELAY = 0.04;

async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full px-4 py-5 lg:py-4">
      <div className="flex flex-col">
        {/* back link */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Link
            href={"/blog"}
            className="flex items-center gap-1 py-2 text-gray-600 hover:text-primary transition-colors"
          >
            <MoveLeft />
            Back to blog
          </Link>
        </BlurFade>
        {/* title */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          {/* date & views */}
          <div className="flex flex-col sm:flex-row justify-between">
            <p className="text-gray-600">By Rahul Lankeppanavar</p>
            <div className="flex items-center gap-2 text-gray-600">
              {/* date */}
              <span className="flex items-center gap-1">
                <Calendar size={15} />
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              {/* views */}
              <ViewCounter slug={blog.slug} />
              {/* Share */}
              <ShareButton />
            </div>
          </div>
        </BlurFade>
        {/* tags */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="w-full pt-4 border-b pb-4">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
      {/* blog content */}
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="w-full prose dark:prose-invert py-8">
          <MDXRemote source={blog.content} options={options} />
        </div>
      </BlurFade>
    </div>
  );
}

export default Blog;
