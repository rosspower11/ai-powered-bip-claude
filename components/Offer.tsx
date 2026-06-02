const groups = [
  {
    n: "\u2460",
    title: "6-Week ClaudeOS Accelerator",
    subtitle: "7 July \u2013 11 August 2026",
    items: [
      "Pre-work week before Week 1: your OS Audit. What's eating your time, where your zone of genius is, what's worth standardising.",
      "6 \u00D7 90-minute live workshops, one per week",
      "6 \u00D7 60-minute office hours with Ross, one per week",
      "Weekly build sprints. Each week ends with a working Skill or piece of your OS",
      "Optional Capstone in Week 6: present your OS to the cohort, Ross, and a guest expert",
    ],
  },
  {
    n: "\u2461",
    title: "4 Months of Community Access",
    subtitle: "After the cohort. 35+ live touchpoints with Ross across the full 4 months",
    items: [
      "Weekly Office Hours with Ross: deep-dives, real builds, real answers",
      "Fortnightly Expert Sessions: marketing, sales, operations specialists",
      "Monthly Build-with-Me: 90 minutes of Ross building his OS live, unscripted",
      "Industry Insider Sessions: guests from Anthropic, OpenAI, GHL",
    ],
  },
  {
    n: "\u2462",
    title: "The Vault",
    subtitle: "",
    items: [
      "Prompt Library: the prompts Ross uses daily",
      "Skills Vault: every SKILL.md Ross has built, downloadable and copy-ready",
      "Plugins Library: Ross's stacked bundles for Marketing, Sales, Research, Operations",
      "Ad Hoc Learning: new Claude features and techniques uploaded the moment Ross figures them out",
    ],
  },
  {
    n: "\u2463",
    title: "Ongoing Support",
    subtitle: "",
    items: [
      "On-demand support between sessions: fast response on questions and blockers",
      "Every call recorded. Catch up anytime you miss one live",
    ],
  },
  {
    n: "\u2464",
    title: "IRL Access",
    subtitle: "",
    items: [
      "Discounted tickets to every AI Powered event in Bali for the full 4 months of your community access",
    ],
  },
  {
    n: "\u2465",
    title: "Exposure",
    subtitle: "",
    items: [
      "Top member builds featured monthly on Ross's LinkedIn and Instagram",
    ],
  },
];

export default function Offer() {
  return (
    <section className="offer">
      <div className="container">
        <div className="eyebrow eyebrow-light anim" style={{ textAlign: "center" }}>WHAT YOU GET</div>
        <h2 className="white anim" style={{ textAlign: "center" }}>CLAUDE ACCELERATOR.<br />COHORT 3.0.</h2>
        <p className="sub sub-grey anim" style={{ maxWidth: 680, margin: "0 auto 56px", textAlign: "center" }}>
          Build your Personal ClaudeOS in 6 weeks. Stay for 4 more months while it compounds.
        </p>
        <div className="offer-groups">
          {groups.map((g) => (
            <div key={g.n} className="offer-group anim">
              <div className="offer-group-head">
                <div className="offer-group-num">{g.n}</div>
                <div className="offer-group-headtext">
                  <h3 className="offer-group-title">{g.title}</h3>
                  {g.subtitle && <div className="offer-group-sub">{g.subtitle}</div>}
                </div>
              </div>
              <ul className="offer-group-items">
                {g.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
