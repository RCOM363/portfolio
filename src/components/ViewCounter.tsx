// src/components/ViewCounter.tsx
"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewCounter({
  slug,
  initialViews = 0,
  trackView = true,
}: {
  slug: string;
  initialViews: number;
  trackView?: boolean;
}) {
  const [views, setViews] = useState(initialViews);
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

  return (
    <div className=" flex items-center gap-1 text-gray-600">
      <Eye size={15} />
      {isLoading ? `${initialViews} views` : `${views} views`}
    </div>
  );
}
