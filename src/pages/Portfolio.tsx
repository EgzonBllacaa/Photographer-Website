import { useEffect, useRef, useState } from "react";
import ImageModal from "../components/ImageModal";
import FadeIn from "../components/FadeIn";
import Masonry from "react-masonry-css";
import { breakpoints } from "../components/PhotoGallery";
import { motion } from "framer-motion";

export const sections = [
  {
    id: 1,
    imgSrc: "qlirimi 1.webp",
    title: "",
    tagName: "Weddings",
    content: "Celebrating love and new beginnings 💍❤️",
  },
  {
    id: 2,
    imgSrc: "/medina_1.webp",
    title: "",
    tagName: "Weddings",
    content: "A magical day filled with joy and laughter ✨🥂",
  },
  {
    id: 3,
    imgSrc: "DJI_0773.webp",
    title: "",
    tagName: "Weddings",
    content: "Two hearts becoming one 💕👰🤵",
  },
  {
    id: 4,
    imgSrc: "/marigona.webp",
    title: "",
    tagName: "Weddings",
    content: "A lifetime of happiness starts here 🎉💖",
  },
  {
    id: 5,
    imgSrc: "DJI_0771-Enhanced-NR.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of love captured forever 📸💑",
  },
  {
    id: 6,
    imgSrc: "marigona2.webp",
    title: "",
    tagName: "Weddings",
    content: "Smiles, tears, and memories to cherish 🌸💞",
  },
  {
    id: 7,
    imgSrc: "DSC02586.webp",
    title: "",
    tagName: "Weddings",
    content: "Cherishing every beautiful moment 🎉💖",
  },
  {
    id: 8,
    imgSrc: "DSC02593.webp",
    title: "",
    tagName: "Weddings",
    content: "Love, laughter, and happily ever after 💕🥂",
  },
  {
    id: 9,
    imgSrc: "DSC07200.webp",
    title: "",
    tagName: "Weddings",
    content: "Capturing the essence of love 🌸💑",
  },
  {
    id: 10,
    imgSrc: "agnesa_2.webp",
    title: "",
    tagName: "Engagement",
    content: "A promise of forever 💍✨",
  },
  {
    id: 11,
    imgSrc: "agnesa_6.webp",
    title: "",
    tagName: "Engagement",
    content: "Two souls, one journey 💖🥰",
  },
  {
    id: 12,
    imgSrc: "agnesa_5.webp",
    title: "",
    tagName: "Engagement",
    content: "Celebrating love and commitment 🥂💌",
  },
  {
    id: 13,
    imgSrc: "agnesa_4.webp",
    title: "",
    tagName: "Engagement",
    content: "A beautiful beginning together 🌹💑",
  },
  {
    id: 14,
    imgSrc: "blue_1.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 15,
    imgSrc: "blue_2.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 16,
    imgSrc: "blue_3.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 17,
    imgSrc: "blue_4.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 18,
    imgSrc: "blue_5.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  // {
  //   id: 19,
  //   imgSrc: "blue_6.webp",
  //   title: "",
  //   tagName: "Engagement",
  //   content: "The perfect couple, forever and always 💕💫",
  // },
  {
    id: 20,
    imgSrc: "blue_7.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 21,
    imgSrc: "blue_8.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 22,
    imgSrc: "blue_9.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 23,
    imgSrc: "blue_10.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 24,
    imgSrc: "blue_11.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    id: 25,
    imgSrc: "Photo_7.webp",
    title: "",
    tagName: "Engagement",
    content: "Cherishing every moment together ❤️📸",
  },
  {
    id: 26,
    imgSrc: "isa_1.webp",
    title: "",
    tagName: "Weddings",
    content: "A day full of love, joy, and memories 🎉💖",
  },
  {
    id: 27,
    imgSrc: "isa_2.webp",
    title: "",
    tagName: "Weddings",
    content: "Creating memories that last a lifetime 💕📸",
  },
  {
    id: 28,
    imgSrc: "isa_3.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of pure happiness 💖✨",
  },
  {
    id: 29,
    imgSrc: "isa_4.webp",
    title: "",
    tagName: "Weddings",
    content: "A magical celebration of love 💍🎉",
  },
  {
    id: 30,
    imgSrc: "isa_5.webp",
    title: "",
    tagName: "Weddings",
    content: "Capturing smiles and laughter 💕📸",
  },
  {
    id: 31,
    imgSrc: "isa_6.webp",
    title: "",
    tagName: "Weddings",
    content: "A day filled with love and joy ✨💖",
  },
  {
    id: 32,
    imgSrc: "isa_7.webp",
    title: "",
    tagName: "Weddings",
    content: "Happily ever after starts here 💍❤️",
  },
  {
    id: 33,
    imgSrc: "Snap_18.jpg",
    title: "",
    tagName: "Weddings",
    content: "Memories frozen in time 📸💖",
  },
  {
    id: 34,
    imgSrc: "Snap_13.jpg",
    title: "",
    tagName: "Weddings",
    content: "Celebrating love and laughter 🎉💕",
  },
  {
    id: 35,
    imgSrc: "Snap_10.jpg",
    title: "",
    tagName: "Weddings",
    content: "A day to remember forever 💖✨",
  },
  {
    id: 36,
    imgSrc: "riri_1.webp",
    title: "",
    tagName: "Weddings",
    content: "The start of a beautiful journey 💕💍",
  },
  {
    id: 37,
    imgSrc: "riri_2.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of love captured beautifully 📸💖",
  },
  {
    id: 38,
    imgSrc: "lake_1.webp",
    title: "",
    tagName: "Engagement",
    content: "Together forever 💍💖",
  },
  {
    id: 39,
    imgSrc: "lake_2.webp",
    title: "",
    tagName: "Engagement",
    content: "A beautiful beginning 🌹✨",
  },
  {
    id: 40,
    imgSrc: "lake_88.webp",
    title: "",
    tagName: "Engagement",
    content: "A beautiful beginning 🌹✨",
  },
  {
    id: 41,
    imgSrc: "visar_1.webp",
    title: "",
    tagName: "Engagement",
    content: "Cherishing each moment together 💖📸",
  },
  {
    id: 42,
    imgSrc: "visar_2.webp",
    title: "",
    tagName: "Engagement",
    content: "A love story in the making 💕💑",
  },
  {
    id: 43,
    imgSrc: "visar_3.webp",
    title: "",
    tagName: "Engagement",
    content: "Together is a wonderful place to be 💖✨",
  },
  {
    id: 44,
    imgSrc: "visar_4.webp",
    title: "",
    tagName: "Engagement",
    content: "Forever and always 💍❤️",
  },
  {
    id: 45,
    imgSrc: "visar_5.webp",
    title: "",
    tagName: "Engagement",
    content: "Smiles, laughter, and love 🌸💖",
  },
  {
    id: 46,
    imgSrc: "Photo_22.webp",
    title: "",
    tagName: "Engagement",
    content: "Capturing the perfect moment 💕📸",
  },
  {
    id: 47,
    imgSrc: "Photo_23.webp",
    title: "",
    tagName: "Engagement",
    content: "A day full of love and joy 💖✨",
  },
  {
    id: 48,
    imgSrc: "Photo_24.webp",
    title: "",
    tagName: "Engagement",
    content: "Cherishing memories together 💍💑",
  },
  {
    id: 49,
    imgSrc: "Photo_25.webp",
    title: "",
    tagName: "Weddings",
    content: "A celebration of love and commitment 💖🥂",
  },
  {
    id: 50,
    imgSrc: "Photo_webp_1.webp",
    title: "",
    tagName: "Engagement",
    content: "Two hearts, one love 💍❤️",
  },
  {
    id: 51,
    imgSrc: "Photo_webp_2.webp",
    title: "",
    tagName: "Weddings",
    content: "A day to remember forever 💕✨",
  },
  {
    id: 52,
    imgSrc: "Snap_4.jpg",
    title: "",
    tagName: "Weddings",
    content: "Happily ever after starts now ✨👰🤵",
  },
  {
    id: 53,
    imgSrc: "Snap_5.jpg",
    title: "",
    tagName: "Weddings",
    content: "Memories of a lifetime 💖📸",
  },
  // {
  //   id: 54,
  //   imgSrc: "Snap_6.jpg",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "Celebrating love and happiness 🎉💕",
  // },
  // {
  //   id: 55,
  //   imgSrc: "Snap_11.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "A day to cherish forever 💖✨",
  // },
  // {
  //   id: 56,
  //   imgSrc: "Snap_12.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "Capturing magical moments 💍📸",
  // },
  // {
  //   id: 57,
  //   imgSrc: "Snap_15.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "Love, laughter, and happiness 💖🥂",
  // },
  // {
  //   id: 58,
  //   imgSrc: "Snap_16.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "A lifetime of memories 💕✨",
  // },
  // {
  //   id: 59,
  //   imgSrc: "Snap_17.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "Happily ever after begins here 💍💖",
  // },
  // {
  //   id: 60,
  //   imgSrc: "Snap_19.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "Moments of love to remember 💕📸",
  // },
  // {
  //   id: 61,
  //   imgSrc: "Snap_20.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "A magical day of love and joy 💖✨",
  // },
];

const PAGE_SIZE = 6; // Increased slightly for better initial fill

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("Everything");
  const [selected, setSelected] = useState<null | string>(null);
  const [visibleImages, setVisibleImages] = useState<typeof sections>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [_, setScrollDisabled] = useState(false);

  // State to track if we are fetching the NEXT page
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  // State to track if the FIRST page is fully visual (images downloaded)
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Counter for loaded images
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);

  const observerRef = useRef<HTMLDivElement | null>(null);
  console.log(`Cursor ${cursor}`);

  // Filtered sections
  const filteredSections =
    selectedTag === "Everything"
      ? sections
      : sections.filter((image) => image.tagName === selectedTag);

  // --- Load Logic ---
  const loadMore = () => {
    // Prevent multiple fetches
    if (isFetchingMore) return;

    setIsFetchingMore(true);

    let startIndex = 0;
    if (cursor) {
      const cursorIndex = filteredSections.findIndex(
        (img) => img.imgSrc === cursor
      );
      startIndex = cursorIndex + 1;
    }

    const nextPage = filteredSections.slice(startIndex, startIndex + PAGE_SIZE);

    // If no more images, just stop
    if (nextPage.length === 0) {
      setIsFetchingMore(false);
      return;
    }

    // Add new images to the list
    setVisibleImages((prev) => [...prev, ...nextPage]);

    // Update cursor
    setCursor(nextPage[nextPage.length - 1].imgSrc);

    // Note: We do NOT set isFetchingMore(false) here immediately if we want
    // to throttle, but for local data it's fine to reset it.
    // However, for the INITIAL load, we keep isInitialLoading true.
    setIsFetchingMore(false);
  };

  // --- Reset when Tag Changes ---
  useEffect(() => {
    setVisibleImages([]);
    setCursor(null);
    setImagesLoadedCount(0); // Reset counter
    setIsInitialLoading(true); // Bring back loading screen

    // Small timeout to allow state to clear before reloading
    const timer = setTimeout(() => {
      loadMore();
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedTag]);

  // --- Infinite Scroll Observer ---
  useEffect(() => {
    // CRITICAL: Do not start observing until the initial batch is visually ready.
    // Otherwise, it fires repeatedly because page height is 0.
    if (!observerRef.current || isInitialLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { root: null, rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [cursor, isInitialLoading]); // Added isInitialLoading dependency

  // --- Initial Load Completion Check ---
  useEffect(() => {
    // We only care about this check during the initial load phase
    if (isInitialLoading && visibleImages.length > 0) {
      // Check if all currently visible images have triggered their onLoad
      if (imagesLoadedCount >= visibleImages.length) {
        setIsInitialLoading(false);
      }
    }
  }, [imagesLoadedCount, visibleImages.length, isInitialLoading]);

  // --- Initial Load Trigger ---
  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="max-w-[1600px] w-full mx-auto relative min-h-screen">
      {/* 1. Full Screen Loader Overlay */}
      {/* We keep this ON TOP of the content until isInitialLoading is false */}
      {isInitialLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white h-screen w-screen">
          <p className="text-xl text-zinc-500 animate-pulse">
            Loading gallery...
          </p>
        </div>
      )}

      {/* Tag buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-40 mx-auto mb-10">
        {["Everything", "Weddings", "Engagement"].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`border border-[#777035] px-3 py-1 cursor-pointer transition-colors ${
              selectedTag === tag ? "bg-[#777035] text-white" : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 2. The Grid 
         We render this even while loading (opacity-0 or hidden behind loader) 
         so the browser fetches the images.
      */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInitialLoading ? 0 : 1 }} // Fade in when ready
        transition={{ duration: 0.5 }}
      >
        <Masonry
          breakpointCols={breakpoints}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {visibleImages.map((section, index) =>
            section.imgSrc ? (
              <FadeIn>
                <div
                  key={`${section.id}-${index}`}
                  onClick={() => {
                    setScrollDisabled(true);
                    setSelected(section.imgSrc);
                  }}
                  className="max-w-lg w-full break-inside-avoid flex flex-col mb-5 items-center group"
                >
                  <img
                    src={section.imgSrc}
                    sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
                    alt={section.title || section.tagName}
                    className="w-full cursor-pointer transition-opacity"
                    // 3. The Counter Logic
                    onLoad={() => {
                      setImagesLoadedCount((prev) => prev + 1);
                    }}
                  />
                  <h3 className="text-md mt-2">{section.title}</h3>
                  <p className="text-zinc-500 text-sm">{section.tagName}</p>
                  <p className="text-sm text-zinc-500">{section.content}</p>
                </div>
              </FadeIn>
            ) : null
          )}
        </Masonry>

        {/* Bottom Loading Indicator for pagination */}
        {isFetchingMore && !isInitialLoading && (
          <div className="text-center py-4 text-zinc-400">Loading more...</div>
        )}

        {/* 4. The Observer Trigger 
           Only render this DIV when the initial load is done.
           This prevents the "infinite fetch loop" on empty/short pages.
        */}
        {!isInitialLoading && cursor && (
          <div ref={observerRef} className="h-10 w-full" />
        )}
      </motion.div>

      {selected && (
        <ImageModal
          src={selected}
          setScrollDisabled={setScrollDisabled}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default Portfolio;
