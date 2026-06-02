import Image from "next/image";
import { CDN } from "@/lib/cdn";

export default function Teaching({ photoFirst = true, heading, paragraphs, photoSrc, photoAlt }: {
  photoFirst?: boolean;
  heading: string;
  paragraphs: string[];
  photoSrc: string;
  photoAlt: string;
}) {
  const photo = (
    <div className="teaching-photo anim" style={{ position: "relative" }}>
      <Image
        src={`${CDN}/ross-events/${photoSrc}`}
        alt={photoAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
        style={{ objectFit: "cover", borderRadius: "inherit" }}
      />
    </div>
  );
  const text = (
    <div className="teaching-text anim d1">
      <h2 dangerouslySetInnerHTML={{ __html: heading }} />
      {paragraphs.map((p, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </div>
  );

  return (
    <section className="teaching">
      <div className="teaching-inner">
        {photoFirst ? <>{photo}{text}</> : <>{text}{photo}</>}
      </div>
    </section>
  );
}
