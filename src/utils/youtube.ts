export function youtubeThumbnailUrl(
  videoId: string,
  quality: "maxresdefault" | "hqdefault" = "hqdefault",
) {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

export function youtubeEmbedUrl(videoId: string, autoplay = true) {
  const q = autoplay ? "?autoplay=1&rel=0" : "?rel=0";
  return `https://www.youtube.com/embed/${videoId}${q}`;
}
