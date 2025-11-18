import { useEffect, useState } from "react";
// import FadeIn from "./FadeIn";
import ImageModal from "./ImageModal";

const photos = [
  {
    src: "/marigona2.webp",
    alt: "Hero img",
  },
  {
    src: "/Investment_img_1.webp",
    alt: "Hero img",
  },
  {
    src: "/agnesa1.webp",
    alt: "Hero img",
  },
  {
    src: "/agnesa1.webp",
    alt: "Hero img",
  },
  {
    src: "/shoqnia.webp",
    alt: "Hero img",
  },
  {
    src: "/decor.webp",
    alt: "Hero img",
  },
  {
    src: "/IMG_7.webp",
    alt: "Hero img",
  },
  {
    src: "/IMG_8.webp",
    alt: "Hero img",
  },
  {
    src: "/fejesa isa boletini.webp",
    alt: "Hero img",
  },
  {
    src: "/clirimires.webp",
    alt: "Hero img",
  },
];
const PhotoGallery = () => {
  const [selected, setSelected] = useState<null | string>(null);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  // console.log(Math.random().toFixed(1));
  // const randomAmounts = photos.map(() => Number(Math.random().toFixed(1)));
  useEffect(() => {
    document.body.style.overflow = scrollDisabled ? "hidden" : "auto";
  }, [scrollDisabled]);
  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4  p-4 ">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative mb-4 break-inside-avoid cursor-pointer"
            onClick={() => {
              setSelected(photo.src);
              setScrollDisabled(true);
            }}
          >
            <img
              className="w-full object-cover rounded-xl duration-300 hover:scale-102 cursor-pointer"
              loading="lazy"
              sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
              src={photo.src}
              alt={photo.alt}
            />
          </div>
        ))}
      </div>
      {selected && (
        <ImageModal
          src={selected}
          setSelected={setSelected}
          setScrollDisabled={setScrollDisabled}
        />
      )}
    </>
  );
};

export default PhotoGallery;
