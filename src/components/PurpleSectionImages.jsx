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
  return (
    <div className="absolute inset-y-0 right-0 w-full overflow-x-auto touch-pan-x no-scrollbar">
      <div className="flex gap-8 px-10 h-full items-end pb-8">
        {images.map((img, index) => (
          <div
            key={index}
            className={`image-shape ${img.shape}`}
            style={{ width: "250px", height: "250px" }}
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
