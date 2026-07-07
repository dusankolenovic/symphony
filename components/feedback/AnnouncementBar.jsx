import React from "react";

/**
 * Top announcement / promo bar with indigo aurora tint, "NEW" flag,
 * headline + subline, a CTA and minimize/close controls.
 * Matches the "One auditable, AI-ready tax platform" bar.
 */
export function AnnouncementBar({
  title,
  subtitle,
  badge = "New",
  cta = "Read the case study",
  onCta,
  onClose,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-8)",
        padding: "18px var(--gutter)",
        background:
          "linear-gradient(90deg, rgba(85,70,232,0.5) 0%, rgba(43,25,90,0.55) 55%, rgba(224,33,138,0.35) 100%), var(--sym-ink-800)",
        borderBottom: "1px solid var(--border-subtle)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.375rem", color: "#fff", letterSpacing: "-0.01em" }}>{title}</span>
          {badge && (
            <span style={{
              background: "var(--sym-indigo-500)", color: "#fff", fontSize: "0.6875rem",
              fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
              borderRadius: "var(--radius-pill)", padding: "4px 10px",
            }}>{badge}</span>
          )}
        </div>
        {subtitle && (
          <p style={{ marginTop: "4px", color: "var(--text-body)", fontSize: "0.9375rem" }}>{subtitle}</p>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
        <button type="button" onClick={onCta} style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "var(--grad-primary)", color: "#fff", fontFamily: "var(--font-body)",
          fontWeight: 700, fontSize: "1rem", border: "none", borderRadius: "var(--radius-lg)",
          padding: "14px 24px", cursor: "pointer", boxShadow: "var(--glow-indigo)", whiteSpace: "nowrap",
        }}>
          {cta}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button type="button" aria-label="Minimize" style={ctlStyle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 12h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
        </button>
        <button type="button" aria-label="Close" onClick={onClose} style={ctlStyle}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  );
}

const ctlStyle = {
  width: "40px", height: "40px", display: "grid", placeItems: "center",
  background: "var(--surface-glass)", border: "1px solid var(--border-default)",
  borderRadius: "var(--radius-md)", color: "#fff", cursor: "pointer",
};
