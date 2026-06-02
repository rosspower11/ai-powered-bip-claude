"use client";

import { useState } from "react";

const levels = [
  {
    num: "01",
    name: "Chat",
    week: "Week 1",
    bg: "lb1",
    w: "22%",
    desc: "Speak the language of AI. Structure inputs, plan, research, pressure-test ideas, and get useful output every time you open Claude.",
    powerUps: ["Structured prompts", "Projects & Memory", "Research & long-form writing", "Pressure-testing ideas"],
  },
  {
    num: "02",
    name: "Customise",
    week: "Week 2",
    bg: "lb2",
    w: "36%",
    desc: "Use and build your own Skills. Encode your expertise, style, and processes so Claude follows your playbook without being told twice.",
    powerUps: ["Stock Claude Skills", "Custom Skills you build", "Style guides & voice", "Personal knowledge base"],
  },
  {
    num: "03",
    name: "Create",
    week: "Week 3",
    bg: "lb3",
    w: "50%",
    desc: "Ship live artifacts without opening another tool. Docs, decks, social assets, visuals \u2014 branded, structured, ready to use.",
    powerUps: ["Artifacts", "Branded docs & decks", "Social & visual assets", "Reusable templates"],
  },
  {
    num: "04",
    name: "Connect",
    week: "Week 4",
    bg: "lb4",
    w: "65%",
    desc: "Wire Claude into the tools you already use. Context flows in, actions flow out. Claude stops being a tab and becomes the hub.",
    powerUps: ["MCP plugins", "Native connectors (Gmail, Drive, Notion, Slack)", "Cowork (desktop control)", "Workflow triggers"],
  },
  {
    num: "05",
    name: "Code",
    week: "Week 5",
    bg: "lb5",
    w: "82%",
    desc: "Build real software with no engineering background. Landing pages, dashboards, internal tools, APIs \u2014 shipped in hours.",
    powerUps: ["Claude Code", "Landing pages & dashboards", "APIs & automations", "Deploy to live URLs"],
  },
  {
    num: "06",
    name: "Command",
    week: "Week 6",
    bg: "lb6",
    w: "100%",
    desc: "Hand off work to agents. Your personal OS runs on schedules and triggers \u2014 work happens while you sleep.",
    powerUps: ["Scheduled Tasks", "Trigger-based agents", "Multi-step orchestration", "The full ClaudeOS"],
  },
];

export default function Levels() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="levels" id="levels">
      <div className="container">
        <div className="eyebrow eyebrow-light anim">THE CLAUDEOS GAME</div>
        <h2 className="white anim">THE 6 LEVELS OF CLAUDE<br />YOU WILL MASTER</h2>
        <p className="levels-intro anim">
          ClaudeOS is the game. Six levels to clear. Each one unlocks new power-ups &mdash; the Skills, artifacts and inputs that level you up. Click any level to see what you master.
        </p>
        <div className="levels-chart">
          {levels.map((l, i) => (
            <div
              key={l.num}
              className={`level-row visible ${expanded === l.num ? "expanded" : ""}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
              onClick={() => setExpanded(expanded === l.num ? null : l.num)}
            >
              <div className="level-bar-outer">
                <div className="level-num">{l.num}</div>
                <div className={`level-bar-wrap ${l.bg}`} style={{ "--w": l.w } as React.CSSProperties}>
                  {l.name}
                  <span className="level-tag">{l.week}</span>
                  <span className="level-chevron">&#9662;</span>
                </div>
              </div>
              <div className="level-expand">
                <div className="level-expand-inner">
                  {l.desc}
                  <div className="level-powerups-label">Power-ups</div>
                  <div className="level-powerups">
                    {l.powerUps.map((p) => (
                      <div key={p} className="level-powerup">{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
