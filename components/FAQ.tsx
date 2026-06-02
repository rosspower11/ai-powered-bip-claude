"use client";

import { useState } from "react";
import { WORKSHOP_TIME } from "@/lib/cohort";
import { PUBLIC_COHORT_LABEL, PUBLIC_COHORT_URL } from "@/lib/site";

const faqs = [
  {
    q: "Who can join this cohort?",
    a: "This programme is only available to BIP100 members. If you are not a BIP100 member, join the public Claude Summer Cohort at claude.aipowered.xyz instead.",
  },
  {
    q: "What exactly is included?",
    a: `Six live 90-minute workshops over 6 weeks (${WORKSHOP_TIME}), complete worksheet and prompt libraries, access to the private cohort community, weekly homework with feedback, session recordings, two private 1:1 sessions with Ross, and lifetime access to all materials.`,
  },
  {
    q: "How quickly will I see results?",
    a: "Week 1. Every session ends with something tangible. By Week 3, you will have real artifacts shipping. By Week 6, a complete personal OS, from Chat to Command.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. This is designed for professionals at every level. If you can type and think about your work, you can do this. Claude handles the technical execution. I teach you how to direct it.",
  },
  {
    q: "What if I miss a session?",
    a: "Recordings are available. But this is designed to be attended live. The interaction, the real-time problem solving, and the cohort energy are where the real value is.",
  },
  {
    q: "Do I need a paid Claude subscription?",
    a: "A Claude Pro subscription is recommended. Features like Projects, Cowork mode, and Scheduled Tasks require the Pro plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq">
      <div className="container">
        <div className="eyebrow eyebrow-light anim">FREQUENTLY ASKED</div>
        <h2 className="white anim">QUESTIONS BEFORE YOU JOIN</h2>
        <p className="faq-public-note anim">
          Not in BIP100?{" "}
          <a href={PUBLIC_COHORT_URL} target="_blank" rel="noopener noreferrer">
            Join {PUBLIC_COHORT_LABEL} on claude.aipowered.xyz
          </a>
        </p>
        <div className="faq-grid anim">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`}>
              <div
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
