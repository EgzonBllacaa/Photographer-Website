import { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import { images2 } from "../pages/Home";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

import Masonry from "react-masonry-css";

export const breakpoints = {
  default: 3,
  768: 2,
  640: 1,
};

const PAGE_SIZE = 3;

const PhotoGallery = () => {
  const [selected, setSelected] = useState<null | string>(null);
  const [visibleImages, setVisibleImages] = useState<
    {
      src: string;
      alt: string;
    }[]
  >([]);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [cursor, setCursor] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef<boolean>(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = () => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    setIsLoading(true);
    let startIndex = 0;

    if (cursor) {
      const cursorIndex = images2.findIndex((img) => img.src === cursor);
      startIndex = cursorIndex + 1;
    }

    const nextPage = images2.slice(startIndex, startIndex + PAGE_SIZE);
    setVisibleImages((prev) => [...prev, ...nextPage]);

    setCursor(
      nextPage.length === PAGE_SIZE ? nextPage[nextPage.length - 1].src : null
    );
    setIsLoading(false);
    isLoadingRef.current = false;
  };
  useEffect(() => {
    if (!observerRef.current) return;
    if (!cursor) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0.1,
      }
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [cursor]);
  useEffect(() => {
    loadMore();
  }, []);
  useEffect(() => {
    document.body.style.overflow = scrollDisabled ? "hidden" : "auto";
  }, [scrollDisabled]);
  console.log("cursor", cursor);
  return (
    <>
      {/* Gallery container */}
      <motion.div className="max-w-6xl mx-auto">
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {visibleImages.map((photo, i) => (
            <div
              key={i}
              className="relative mb-4 break-inside-avoid cursor-pointer"
              onClick={() => {
                setSelected(photo.src);
                setScrollDisabled(true);
              }}
            >
              <FadeIn>
                <img
                  className="w-full  rounded-xl duration-300 hover:scale-105 transition-transform"
                  loading="lazy"
                  sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
                  src={photo.src}
                  alt={photo.alt || "Gallery image"}
                />
              </FadeIn>
            </div>
          ))}
        </Masonry>
        {isLoading && <span>loading...</span>}
        {cursor && <div ref={observerRef} className="h-10" />}
      </motion.div>

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
