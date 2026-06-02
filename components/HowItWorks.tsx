export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="container">
        <div className="eyebrow anim" style={{ color: "var(--text-dark-grey)" }}>HOW IT WORKS</div>
        <h2 className="dark anim">LEARN. BUILD. SHIP. REPEAT.</h2>
        <p className="sub sub-dark anim">Built on proven startup accelerator methodology. Rapid learning, rapid building, rapid iteration.</p>
        <div className="steps-row anim">
          <div className="step-item"><div className="step-num">01</div><span className="step-arrow">&rarr;</span><h3>ENROLL AND PREPARE</h3><p>Choose your ticket. Get instant access to pre-work materials and the cohort community.</p></div>
          <div className="step-item"><div className="step-num">02</div><span className="step-arrow">&rarr;</span><h3>BUILD LIVE EVERY THURSDAY</h3><p>90 minutes of hands-on guided building. Leave each session with something tangible.</p></div>
          <div className="step-item"><div className="step-num">03</div><h3>LAUNCH WITH AN UNFAIR ADVANTAGE</h3><p>By Week 6, you will have a complete system. From Chat to Command &mdash; your personal OS, installed.</p></div>
        </div>
      </div>
    </section>
  );
}
