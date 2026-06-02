import {
  COHORT_NUMBER,
  COHORT_START_SHORT,
  COHORT_TAGLINE,
  SIGNUP_CTA,
  SIGNUP_URL,
  WORKSHOP_TIME,
} from "@/lib/cohort";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2 className="anim">
          EVERYONE WILL LEARN
          <br />
          CLAUDE EVENTUALLY.
          <br />
          THE ADVANTAGE GOES TO
          <br />
          THOSE WHO LEARN IT FIRST.
        </h2>
        <p
          className="sub anim"
          style={{
            color: "var(--text-muted)",
            textAlign: "center",
            margin: "0 auto 20px",
          }}
        >
          {COHORT_NUMBER} · {COHORT_TAGLINE.replace(" EXCLUSIVE", "")}. 6 weeks. 90 minutes a
          week. Confidence comes from doing.
        </p>
        <div className="final-details anim">
          <div className="final-detail">
            <strong>Starts</strong> {COHORT_START_SHORT}
          </div>
          <div className="final-detail">
            <strong>Time</strong> {WORKSHOP_TIME}
          </div>
          <div className="final-detail">
            <strong>Format</strong> 6 live workshops
          </div>
          <div className="final-detail">
            <strong>Access</strong> BIP100 only
          </div>
        </div>
        <a href={SIGNUP_URL} className="btn-white anim">
          {SIGNUP_CTA}
        </a>
      </div>
    </section>
  );
}
