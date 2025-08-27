// src/components/ViewCounter.tsx
"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewCounter({
  slug,
  trackView = true,
}: {
  slug: string;
  trackView?: boolean;
}) {
  const [views, setViews] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateViews = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`, {
          method: trackView ? "POST" : "GET", // increment view only after visiting the blog
        });

        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } catch (error) {
        console.error("Failed to update view count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    updateViews();
  }, [slug, trackView]);

  function formatViews(num: number) {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
  }

  return (
    <div className="flex items-center gap-1 text-gray-600">
      <Eye size={15} />
      {isLoading ? `---` : `${formatViews(views)}`}
    </div>
  );
}
