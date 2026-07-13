"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { MeshGradient } from "@paper-design/shaders-react";

/*
 * Living gradient behind the hero: a slow mesh of deep teals with a
 * whisper of gold, so the near-black canvas is never flat.
 * Mobile and reduced-motion get a static gradient instead; the shader
 * mounts only after hydration so first paint is never blocked by it.
 */
export function HeroShader({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [showShader, setShowShader] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    const update = () => setShowShader(desktop.matches);
    update();
    desktop.addEventListener("change", update);
    return () => desktop.removeEventListener("change", update);
  }, [reduce]);

  return (
    <div aria-hidden className={className}>
      {showShader ? (
        <MeshGradient
          colors={["#06180f", "#0c2418", "#16593a", "#7a5f2b"]}
          distortion={0.9}
          swirl={0.35}
          speed={0.32}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_10%,rgba(22,89,58,0.6),transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_90%,rgba(122,95,43,0.2),transparent_65%)]" />
      )}
      {/* Darkening veil keeps headline contrast regardless of shader state */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,24,15,0.55),rgba(6,24,15,0.25)_40%,rgba(6,24,15,0.85))]" />
    </div>
  );
}
