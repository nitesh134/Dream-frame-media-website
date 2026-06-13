import { useState } from "react";

/**
 * Try primary image URL first; on first error, swap to fallback (e.g. Instagram oEmbed thumb).
 */
export function useImageWithFallback(primarySrc: string, fallbackSrc: string) {
  const [src, setSrc] = useState(primarySrc);
  const [errorCount, setErrorCount] = useState(0);

  const onError = () => {
    if (errorCount === 0) {
      setSrc(fallbackSrc);
      setErrorCount(1);
    }
  };

  return { src, onError };
}
