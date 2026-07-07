/* Symphony — "Let's work together": outcome stat cards + Get started form. */
const { StatCard, Input, Textarea, Button } = window.Symphony;

const IconTrend = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8M21 7v5M21 7h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const IconBolt = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>);
const IconDollar = () => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M8 7h6a2 2 0 010 4H9a2 2 0 000 4h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>);

function Contact() {
  return (
    <section style={{ padding: "64px var(--gutter)", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "start" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <StatCard icon={<IconTrend/>} stat="50%" title="Modernize your data layer" sub="~50% faster implementation" />
        <StatCard icon={<IconBolt/>} stat="40-60%" title="Speed up software delivery" sub="~40-60% efficiency lift" />
        <StatCard icon={<IconDollar/>} stat="$4-6M" title="Cut manual ops costs" sub="~$4-6M per year savings" style={{ gridColumn: "1 / 2" }} />
      </div>

      <div style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-2xl)", padding: "clamp(28px,4vw,48px)" }}>
        <h2 style={{ fontSize: "var(--fs-display-s)", textAlign: "center" }}>Get started</h2>
        <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: 10, marginBottom: 28 }}>Let's discuss your AI transformation goals</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Input placeholder="Your name" />
          <Input placeholder="Work email" type="email" />
          <Input placeholder="Company name" />
          <Textarea placeholder="Tell us about your project and goals" rows={4} />
          <Button variant="primary" size="lg" arrow style={{ alignSelf: "flex-start", marginTop: 4 }}>Get started</Button>
        </div>
      </div>
    </section>
  );
}

window.SymphonyKit = Object.assign(window.SymphonyKit || {}, { Contact });
