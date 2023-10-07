"use client";

import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function AppearInView({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? "fade-in" : "fade-out"} ${className}`}
    >
      {children}
    </div>
  );
}
