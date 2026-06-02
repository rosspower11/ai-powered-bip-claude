import { WORKSHOP_SCHEDULE } from "@/lib/cohort";

type WorkshopCard = {
  num: string;
  name: string;
  date: string;
  icon: React.ReactNode;
};

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M4 6h16v10H8l-4 4z"/><path d="M8 10h8M8 13h5"/></svg>
);
const CustomiseIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><circle cx="6" cy="7" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="9" cy="17" r="2"/><path d="M3 7h1M8 7h13M3 12h13M20 12h1M3 17h4M11 17h10"/></svg>
);
const CreateIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M5 17l1.2 2.8M18.5 17.5l1 2"/></svg>
);
const ConnectIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M9 8h-2a4 4 0 100 8h2"/><path d="M15 16h2a4 4 0 100-8h-2"/><path d="M8 12h8"/></svg>
);
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14"/></svg>
);
const CommandIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke}><path d="M9 6a3 3 0 10-3 3h12a3 3 0 10-3-3v12a3 3 0 103-3H6a3 3 0 103 3z"/></svg>
);

const workshops: WorkshopCard[] = [
  { num: "01", name: "Chat", date: WORKSHOP_SCHEDULE[0].date, icon: <ChatIcon /> },
  { num: "02", name: "Customise", date: WORKSHOP_SCHEDULE[1].date, icon: <CustomiseIcon /> },
  { num: "03", name: "Create", date: WORKSHOP_SCHEDULE[2].date, icon: <CreateIcon /> },
  { num: "04", name: "Connect", date: WORKSHOP_SCHEDULE[3].date, icon: <ConnectIcon /> },
  { num: "05", name: "Code", date: WORKSHOP_SCHEDULE[4].date, icon: <CodeIcon /> },
  { num: "06", name: "Command", date: WORKSHOP_SCHEDULE[5].date, icon: <CommandIcon /> },
];

export default function ClaudeOS() {
  return (
    <section className="learn" id="methodology">
      <div className="container">
        <p className="eyebrow eyebrow-light anim">THIS IS WHAT YOU&apos;LL LEARN</p>
        <h2 className="white anim d1">Six weeks. Six workshops. Six levels of Claude.</h2>
        <p className="sub sub-grey anim d2 learn-intro">
          Across 6 weeks I&apos;ll guide you step-by-step through the 6 levels I&apos;ve designed to help you master Claude. One workshop, one level, every week.
        </p>
        <div className="learn-track">
          {workshops.map((w, i) => (
            <div key={w.num} className={`learn-card anim d${(i % 5) + 1}`}>
              <div className="learn-card-num">WORKSHOP {w.num}</div>
              <div className="learn-card-icon">{w.icon}</div>
              <div className="learn-card-name">{w.name}</div>
              <div className="learn-card-date">{w.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
