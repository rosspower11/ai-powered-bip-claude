import { COHORT_NUMBER, COHORT_TAGLINE, SIGNUP_CTA, SIGNUP_URL } from "@/lib/cohort";
import { BIP100_SUB } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero hero-center">
      <div className="hero-inner">
        <div className="hero-cohort-badge anim">
          {COHORT_NUMBER} · {COHORT_TAGLINE}
        </div>
        <h1 className="anim">
          Stop guessing your way through <strong>Claude</strong>.
        </h1>
        <p className="hero-sub anim d1">{BIP100_SUB}</p>
        <div className="anim d2">
          <a href={SIGNUP_URL} className="btn-white">
            {SIGNUP_CTA}
          </a>
        </div>
      </div>
    </section>
  );
}
