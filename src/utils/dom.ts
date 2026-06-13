/** Scroll to element id (without leading #). */
export function scrollToElementId(id: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior });
}

/** Hash like `#work` or `work` → scroll when present on current page. */
export function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  scrollToElementId(id, behavior);
}
