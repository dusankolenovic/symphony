import React from "react";

/**
 * Metric card: square glyph tile top-left, stat chip top-right,
 * title + subline below. Matches the contact-page value cards
 * ("Modernize your data layer / ~50% faster implementation").
 */
export function StatCard({ icon, stat, title, sub, style, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        padding: "var(--space-6)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        minHeight: "220px",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: "56px",
          height: "56px",
          borderRadius: "var(--radius-md)",
          background: "var(--surface-glass)",
          border: "1px solid var(--border-subtle)",
          display: "grid",
          placeItems: "center",
          color: "var(--text-strong)",
        }}>{icon}</div>
        {stat && (
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            color: "var(--text-strong)",
            background: "var(--surface-glass)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-pill)",
            padding: "6px 12px",
          }}>{stat}</span>
        )}
      </div>
      <div style={{ marginTop: "auto" }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.5rem", color: "var(--text-strong)", letterSpacing: "-0.01em", lineHeight: 1.1 }}>{title}</h3>
        {sub && <p style={{ marginTop: "10px", color: "var(--text-muted)", fontSize: "1rem" }}>{sub}</p>}
      </div>
    </div>
  );
}
