import { SIGNUP_CTA, SIGNUP_URL, WORKSHOP_TIME } from "@/lib/cohort";

export default function WhoFor() {
  const cards = [
    {
      title: "YOU ARE A BIP100 MEMBER",
      desc: "This cohort is reserved for BIP100 members only. If you are not in BIP100, join the public Claude Summer Cohort instead.",
    },
    {
      title: "YOU KNOW AI MATTERS BUT YOU ARE NOT USING IT PROPERLY YET",
      desc: "You have a Claude account. You have tried a few prompts. There is a massive gap between what you are doing and what is possible. You want that gap closed in weeks.",
    },
    {
      title: "YOU ARE INSIDE A COMPANY AND WANT TO LEAD",
      desc: "Your organisation talks about AI but nobody is using it well. You want to be the person who does. The one who brings Claude-powered solutions to every table.",
    },
    {
      title: "YOU HAVE 90 MINUTES A WEEK AND YOU ARE READY",
      desc: `No more courses that collect dust. A focused, live, hands-on programme where you build something real every week. Weekly workshops, ${WORKSHOP_TIME}.`,
    },
  ];

  return (
    <section className="who-section">
      <div className="container">
        <div className="eyebrow anim" style={{ color: "var(--text-dark-grey)" }}>
          IS THIS FOR YOU?
        </div>
        <h2 className="dark anim">THIS IS FOR YOU IF...</h2>
        <div className="who-grid">
          {cards.map((c, i) => (
            <div key={i} className={`who-card anim ${i % 2 === 1 ? "d1" : ""}`}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="who-cta anim d2">
          <a href={SIGNUP_URL} className="btn-dark">
            {SIGNUP_CTA}
          </a>
        </p>
      </div>
    </section>
  );
}
