import { useEffect } from "react";

export function useScrollEffect(
  scrollContainerRef: React.RefObject<HTMLElement>,
  handleScroll: () => void
): void {
  useEffect(() => {
    const scrollElement = scrollContainerRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef, handleScroll]);
}
