import Image from "next/image";
import { CDN } from "@/lib/cdn";

export default function CoachingCarousel() {
  const row1 = [
    { src: "IMG_3858.jpeg", alt: "1-on-1 coaching" },
    { src: "4.png", alt: "Workshop group shot" },
    { src: "DSC02164.jpg", alt: "Panel discussion" },
    { src: "20.png", alt: "Whiteboard session" },
  ];
  const row2 = [
    { src: "PFER5335.JPG", alt: "Ross presenting slides" },
    { src: "IMG_3889.jpeg", alt: "Networking break" },
    { src: "DSC00028.JPG", alt: "Screen share moment" },
    { src: "PFER5554.JPG", alt: "Event venue wide" },
  ];

  return (
    <div className="carousel-double">
      <div className="carousel-label">COACHING AND TEACHING IN ACTION</div>
      <div className="carousel-row forward">
        {[...row1, ...row1].map((img, i) => (
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
      <div className="carousel-row reverse">
        {[...row2, ...row2].map((img, i) => (
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
