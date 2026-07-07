import React from "react";

/**
 * Small pill label. Two flavors seen across Symphony:
 *  - "NEW" (solid indigo, uppercase)  → tone="new"
 *  - stat chips "50%", "$4-6M", "40-60%" (glass, mono) → tone="stat"
 */
export function Badge({ children, tone = "stat", style, ...rest }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "0.75rem",
    lineHeight: 1,
    padding: "6px 12px",
    whiteSpace: "nowrap",
  };

  const tones = {
    new: {
      background: "var(--sym-indigo-500)",
      color: "#fff",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
    },
    stat: {
      background: "var(--surface-glass)",
      color: "var(--text-strong)",
      border: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-mono)",
    },
    outline: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid var(--border-default)",
    },
  };

  return (
    <span style={{ ...base, ...tones[tone], ...style }} {...rest}>
      {children}
    </span>
  );
}
