import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SparkleCursor() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "absolute w-2 h-2 rounded-full pointer-events-none";
      
      // Random bright colors
      sparkle.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 70%)`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      container.appendChild(sparkle);

      gsap.fromTo(
        sparkle,
        { x: 0, y: 0, opacity: 1, scale: 1 },
        {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          opacity: 0,
          scale: 0,
          duration: 0.8,
          ease: "power1.out",
          onComplete: () => sparkle.remove(),
        }
      );
    };

    const handleMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
}
