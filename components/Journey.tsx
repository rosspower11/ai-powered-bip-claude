import { WORKSHOP_SCHEDULE } from "@/lib/cohort";

type Workshop = {
  num: string;
  date: string;
  level: string;
  name: string;
  hook: string;
  paragraphs: string[];
  tools: string[];
  toolsExtra?: boolean;
};

const workshops: Workshop[] = [
  {
    num: "01",
    date: WORKSHOP_SCHEDULE[0].date,
    level: "Level 1",
    name: "Chat",
    hook: "93% of Claude users are stuck here. By the end of week one, you won&apos;t be.",
    paragraphs: [
      "I&apos;ll show you how to stop getting frustrated with dumb responses and burning through your tokens. You&apos;ll learn how I write prompts that actually work, specifying roles, giving context, structuring outputs, and getting Claude to think with you instead of at you.",
      "We&apos;ll set up Projects and Memory together so Claude starts remembering the things that matter, and you stop re-explaining yourself in every conversation.",
    ],
    tools: ["Claude.ai", "Projects", "Memory", "Artifacts"],
  },
  {
    num: "02",
    date: WORKSHOP_SCHEDULE[1].date,
    level: "Level 2",
    name: "Customise",
    hook: "Only 5% of users get here. This is where Claude starts to feel like yours.",
    paragraphs: [
      "On Level 2, Claude remembers you. Your voice. Your design preferences. The way you actually run your business. You&apos;re constantly evolving, and I&apos;ll show you how Claude evolves with you.",
      "We&apos;ll use the stock Skills that ship with Claude and you&apos;ll build a couple of your own, encoding the repetitive bits of your work so they happen to your standard, every time.",
    ],
    tools: ["Skills", "Style guides", "System prompts", "Personal knowledge"],
  },
  {
    num: "03",
    date: WORKSHOP_SCHEDULE[2].date,
    level: "Level 3",
    name: "Create",
    hook: "Just 1.5% of users get here. The 80:20 rule kicks in.",
    paragraphs: [
      "When you&apos;re at Level 3, you&apos;re mostly creating things inside Claude. Slides for your next pitch. Full spreadsheets. Legal contracts. Hiring docs. Documents that look and sound like you.",
      "Think 80:20. 80% of the work happens in Claude, 20% finishing touches done elsewhere. I&apos;ll show you the templates and prompts I use to ship business-grade material in an afternoon instead of a weekend.",
    ],
    tools: ["PowerPoint", "Google Slides", "Keynote", "Excel", "Canva", "Claude Design", "Higgsfield", "Word", "PDF"],
    toolsExtra: true,
  },
  {
    num: "04",
    date: WORKSHOP_SCHEDULE[3].date,
    level: "Level 4",
    name: "Connect",
    hook: "0.4% of users. The ones who are crushing it.",
    paragraphs: [
      "If you&apos;re here, you&apos;ve got your apps talking to each other. You can pull call recordings with one prompt. You can retrieve docs, slides and files inside Claude from wherever they live.",
      "I&apos;ll walk you through connecting Claude to the tools you already use, your inbox, your calendar, your CRM, your meeting notes, so context flows in and actions flow out without you copy-pasting between tabs.",
    ],
    tools: ["Gmail", "Google Drive", "Google Calendar", "Notion", "Slack", "HubSpot", "Fireflies"],
  },
  {
    num: "05",
    date: WORKSHOP_SCHEDULE[4].date,
    level: "Level 5",
    name: "Code",
    hook: "You don&apos;t need to be a developer. I&apos;m not one either.",
    paragraphs: [
      "By Level 5 you&apos;re building real software with Claude Code, landing pages, dashboards, internal tools, mini-apps. The thing you&apos;ve had on a sticky note for a year, shipped in a week.",
      "I&apos;ll show you how I built this entire landing page with Claude Code, and you&apos;ll leave with something of your own deployed to a live URL.",
    ],
    tools: ["Claude Code", "Cursor", "Next.js", "Vercel", "GitHub", "Cloudflare"],
  },
  {
    num: "06",
    date: WORKSHOP_SCHEDULE[5].date,
    level: "Level 6",
    name: "Command",
    hook: "Less than 0.001% of users. 1 in 100,000.",
    paragraphs: [
      "By Week 6 you&apos;ve got your own operating system. Skills, plugins and agents running. The recurring work in your week, follow-ups, research, content, inbox triage, reporting, happening on schedule and on trigger.",
      "Your focus shifts. Less on the tech, more on the business model. Stop building stuff for the sake of it. Start using all of this to actually make more money and free up your time.",
    ],
    tools: ["Agents", "Scheduled Tasks", "MCP", "Plugins", "Cron"],
  },
];

export default function Journey() {
  return (
    <section className="workshops" id="roadmap">
      <div className="container">
        <div className="workshops-head anim">
          <div className="eyebrow eyebrow-light">WHAT WE&apos;LL DO IN EACH WORKSHOP</div>
          <h2 className="white">Six workshops, end-to-end.</h2>
          <p className="sub sub-grey">Here&apos;s exactly what we&apos;ll cover each week.</p>
        </div>
        <div className="workshops-list">
          {workshops.map((w) => (
            <article key={w.num} className="workshop-card anim">
              <header className="workshop-card-head">
                <div className="workshop-card-meta">
                  <span className="workshop-card-num">WORKSHOP {w.num}</span>
                  <span className="workshop-card-date">{w.date}</span>
                </div>
                <h3 className="workshop-card-title">
                  <span className="workshop-card-level">{w.level}</span>
                  <span className="workshop-card-name">{w.name}</span>
                </h3>
                <p className="workshop-card-hook" dangerouslySetInnerHTML={{ __html: w.hook }} />
              </header>
              <div className="workshop-card-body">
                {w.paragraphs.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
              <div className="workshop-card-tools">
                <span className="workshop-card-tools-label">You&apos;ll touch:</span>
                {w.tools.map((t) => (
                  <span key={t} className="tool-chip">{t}</span>
                ))}
                {w.toolsExtra && <span className="tool-chip tool-chip-more">+ many more</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
