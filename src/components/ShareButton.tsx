"use client";

import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { SendIcon } from "./ui/send";

export function ShareButton() {
  /* ---- Get pathname ---- */
  const pathname = usePathname();

  async function onClick() {
    /* ---- Construct url ---- */
    const url = window.location.origin + pathname;

    /* ---- Check for native share sheet support ---- */
    if (navigator.canShare?.({ url })) {
      try {
        /* ---- Open native share sheet ---- */
        await navigator.share({ url });
      } catch (err: any) {
        // Ignore user cancellations
        if (err?.name !== "AbortError") console.error("Failed to copy:", err);
      }
    } else {
      // Fallback: copy to clipboard for unsupported browsers
      try {
        await navigator.clipboard.writeText(url);
        toast("Link copied to clipboard", {
          position: "top-right",
        });
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  }

  return (
    <button
      onClick={onClick}
      aria-label="Share this post"
      className="hover:text-primary flex items-center gap-1 text-gray-600 transition-colors"
    >
      <SendIcon size={15} />
      Share
    </button>
  );
}
