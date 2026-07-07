import React from "react";

const RADII = { sm: "var(--radius-md)", md: "var(--radius-lg)", pill: "var(--radius-pill)" };
const SIZES = {
  sm: { padding: "10px 18px", fontSize: "0.875rem" },
  md: { padding: "14px 26px", fontSize: "1rem" },
  lg: { padding: "18px 34px", fontSize: "1.0625rem" },
};

/**
 * Symphony primary action button. Solid indigo, ghost, and outline variants.
 * Optional trailing arrow, as seen on "Read the case study →" and "Get started →".
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  shape = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    lineHeight: 1,
    borderRadius: RADII[shape] || RADII.md,
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur-fast) var(--ease-std), transform var(--dur-fast) var(--ease-std), border-color var(--dur-fast) var(--ease-std)",
    whiteSpace: "nowrap",
    ...SIZES[size],
  };

  const variants = {
    primary: {
      background: "var(--grad-primary)",
      color: "#fff",
      boxShadow: "var(--glow-indigo)",
    },
    secondary: {
      background: "var(--surface-glass)",
      color: "var(--text-strong)",
      borderColor: "var(--border-default)",
      backdropFilter: "blur(var(--blur-glass))",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--border-strong)",
    },
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      {children}
      {arrow && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
