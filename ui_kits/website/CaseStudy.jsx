/* Symphony — Case study detail hero ("One auditable, AI-ready tax platform"). */
const { Tag, Button } = window.Symphony;

function CaseStudy() {
  return (
    <section style={{ padding: "40px var(--gutter) 64px", background: "linear-gradient(180deg, #1a1633 0%, var(--surface-page) 60%)" }}>
      <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "none", border: "none", color: "var(--text-accent)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1.0625rem", cursor: "pointer", padding: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Back to Case Studies
      </button>

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Tag variant="solid">Private Equity</Tag>
            <Tag variant="outline">AI-accelerated product build / Data foundations</Tag>
          </div>
          <h1 style={{ marginTop: 32, fontSize: "clamp(48px,6vw,80px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.02 }}>
            One auditable, AI-ready tax platform
          </h1>
          <div style={{ marginTop: 36 }}>
            <Button variant="primary" size="lg" arrow>Read the case study</Button>
          </div>
        </div>

        <div style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-2xl)", overflow: "hidden", background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 14px, rgba(255,255,255,0.07) 14px 28px)", border: "1px solid var(--border-subtle)", display: "grid", placeItems: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>[ client / product photo ]</span>
        </div>
      </div>
    </section>
  );
}

window.SymphonyKit = Object.assign(window.SymphonyKit || {}, { CaseStudy });
