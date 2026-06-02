"use client";

import { useState } from "react";

const modes = [
  {
    id: "chat",
    label: "Chat",
    role: "The Strategist",
    sub: "Your first hire",
    desc: "Thinks through complex problems, researches and synthesises, writes in your voice, and pressure-tests every idea before you commit. The hire that levels up how you think.",
    features: ["Think through complex problems", "Research, analyse and synthesise", "Write in your voice at any length", "Brainstorm and pressure-test ideas"],
  },
  {
    id: "cowork",
    label: "Cowork",
    role: "The Operator",
    sub: "Your second hire",
    desc: "Takes control of your desktop. Creates documents, builds presentations, connects your tools, manages your files. You direct, they execute. The hire that levels up how you ship.",
    features: ["Create docs, decks and spreadsheets", "Automate your entire desktop", "Connect apps, tools and workflows", "Build systems without writing code"],
  },
  {
    id: "code",
    label: "Code",
    role: "The Builder",
    sub: "Your third hire",
    desc: "Ships full applications. Deploys live websites, builds APIs and automations from the terminal. No engineering background required. The hire that levels up what you build.",
    features: ["Ship full applications from scratch", "Deploy live websites in hours", "Build APIs and backend automations", "Production-ready, not prototypes"],
  },
];

export default function Modes() {
  const [activeMode, setActiveMode] = useState("chat");
  const active = modes.find((m) => m.id === activeMode)!;

  return (
    <section className="modes">
      <div className="container">
        <div className="eyebrow eyebrow-light anim">YOUR THREE NEW HIRES</div>
        <h2 className="white anim">THE TEAM THAT<br />LEVELS YOU UP.</h2>
        <p className="sub sub-grey anim">Claude shows up as three very different hires. The Strategist. The Operator. The Builder. Each one unlocks new power-ups in the ClaudeOS game.</p>
        <div className="mode-tabs anim">
          {modes.map((m) => (
            <div
              key={m.id}
              className={`mode-tab ${activeMode === m.id ? "active" : ""}`}
              onClick={() => setActiveMode(m.id)}
            >
              {m.label}
            </div>
          ))}
        </div>
        <div className="mode-panels">
          <div className="mode-panel active">
            <div className="mode-panel-role">{active.role}</div>
            <div className="mode-panel-sub">{active.sub}</div>
            <div className="mode-panel-desc">{active.desc}</div>
            <div className="mode-panel-features">
              {active.features.map((f, i) => (
                <div key={i} className="mode-feature">
                  <div className="mode-feature-dot"></div>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modes-close anim">Three hires. Six levels. One OS that works while you sleep.</div>
      </div>
    </section>
  );
}
