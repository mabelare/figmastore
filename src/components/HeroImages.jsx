import { useEffect, useRef } from "react";
import more1 from "../assets/more1.jpg";
import unlimited2 from "../assets/unlimited2.jpg";

const images = [
  {
    src: more1,
    shape: "cloud",
  },
  {
    src: unlimited2,
    shape: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    shape: "w",
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    shape: "x",
  },
];

export default function HeroImages() {
  const scrollRef = useRef(null);

  const loopImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    requestAnimationFrame(() => {
      const scrollWidth = container.scrollWidth / 3;
      container.scrollLeft = scrollWidth;
    });

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth / 3;
      const scrollLeft = container.scrollLeft;

      if (scrollLeft >= scrollWidth * 2 - 10) {
        container.scrollLeft = scrollLeft - scrollWidth;
      } else if (scrollLeft <= 10) {
        container.scrollLeft = scrollLeft + scrollWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="absolute inset-y-0 right-0 w-full overflow-x-auto touch-pan-x no-scrollbar"
    >
      <div className="flex gap-4 px-10 h-full items-center">
        {loopImages.map((img, index) => (
          <div
            key={index}
            className={`image-shape ${img.shape}`}
            style={{
              width: "clamp(200px, 20vw, 400px)",
              height: "clamp(200px, 20vw, 400px)",
            }}
          >
            <img
              src={img.src}
              alt=""
              className={`w-full h-full ${
                img.src === unlimited2
                  ? "object-cover object-top"
                  : "object-cover"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
