"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type PreviewImage = {
  alt: string;
  src: string;
};

type ImagePreviewContextValue = {
  openPreview: (src: string, alt: string) => void;
};

const ImagePreviewContext = createContext<ImagePreviewContextValue | undefined>(undefined);

export function ImagePreviewProvider({ children }: { children: ReactNode }) {
  const [previewImage, setPreviewImage] = useState<PreviewImage | null>(null);

  const openPreview = useCallback((src: string, alt: string) => {
    setPreviewImage({ src, alt });
  }, []);

  const closePreview = useCallback(() => {
    setPreviewImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePreview]);

  return (
    <ImagePreviewContext.Provider value={{ openPreview }}>
      {children}
      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closePreview}
        >
          <div className="relative max-h-[90vh] max-w-5xl">
            <button
              type="button"
              aria-label="Close preview"
              onClick={closePreview}
              className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-sm text-white"
            >
              Close
            </button>
            <img
              src={previewImage.src}
              alt={previewImage.alt}
              className="max-h-[90vh] max-w-full rounded-lg border border-white/10 object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </ImagePreviewContext.Provider>
  );
}

export function useImagePreview() {
  const context = useContext(ImagePreviewContext);
  if (!context) {
    throw new Error("useImagePreview must be used within an ImagePreviewProvider");
  }
  return context;
}

