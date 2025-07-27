"use client";

import { usePathname } from "next/navigation";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function ShareButton() {
  const pathname = usePathname();

  async function onClick() {
    const url = window.location.origin + pathname;
    try {
      await navigator.clipboard.writeText(url);
      toast("Link copied to clipboard", {
        position:"top-right"
      });
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
    >
      <Share2 size={15} />
      Share
    </button>
  );
}
