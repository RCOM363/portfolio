"use client";

import React, { ReactNode } from "react";
import { motion, PanInfo } from "motion/react";
import { useRouter, usePathname } from "next/navigation";

import { SWIPE_THRESHOLD, ROUTES } from "@/constants";

function SwipeNavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  /* ----- Get all routes ---- */
  const routes = ROUTES.map((route) => route.path);

  /* ----- Get index of the path ----- */
  const index = routes.indexOf(pathname);

  /* ----- Check if it is a blog post ----- */
  const isBlogSlug = pathname.startsWith("/blog/");

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    //* info.offset.x - total horizontal distance dragged
    //* info.offet.x > threshold === left swipe (content is dragged to right)
    //* info.offet.x < -threshold === right swipe (content is dragged to left)

    /* ----- Swipe left on blog post navigates back to blogs page ----- */
    if (isBlogSlug && info.offset.x > SWIPE_THRESHOLD) {
      router.push(routes[2]);
    } else if (
      /* ----- Swipe right: go to next route ----- */
      info.offset.x < -SWIPE_THRESHOLD &&
      index !== -1 && // Current route exists in the list
      index < routes.length - 1 // Current route is not the last route
    ) {
      router.push(routes[index + 1]);
    } else if (
      /* ----- Swipe left: go to previous route ------ */
      info.offset.x > SWIPE_THRESHOLD &&
      index > 0 // Current route is not the first route
    ) {
      router.push(routes[index - 1]);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      initial={false}
      onDragEnd={handleDragEnd}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default SwipeNavigationProvider;
