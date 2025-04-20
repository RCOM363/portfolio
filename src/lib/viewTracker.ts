// src/lib/viewTracker.ts
import redis from "./redis";

const VIEW_KEY_PREFIX = "blog:view:";

export async function getBlogViews(slug: string): Promise<number> {
  try {
    const views = await redis.get<number>(`${VIEW_KEY_PREFIX}${slug}`);
    return views ?? 0;
  } catch (error) {
    console.error("Error getting post views:", error);
    return 0;
  }
}

export async function incrementBlogViews(slug: string): Promise<number> {
  try {
    const views = await redis.incr(`${VIEW_KEY_PREFIX}${slug}`);
    return views;
  } catch (error) {
    console.error("Error incrementing post views:", error);
    return 0;
  }
}

export async function getBulkBlogViews(
  slugs: string[]
): Promise<Record<string, number>> {
  if (!slugs.length) return {};

  try {
    const pipeline = redis.pipeline();
    slugs.forEach((slug) => {
      pipeline.get(`${VIEW_KEY_PREFIX}${slug}`);
    });

    const results = await pipeline.exec();

    return Object.fromEntries(
      slugs.map((slug, index) => [
        slug,
        typeof results[index] === "number" ? results[index] : 0,
      ])
    );
  } catch (error) {
    console.error("Error getting bulk post views:", error);
    return Object.fromEntries(slugs.map((slug) => [slug, 0]));
  }
}
