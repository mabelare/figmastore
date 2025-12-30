import { useEffect, useRef } from "react";
import purple1 from "../assets/purple1.jpg";
import purple2 from "../assets/purple2.jpg";

const images = [
  {
    src: purple1,
    shape: "normal",
  },
  {
    src: purple2,
    shape: "normal",
  },
];

export default function PurpleSectionImages() {
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

      // when user reaches the right end → jump back
      if (scrollLeft >= scrollWidth * 2 - 10) {
        container.scrollLeft = scrollLeft - scrollWidth;
      }
      // when user reaches the left end → jump forward
      else if (scrollLeft <= 10) {
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
      <div className="flex gap-8 px-10 h-full items-end pb-8">
        {loopImages.map((img, index) => (
          <div
            key={index}
            className={`image-shape ${img.shape}`}
            style={{
              width: "clamp(250px, 25vw, 450px)",
              height: "clamp(250px, 25vw, 450px)",
            }}
          >
            <img
              src={img.src}
              alt=""
              className={`w-full h-full ${
                img.src === purple2 ? "object-cover object-top" : "object-cover"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
