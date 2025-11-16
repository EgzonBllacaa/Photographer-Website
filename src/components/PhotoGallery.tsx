import { useEffect, useState } from "react";
// import FadeIn from "./FadeIn";
import ImageModal from "./ImageModal";

const photos = [
  {
    src: "/marigona2.jpg",
    alt: "Hero img",
  },
  {
    src: "/Investment_img_1.jpg",
    alt: "Hero img",
  },
  {
    src: "/agnesa1.jpg",
    alt: "Hero img",
  },
  {
    src: "/agnesa1.jpg",
    alt: "Hero img",
  },
  {
    src: "/shoqnia.jpg",
    alt: "Hero img",
  },
  {
    src: "/decor.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_7.jpg",
    alt: "Hero img",
  },
  {
    src: "/IMG_8.jpg",
    alt: "Hero img",
  },
  {
    src: "/fejesa isa boletini.jpeg",
    alt: "Hero img",
  },
  {
    src: "/clirimires.jpg",
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
          // <FadeIn>
          <div
            key={i}
            className="relative mb-4 break-inside-avoid cursor-pointer"
            onClick={() => {
              setSelected(photo.src);
              setScrollDisabled(true);
            }}
          >
            <img
              className="w-full object-cover rounded-xl transition-transform duration-150 hover:scale-102 cursor-pointer"
              src={photo.src}
              alt={photo.alt}
            />
          </div>
          // </FadeIn>
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
