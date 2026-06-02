const steps = [
  {
    n: "01",
    title: "Guided learning, then real case studies",
    desc: "Every workshop opens with a clear framework and a simple explainer of the feature we&apos;re using that week. Then we spend most of the time on actual case studies. Real ways people like you are using it in their business right now.",
    meta: "First 60 minutes",
  },
  {
    n: "02",
    title: "Try it yourself, live with me",
    desc: "The next 30 minutes is hands-on. We do live demos and live builds together. You try it, I&apos;ll watch over your shoulder, and we uncover the blockers and questions in real time.",
    meta: "Final 30 minutes",
  },
  {
    n: "03",
    title: "Take it home with a mission",
    desc: "After every workshop you walk away with the work you started in class plus a new mission. Practical homework to keep you building and learning between sessions.",
    meta: "Between weeks",
  },
  {
    n: "04",
    title: "Two 1:1 sessions with me",
    desc: "You&apos;ll also get two private 30-minute one-to-ones with me so you can get unstuck on anything specific to your business and make sure you&apos;re actually putting all of this to work.",
    meta: "Included for BIP100",
  },
];

export default function HowYouApply() {
  return (
    <section className="apply">
      <div className="container">
        <div className="apply-head anim">
          <div className="eyebrow eyebrow-light">HOW IT WORKS</div>
          <h2 className="white">How you&apos;ll apply what you learn.</h2>
        </div>
        <div className="apply-list">
          {steps.map((s, i) => (
            <div key={s.n} className={`apply-item anim d${(i % 5) + 1}`}>
              <div className="apply-item-num">{s.n}</div>
              <div className="apply-item-body">
                <h3>{s.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: s.desc }} />
                <div className="apply-item-meta">{s.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
