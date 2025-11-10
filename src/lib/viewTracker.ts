import redis from "./redis";

const VIEW_KEY_PREFIX = "blog:view:";

/**
 * Gets views of a blog post
 * @param slug
 * @returns views
 */
export async function getBlogViews(slug: string): Promise<number> {
  try {
    const views = await redis.get<number>(`${VIEW_KEY_PREFIX}${slug}`);
    return views ?? 0;
  } catch (error) {
    console.error("Error getting post views:", error);
    return 0;
  }
}

/**
 * Increments the view on a blog post by 1 & returns the updated views
 * @param slug
 * @returns views
 *
 */
export async function incrementBlogViews(slug: string): Promise<number> {
  try {
    const views = await redis.incr(`${VIEW_KEY_PREFIX}${slug}`);
    return views;
  } catch (error) {
    console.error("Error incrementing post views:", error);
    return 0;
  }
}
