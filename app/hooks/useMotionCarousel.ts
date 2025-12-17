import { useCallback, useEffect, useState } from "react";

interface UseCarouselProps {
  total: number;
  interval?: number;
  pauseOnHover?: boolean;
}

export const useMotionCarousel = ({
  total,
  interval = 3000,
  pauseOnHover = true,
}: UseCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide
  useEffect(() => {
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, interval);

    return () => clearInterval(timer);
  }, [isHovered, interval, total, pauseOnHover]);

  // Navigation Handler
  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  const goTo = (index: number) => setCurrent(index);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  return {
    current,
    next,
    prev,
    goTo,
    setIsHovered,
  };
};
