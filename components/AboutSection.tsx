import Image from "next/image";
import { CDN } from "@/lib/cdn";

export default function AboutSection() {
  return (
    <section className="about" id="about-section">
      <div className="about-layout">
        <div className="about-photo-col anim">
          <div className="about-photo" style={{ position: "relative" }}>
            <Image
              src={`${CDN}/ross-headshots/${encodeURIComponent("ross promise photo.png")}`}
              alt="Ross Power"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              loading="lazy"
              style={{ objectFit: "cover", borderRadius: "inherit" }}
            />
          </div>
          <div className="about-role">AI Founder &amp; Educator</div>
        </div>
        <div className="about-text anim d1">
          <div className="eyebrow eyebrow-light">ABOUT ME</div>
          <h2 className="white" style={{ marginTop: "8px" }}>Meet Ross.</h2>
          <p>Years before any of this started, I worked at Accenture, one of the largest tech consulting companies in the world, training in design thinking and workshop facilitation.</p>
          <p>Across the short time I was there I ran well over 100 workshops and presented to more than 1,000 individuals along the way. My &ldquo;one thing&rdquo; through all of it was making tech and business simple and accessible to people, which is something I&apos;ve always loved doing and always wanted to turn into some kind of business of my own.</p>
          <p>I moved into startups (yes, I was a full techbro), leading product and engineering teams in blockchain, facilitating design sprints for C-suite executives, and most recently as Head of Product at a NYSE-listed education company.</p>
          <p>This programme is the result of everything I&apos;ve learnt, now translated for learning AI: prompts, skills, plugins, automations and workflows that I use myself to run my business.</p>
          <p>Oh, and I built this entire landing page with Claude (you&apos;ll be able to as well&hellip; my promise).</p>
        </div>
      </div>
    </section>
  );
}
