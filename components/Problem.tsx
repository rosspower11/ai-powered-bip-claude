const useCases = [
  {
    title: "Generate leads on autopilot",
    desc: "Simple landing pages, opt-in flows and automations that bring in qualified leads while you sleep, all built and shipped from inside Claude.",
  },
  {
    title: "Produce content in your voice",
    desc: "Turn one idea into a week of content. Claude learns your tone and style so the posts, emails and scripts sound like you wrote them.",
  },
  {
    title: "Ship business materials faster",
    desc: "Pitch decks, presentations, legal contracts, hiring docs, financial spreadsheets. The work that used to take a weekend now takes an afternoon.",
  },
  {
    title: "Reclaim hours of admin every week",
    desc: "Expenses, inboxes, scheduling, follow-ups. The work that fills your day instead of the work you actually want to be doing.",
  },
];

export default function Problem() {
  return (
    <section className="painpoints">
      <div className="container">
        <div className="painpoints-head anim">
          <div className="eyebrow" style={{ color: "var(--text-dark-grey)" }}>THE REALITY</div>
          <h2 className="dark">You&apos;re probably feeling behind right now. Everyone is.</h2>
          <p className="painpoints-sub">
            AI is moving so fast. Claude is shipping new features every single week. It&apos;s overwhelming, and if you&apos;re like most people, you just don&apos;t know where to start.
          </p>
        </div>

        <div className="painpoints-flip anim d1">
          <p>
            But you could be doing so much more with AI than just asking questions and getting answers. Whether you&apos;re a business owner, a founder, or planning to be one, you can free up more time and earn more money with AI&hellip; <strong>you just need to know how.</strong>
          </p>
          <p className="painpoints-flip-lead">
            The people getting the most out of Claude are using it to do one or a few of these things:
          </p>
        </div>

        <div className="usecase-grid">
          {useCases.map((u, i) => (
            <div key={u.title} className={`usecase-card anim d${(i % 4) + 1}`}>
              <div className="usecase-card-num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
