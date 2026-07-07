import React from "react";

/**
 * Dark text input, as on the "Get started" contact form.
 * Bordered, translucent fill, indigo focus ring.
 */
export function Input({ label, style, wrapStyle, onFocus, onBlur, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: "block", ...wrapStyle }}>
      {label && (
        <span style={{
          display: "block",
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "var(--text-muted)",
          marginBottom: "8px",
        }}>{label}</span>
      )}
      <input
        onFocus={(e) => { setFocused(true); onFocus && onFocus(e); }}
        onBlur={(e) => { setFocused(false); onBlur && onBlur(e); }}
        style={{
          width: "100%",
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
          color: "var(--text-strong)",
          background: "var(--surface-input)",
          border: `1px solid ${focused ? "var(--border-accent)" : "var(--border-subtle)"}`,
          borderRadius: "var(--radius-md)",
          padding: "16px 18px",
          outline: "none",
          boxShadow: focused ? "0 0 0 3px rgba(109,93,246,0.18)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-std), box-shadow var(--dur-fast) var(--ease-std)",
          ...style,
        }}
        {...rest}
      />
    </label>
  );
}
