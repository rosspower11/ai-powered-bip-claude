import { COHORT_NUMBER, COHORT_TAGLINE } from "@/lib/cohort";

const cohortLabel = `COHORT ${COHORT_NUMBER}`;

const items = [
  cohortLabel,
  COHORT_TAGLINE,
  "CONFIDENCE COMES FROM DOING",
  cohortLabel,
  COHORT_TAGLINE,
  "CONFIDENCE COMES FROM DOING",
];

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span
            key={i}
            className={`marquee-item ${
              text.includes("BIP") || text.includes("EXCLUSIVE") ? "marquee-item--accent" : ""
            }`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
