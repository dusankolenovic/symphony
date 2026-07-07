import React from "react";
import { Wordmark } from "./Wordmark.jsx";

/**
 * Primary site navigation. Wordmark left, glass "pill" nav items right,
 * some with a caret (dropdown). Matches symphony.is header.
 */
export function NavBar({ items, active, onSelect, style, ...rest }) {
  const list = items || [
    { label: "Who we are" },
    { label: "What we do", caret: true },
    { label: "Business segments", caret: true },
    { label: "Industries", caret: true },
    { label: "Insights and results", caret: true },
    { label: "Let's work together" },
    { label: "Careers", caret: true },
  ];
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-8)",
        height: "var(--nav-height)",
        padding: "0 var(--gutter)",
        ...style,
      }}
      {...rest}
    >
      <Wordmark height={24} />
      <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
        {list.map((it) => {
          const on = active === it.label;
          return (
            <button
              key={it.label}
              type="button"
              onClick={() => onSelect && onSelect(it.label)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                fontWeight: 600,
                color: on ? "var(--text-strong)" : "var(--text-muted)",
                background: on ? "var(--surface-glass)" : "transparent",
                border: `1px solid ${on ? "var(--border-default)" : "transparent"}`,
                borderRadius: "var(--radius-pill)",
                padding: "10px 18px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color var(--dur-fast), background var(--dur-fast)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text-strong)"; }}
              onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              {it.label}
              {it.caret && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
