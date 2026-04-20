"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, { stiffness: 150, damping: 18 });
  const ringY = useSpring(dotY, { stiffness: 150, damping: 18 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };
    const enter = () => { isHovering.current = true; };
    const leave = () => { isHovering.current = false; };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, [dotX, dotY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        className="fixed z-[10000] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 10,
          height: 10,
          backgroundColor: "#00e5ff",
          mixBlendMode: "screen",
        }}
      />
      {/* Ring */}
      <motion.div
        ref={ringRef}
        className="fixed z-[9999] pointer-events-none rounded-full border border-[rgba(0,229,255,0.45)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 38,
          height: 38,
        }}
      />
    </>
  );
}
