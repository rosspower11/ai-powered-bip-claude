const reasons = [
  { n: "01", title: "LIVE, NOT PRE-RECORDED", desc: "Every session is live. Ask questions, get unstuck in real time, build alongside a cohort doing the same work." },
  { n: "02", title: "YOU BUILD REAL THINGS", desc: "You walk out of every session with a tangible asset. A product, a content engine, a landing page, a system." },
  { n: "03", title: "PROVEN ACCELERATOR FRAMEWORK", desc: "The same rapid-iteration methodology used by the fastest-growing startups. Learn, build, test, iterate." },
  { n: "04", title: "300+ PROFESSIONALS TRAINED", desc: "From beginners to advanced, corporates to freelancers. The system flexes to every level and background." },
  { n: "05", title: "HOMEWORK THAT ADVANCES YOUR WORK", desc: "Every assignment moves your actual career or business forward. The accelerator pays for itself." },
  { n: "06", title: "THE FULL CLAUDE STACK", desc: "Projects, Memory, Cowork, Scheduled Tasks, MCP, Artifacts. The entire platform, not just the chat window." },
  { n: "07", title: "FRAMEWORK OVER FEATURES", desc: "Tools update weekly. The thinking behind them does not. A systematic approach that keeps working as Claude evolves." },
  { n: "08", title: "WEEKLY OFFICE HOURS", desc: "Beyond the workshops, Thursday office hours keep you unstuck between weeks. Bring your morning coffee and your questions." },
];

export default function Reasons() {
  return (
    <section className="reasons-section">
      <div className="container">
        <div className="eyebrow anim" style={{ color: "var(--text-dark-grey)" }}>WHY THIS ACCELERATOR</div>
        <h2 className="dark anim">8 REASONS PEOPLE ARE JOINING</h2>
        <div className="reasons-grid">
          {reasons.map((r, i) => (
            <div key={r.n} className={`reason-item anim ${i % 2 === 1 ? "d1" : ""}`}>
              <div className="reason-n">{r.n}</div>
              <div><h4>{r.title}</h4><p>{r.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
