/* Symphony — "Who we are": people & culture glass panels + global footprint. */
const { SectionHeading, Card } = window.Symphony;

function Culture() {
  return (
    <div>
      {/* People & culture — full aurora panel */}
      <section style={{ padding: "var(--gutter)" }}>
        <div style={{ borderRadius: "var(--radius-2xl)", background: "var(--grad-aurora)", padding: "clamp(32px,5vw,64px)", position: "relative", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <SectionHeading lead="Our people and" accent="culture" size="l" />
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: "var(--lh-normal)", color: "rgba(255,255,255,0.92)" }}>
              Our strength comes from 800+ experts worldwide who pair human creativity with AI to deliver results that matter. We are guided by values, driven by purpose, and supported by CARE — our program for well-being, flexibility, and growth.
            </p>
          </div>
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Card variant="glass" padding="40px" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem" }}>Our Vision</h3>
              <p style={{ marginTop: 16, color: "rgba(255,255,255,0.9)" }}>Unlocking the full potential of humans + technology to inspire growth for our people, our clients, and our communities.</p>
            </Card>
            <Card variant="glass" padding="40px" style={{ textAlign: "center" }}>
              <h3 style={{ fontSize: "1.5rem" }}>Our Mission</h3>
              <p style={{ marginTop: 16, color: "rgba(255,255,255,0.9)" }}>Passionately creating innovative digital experiences with meaningful value for all.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Global footprint */}
      <section style={{ padding: "24px var(--gutter) var(--gutter)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <SectionHeading lead="Global" accent="footprint" size="l" />
          <div>
            <p style={{ fontSize: "var(--fs-lead)", lineHeight: "var(--lh-normal)", color: "var(--text-body)" }}>
              Our strategic centers bring us closer to our clients and combine the right mix of nearshore, onshore, and offshore talent. From Southeast Europe to Latin America, we invest in offices that foster innovation, collaboration, and long-term growth.
            </p>
            <p style={{ marginTop: 40, color: "var(--text-muted)" }}>Click a region to reveal cities. Hover pins for timezone info.</p>
          </div>
        </div>
        <div style={{ marginTop: 40, height: 340, borderRadius: "var(--radius-xl)", background: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 12px, rgba(255,255,255,0.06) 12px 24px)", border: "1px solid var(--border-subtle)", display: "grid", placeItems: "center", position: "relative" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-faint)" }}>[ world map — interactive office pins ]</span>
          {[["22%","62%"],["48%","40%"],["52%","46%"],["55%","52%"]].map(([l,t],i)=>(
            <span key={i} style={{ position:"absolute", left:l, top:t, width:18, height:18, borderRadius:"50%", background:"var(--sym-indigo-500)", boxShadow:"0 0 0 6px rgba(109,93,246,0.25)" }} />
          ))}
        </div>
      </section>
    </div>
  );
}

window.SymphonyKit = Object.assign(window.SymphonyKit || {}, { Culture });
