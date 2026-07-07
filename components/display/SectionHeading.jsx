import React from "react";

/**
 * Two-tone display heading — Symphony's signature: first words in white,
 * the emphasis word in periwinkle ("We are Symphony", "Global footprint",
 * "Our people and culture").
 */
export function SectionHeading({ lead, accent, size = "l", as = "h2", style, ...rest }) {
  const Tag = as;
  const sizes = {
    xl: "var(--fs-display-xl)",
    l: "var(--fs-display-l)",
    m: "var(--fs-display-m)",
    s: "var(--fs-display-s)",
  };
  return (
    <Tag
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: sizes[size],
        lineHeight: "var(--lh-tight)",
        letterSpacing: "var(--ls-display)",
        color: "var(--text-strong)",
        margin: 0,
        ...style,
      }}
      {...rest}
    >
      {lead}{lead && accent ? " " : ""}
      {accent && <span style={{ color: "var(--sym-indigo-300)" }}>{accent}</span>}
    </Tag>
  );
}
