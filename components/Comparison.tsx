export default function Comparison() {
  const rows = [
    { label: "Format", hl: "✓ Live workshops with real-time Q&A", mid: "✗ Pre-recorded videos you watch alone", low: "✗ Random YouTube tutorials" },
    { label: "What you build", hl: "✓ Real products, systems, and assets every week", mid: "✗ Follow-along exercises with no real output", low: "✗ Scattered experiments with no structure" },
    { label: "Claude depth", hl: "✓ All 6 levels: Chat, Customise, Create, Connect, Code, Command", mid: "✗ Basic prompting tips, maybe Projects", low: "✗ Whatever you stumble across" },
    { label: "Feedback", hl: "✓ Weekly homework reviewed, live troubleshooting", mid: "✗ Auto-graded quizzes, no personalisation", low: "✗ None. You do not know what you do not know" },
    { label: "Community", hl: "✓ Private cohort of 30 ambitious professionals", mid: "✗ Forum with thousands of strangers", low: "✗ Complete isolation" },
    { label: "Instructor", hl: "✓ 300+ people trained, runs entire business on Claude", mid: "✗ Content creator who tried Claude for a month", low: "✗ You are your own instructor" },
    { label: "Time to results", hl: "✓ Tangible output by end of Week 1", mid: "✗ Maybe useful after completing all modules", low: "✗ Months of trial and error, if ever" },
    { label: "Stays current", hl: "✓ Updated every cohort as Claude evolves", mid: "✗ Recorded once, outdated within weeks", low: "✗ You have to track every update yourself" },
  ];

  return (
    <section className="comparison">
      <div className="container">
        <div className="eyebrow eyebrow-light anim">COMPARE YOUR OPTIONS</div>
        <h2 className="white anim">HOW THIS STACKS UP</h2>
        <p className="sub sub-grey anim">A real comparison. Not marketing fluff.</p>
        <table className="comp-table">
          <thead><tr className="anim"><th></th><th className="hl">CLAUDE ACCELERATOR</th><th>ONLINE AI COURSES</th><th>SELF-TEACHING</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="anim">
                <td><strong>{r.label}</strong></td>
                <td className="hl"><span className="comp-yes">✓</span> {r.hl.slice(2)}</td>
                <td><span className="comp-no">✗</span> {r.mid.slice(2)}</td>
                <td><span className="comp-no">✗</span> {r.low.slice(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
