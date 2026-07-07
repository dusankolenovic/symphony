import React from "react";

/**
 * Category tag / chip. Solid indigo (active) or outline (secondary),
 * as on the case-study hero: "Private Equity" (solid) +
 * "AI-accelerated product build / Data foundations" (outline).
 */
export function Tag({ children, variant = "solid", style, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "0.9375rem",
    lineHeight: 1,
    padding: "12px 24px",
    whiteSpace: "nowrap",
  };
  const variants = {
    solid: { background: "var(--sym-indigo-500)", color: "#fff" },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1px solid var(--border-strong)",
    },
  };
  return (
    <span style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </span>
  );
}
