import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(hasWindow)
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions(hasWindow));
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return { width: windowDimensions.width, height: windowDimensions.height };
}

function getWindowDimensions(hasWindow: boolean) {
  const width = hasWindow ? window.innerWidth : 0;
  const height = hasWindow ? window.innerHeight : 0;
  return {
    width,
    height,
  };
}
