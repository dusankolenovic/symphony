import React from "react";

/**
 * Eyebrow / section marker label. Small, ALL CAPS, wide tracking —
 * Symphony's framing labels ("PROVEN IMPACT", "AI SDLC ACCELERATOR").
 * Poppins SemiBold 600. Optional leading accent tick.
 */
export function Eyebrow({ children, tick = true, color = "var(--sym-indigo-300)", style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "var(--fs-eyebrow)",
        textTransform: "uppercase",
        letterSpacing: "var(--ls-eyebrow)",
        color,
        ...style,
      }}
      {...rest}
    >
      {tick && (
        <span style={{ width: "18px", height: "2px", background: "currentColor", borderRadius: "2px" }} />
      )}
      {children}
    </span>
  );
}
