import { useImageWithFallback } from "@/hooks/useImageWithFallback";

export interface InstagramReelThumbnailProps {
  igPath: string;
  fallbackSrc: string;
  className: string;
}

export function InstagramReelThumbnail({
  igPath,
  fallbackSrc,
  className,
}: InstagramReelThumbnailProps) {
  const primarySrc = `https://www.instagram.com/p/${igPath}/media/?size=l`;
  const { src, onError } = useImageWithFallback(primarySrc, fallbackSrc);

  return (
    <img
      src={src}
      alt="Reel Preview"
      onError={onError}
      className={className}
      loading="lazy"
    />
  );
}
