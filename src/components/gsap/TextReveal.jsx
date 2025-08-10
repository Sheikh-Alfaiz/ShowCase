// src/components/TextReveal.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function TextReveal({ text, className }) {
  const textRef = useRef(null);

  useEffect(() => {
    // Split text into characters
    const split = new SplitType(textRef.current, { types: "chars" });

    // Animate each character
    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.05, // delay between letters
      ease: "power4.out",
      duration: 1,
    });

    // Cleanup
    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1 ref={textRef} className={className}>
      {text}
    </h1>
  );
}
