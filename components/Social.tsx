"use client";

import Image from "next/image";
import { CDN } from "@/lib/cdn";

const col1 = [
  "Screenshot 2026-02-02 at 17.14.30.png",
  "Screenshot 2026-02-03 at 09.24.27.png",
  "Screenshot 2026-02-03 at 09.24.41.png",
  "Screenshot 2026-02-03 at 09.24.50.png",
];

const col2 = [
  "Screenshot 2026-02-03 at 09.24.58.png",
  "Screenshot 2026-02-03 at 09.25.10.png",
  "Screenshot 2026-02-28 at 09.58.43.png",
  "Screenshot 2026-02-28 at 09.59.36.png",
];

const col3 = [
  "Screenshot 2026-02-28 at 09.59.46.png",
  "Screenshot 2026-02-28 at 10.00.06.png",
  "Screenshot 2026-02-28 at 10.00.41.png",
  "Screenshot 2026-02-28 at 10.04.39.png",
];

function ProofColumn({ images, direction }: { images: string[]; direction: "up" | "down" }) {
  return (
    <div className="proof-col-mask">
      <div className={`proof-col-track proof-col-${direction}`}>
        {[...images, ...images].map((id, i) => (
          <div key={i} className="proof-card">
            <Image
              src={`${CDN}/proof/${encodeURIComponent(id)}`}
              alt="Social proof"
              width={360}
              height={640}
              sizes="(max-width: 768px) 360px, 33vw"
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Social() {
  return (
    <section className="social" id="proof">
      <div className="container" style={{ textAlign: "center", marginBottom: 48 }}>
        <div className="eyebrow eyebrow-light anim">WHAT PEOPLE ARE SAYING</div>
        <h2 className="white anim">HEAR FROM PEOPLE LIKE YOU</h2>
        <p className="anim" style={{ color: "rgba(255,255,255,0.5)", maxWidth: 600, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
          Who have experienced Ross&apos; approach to AI education.
        </p>
      </div>
      <div className="proof-grid">
        <ProofColumn images={col1} direction="up" />
        <ProofColumn images={col2} direction="down" />
        <ProofColumn images={col3} direction="up" />
      </div>
    </section>
  );
}
