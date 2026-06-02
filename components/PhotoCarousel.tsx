import Image from "next/image";
import { CDN } from "@/lib/cdn";

export default function PhotoCarousel({
  label,
  images,
  style,
}: {
  label?: string;
  images: { src: string; alt: string }[];
  style?: React.CSSProperties;
}) {
  return (
    <div className="carousel">
      {label && <div className="carousel-label">{label}</div>}
      <div className="carousel-track" style={style}>
        {[...images, ...images].map((img, i) => (
          <div key={i} className="carousel-img" style={{ position: "relative" }}>
            <Image
              src={`${CDN}/ross-events/${img.src}`}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 280px, 400px"
              loading="lazy"
              style={{ objectFit: "cover", borderRadius: "inherit" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
