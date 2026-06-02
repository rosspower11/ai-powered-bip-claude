import {
  COHORT_NUMBER,
  COHORT_START_DISPLAY,
  COHORT_TAGLINE,
  WORKSHOP_TIME,
} from "@/lib/cohort";

export default function CohortBanner() {
  return (
    <section className="cohort-banner cohort-banner--bip">
      <div className="container cohort-banner-inner">
        <div className="cohort-banner-badge anim">{COHORT_NUMBER}</div>
        <div className="cohort-banner-tagline anim d1">{COHORT_TAGLINE}</div>
        <div className="cohort-banner-eyebrow anim d2">FIRST WORKSHOP</div>
        <h2 className="cohort-banner-date anim d3">
          {COHORT_START_DISPLAY} · {WORKSHOP_TIME}
        </h2>
        <p className="cohort-banner-sub anim d5">
          6 weeks · 6 live workshops · BIP100 members only
        </p>
      </div>
    </section>
  );
}
