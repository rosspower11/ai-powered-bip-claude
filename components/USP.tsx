import { WORKSHOP_TIME } from "@/lib/cohort";

export default function USP() {
  return (
    <section className="usp-twoblock" id="workshops">
      <div className="container">
        <div className="usp-twoblock-head anim">
          <div className="eyebrow eyebrow-light">6 WEEKS, 6 LIVE WORKSHOPS</div>
          <h2 className="white">How you&apos;ll learn live with me.</h2>
          <p className="usp-twoblock-join">
            Exclusive to <strong>BIP100 members</strong>.
          </p>
        </div>
        <div className="usp-twoblock-grid usp-twoblock-grid--single">
          <div className="usp-block anim d1">
            <div className="usp-block-num">6 &times; 90 min</div>
            <div className="usp-block-title">Workshops</div>
            <div className="usp-block-when">Weekly &middot; {WORKSHOP_TIME}</div>
            <p className="usp-block-desc">
              A step-by-step, mastermind-style learning journey. Each week unlocks a new level of
              Claude with live walkthroughs, real builds and Q&amp;A.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
