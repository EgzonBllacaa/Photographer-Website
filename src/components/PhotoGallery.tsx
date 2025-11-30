import { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { images2 } from "../pages/Home";

const PhotoGallery = () => {
  const [selected, setSelected] = useState<null | string>(null);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = scrollDisabled ? "hidden" : "auto";
  }, [scrollDisabled]);

  return (
    <>
      {/* Gallery container */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3  gap-4 p-4">
        {images2.map((photo, i) => (
          <div
            key={i}
            className="relative mb-4 break-inside-avoid cursor-pointer"
            onClick={() => {
              setSelected(photo.src);
              setScrollDisabled(true);
            }}
          >
            <img
              className="w-full  rounded-xl duration-300 hover:scale-105 transition-transform"
              loading="lazy"
              sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
              src={photo.src}
              alt={photo.alt || "Gallery image"}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
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
