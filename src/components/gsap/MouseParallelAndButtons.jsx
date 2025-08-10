// src/components/GlobalMouseEffects.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function GlobalMouseEffects() {
  useEffect(() => {
    // Mouse Parallax
    // const handleMouseMove = (e) => {
    //   const x = (e.clientX / window.innerWidth - 0.5) * 20;
    //   const y = (e.clientY / window.innerHeight - 0.5) * 20;
    //   gsap.to(".parallax-layer", {
    //     x,
    //     y,
    //     duration: 0.6,
    //     ease: "power2.out"
    //   });
    // };
    // window.addEventListener("mousemove", handleMouseMove);

    // Magnetic Buttons
    const btns = document.querySelectorAll(".magnetic");
    btns.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - rect.left - rect.width / 2) * 0.3,
          y: (e.clientY - rect.top - rect.height / 2) * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      });
    });

    // Cleanup
    // return () => {
    //   window.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  return null; // No visual output, just behavior
}
