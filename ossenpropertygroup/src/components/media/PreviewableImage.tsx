"use client";

import { useImagePreview } from "@/components/providers/ImagePreviewProvider";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

type PreviewableImageProps = {
  src: string;
  alt: string;
  imgClassName?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PreviewableImage({
  src,
  alt,
  imgClassName,
  className,
  ...buttonProps
}: PreviewableImageProps) {
  const { openPreview } = useImagePreview();

  return (
    <button
      type="button"
      onClick={() => openPreview(src, alt)}
      className={cn(
        "overflow-hidden rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      {...buttonProps}
    >
      <img src={src} alt={alt} className={cn("h-full w-full object-cover", imgClassName)} />
    </button>
  );
}

