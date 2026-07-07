/* Symphony — Home hero. Aurora background, two-tone headline, partner tiles.
   Loaded as a browser (Babel) module: reads window.Symphony, registers on window.SymphonyKit. */
const { SectionHeading, Eyebrow } = window.Symphony;

function PartnerTile({ label }) {
  return (
    <div style={{
      height: 118, borderRadius: "var(--radius-md)",
      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)",
      backdropFilter: "blur(10px)", display: "grid", placeItems: "center",
      color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-display)", fontWeight: 800,
      letterSpacing: "0.02em", fontSize: 20,
    }}>{label}</div>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: 640, background: "var(--grad-aurora)", padding: "80px var(--gutter) 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Eyebrow style={{ marginBottom: 20 }}>Engineering-led · AI-native · Impact-driven</Eyebrow>
      <SectionHeading as="h1" size="xl" lead="We are" accent="Symphony" style={{ maxWidth: 900 }} />
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--fs-display-s)", color: "#fff", margin: "28px 0 0" }}>
        Engineering-led. AI-native. Impact-driven.
      </h2>
      <p style={{ maxWidth: 720, marginTop: 24, fontSize: "var(--fs-lead)", lineHeight: "var(--lh-normal)", color: "rgba(255,255,255,0.9)" }}>
        Blending strategy, speed, and precision to deliver products with AI at the core. We transform businesses through innovative technology solutions that drive real results.
      </p>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
        {["NIKE", "META", "APOLLO", "FP", "EQT", "GV"].map((l) => <PartnerTile key={l} label={l} />)}
      </div>
    </section>
  );
}

window.SymphonyKit = Object.assign(window.SymphonyKit || {}, { Hero });
