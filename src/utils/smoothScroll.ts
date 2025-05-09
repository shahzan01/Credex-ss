export const smoothScrollTo = (elementId: string, offset: number = 0): void => {
  // Find the element by ID
  const element = document.getElementById(elementId);

  // If element exists, scroll to it
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// This function can be used directly on anchor links
export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  offset: number = 0
): void => {
  e.preventDefault();

  // Get the target ID from href (remove #)
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const targetId = href.substring(1);
  smoothScrollTo(targetId, offset);
};
