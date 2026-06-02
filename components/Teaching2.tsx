import Image from "next/image";
import { CDN } from "@/lib/cdn";

export default function Teaching2() {
  return (
    <section className="teaching">
      <div className="teaching-inner">
        <div className="teaching-text anim">
          <h2>THIS IS NOT A COURSE.<br />IT IS AN ACCELERATOR.</h2>
          <p>Courses are passive. You watch, you take notes, you forget. <strong>Accelerators are active.</strong> You learn something, you build something, you ship something. Every week.</p>
          <p>Whether you are building a business, building a career, or building a reputation as someone who actually understands AI, the methodology is the same: <strong>learn by doing.</strong></p>
        </div>
        <div className="teaching-photo anim d1" style={{ position: "relative" }}>
          <Image
            src={`${CDN}/ross-events/SAM00013.JPG`}
            alt="Ross working with participants"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "inherit" }}
          />
        </div>
      </div>
    </section>
  );
}
