import { WORKSHOP_SCHEDULE } from "@/lib/cohort";

const levels = [
  { num: "06", name: "Command", tag: "Run agents on schedules and triggers. Your work happens while you sleep." },
  { num: "05", name: "Code", tag: "Build apps, dashboards and live websites — no engineering background needed." },
  { num: "04", name: "Connect", tag: "Wire Claude into Gmail, Drive, Calendar, Notion, Slack and your CRM." },
  { num: "03", name: "Create", tag: "Slides, decks, contracts, spreadsheets — all built and branded inside Claude." },
  { num: "02", name: "Customise", tag: "Use and build Skills so Claude works in your voice and to your standards." },
  { num: "01", name: "Chat", tag: "Speak the language of AI. Get useful answers every time you open Claude." },
];

export default function Roadmap() {
  return (
    <section className="roadmap" id="journey">
      <div className="container-narrow">
        <div className="roadmap-head anim">
          <div className="eyebrow eyebrow-light">YOUR 6-WEEK ROADMAP</div>
          <h2 className="white">From Newbie to Pro,<br />one level at a time.</h2>
          <p className="sub sub-grey">Each tile is one week, one workshop, one new level of Claude. Start at the bottom — finish at the top.</p>
        </div>
        <div className="roadmap-stack">
          {levels.map((l, i) => (
            <div key={l.num} className={`roadmap-tile anim d${(i % 5) + 1}`}>
              <div className="roadmap-tile-side">
                <div className="roadmap-tile-num">{l.num}</div>
                <div className="roadmap-tile-line" />
              </div>
              <div className="roadmap-tile-body">
                <div className="roadmap-tile-meta">
                  <span className="roadmap-tile-date">{WORKSHOP_SCHEDULE[5 - i].date}</span>
                  <span className="roadmap-tile-week">WORKSHOP {l.num}</span>
                </div>
                <h3 className="roadmap-tile-name">Level {Number(l.num)} &middot; {l.name}</h3>
                <p className="roadmap-tile-tag">{l.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
