import React from "react";

/**
 * Surface container. Two treatments:
 *  - variant="glass" → translucent gradient panel over the aurora
 *    (the Vision / Mission cards).
 *  - variant="solid" → dark bordered card on the near-black canvas
 *    (the stat cards on the contact page).
 */
export function Card({ children, variant = "solid", padding = "var(--space-8)", style, ...rest }) {
  const base = {
    borderRadius: "var(--radius-xl)",
    padding,
    position: "relative",
  };
  const variants = {
    solid: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
    },
    glass: {
      background: "var(--grad-glass)",
      border: "1px solid var(--border-default)",
      backdropFilter: "blur(var(--blur-glass))",
      WebkitBackdropFilter: "blur(var(--blur-glass))",
      boxShadow: "var(--shadow-card)",
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-default)",
    },
  };
  return (
    <div style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </div>
  );
}
