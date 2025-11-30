import { useEffect, useState } from "react";
// import FadeIn from "../components/FadeIn";
import ImageModal from "../components/ImageModal";
// import {images} from "../pages/Home"

// const sections = [
//   {
//     imgSrc: "/IMG_6.webp",
//     title: "Intimate joshua tree wedding",
//     tagName: "Weddings",
//   },
//   {
//     imgSrc: "/IMG_7.webp",
//     title: "Seattle portrait session with emma",
//     tagName: "Weddings",
//   },
//   {
//     imgSrc: "/qlirimi 1.webp",
//     title: "Intimate joshua tree wedding",
//     tagName: "Weddings",
//   },
//   {
//     imgSrc: "/qlirimi2.webp",
//     title: "Seattle portrait session with emma",
//     tagName: "Weddings",
//   },
//   {
//     imgSrc: "/IMG_10.webp",
//     title: "Intimate joshua tree wedding",
//     tagName: "Portraits",
//   },
//   {
//     imgSrc: "/IMG_3.webp",
//     title: "Seattle portrait session with emma",
//     tagName: "Portraits",
//   },
//   {
//     imgSrc: "/Hero_img_1.webp",
//     title: "Intimate joshua tree wedding",
//     tagName: "Portraits",
//   },
//   {
//     imgSrc: "/Hero_img_1.webp",
//     title: "Seattle portrait session with emma",
//     tagName: "Portraits",
//   },
// ];

export const sections = [
  { imgSrc: "/medina.webp", title: "", tagName: "Weddings" },
  { imgSrc: "/marigona.webp", title: "", tagName: "Portraits" },
  { imgSrc: "marigona2.webp", title: "", tagName: "Weddings" },
  { imgSrc: "marigona3.webp", title: "", tagName: "Portraits" },
  { imgSrc: "qlirimi 1.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DJI_0771-Enhanced-NR.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DJI_0773.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DJI_0775.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DJI_0777.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DJI_0781.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DJI_0782.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DJI_0790.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DSC02570.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DSC02586.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DSC02593.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DSC03003.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DSC07200.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DSC07751-Enhanced-NR.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DSC07770-Enhanced-NR.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DSC07800-Enhanced-NR.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DSC07917-Enhanced-NR.webp", title: "", tagName: "Weddings" },
  { imgSrc: "DSC07852.webp", title: "", tagName: "Portraits" },
  { imgSrc: "DSC07992.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_1.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_2.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_3.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_4.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_5.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_6.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_7.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_8.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_9.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_10.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_11.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_12.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_13.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_14.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_15.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_16.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_17.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_18.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_19.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_20.webp", title: "", tagName: "Weddings" },
  // { imgSrc: "horizontal_3.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_22.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_23.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_24.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_25.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Photo_webp_1.webp", title: "", tagName: "Weddings" },
  { imgSrc: "Photo_webp_2.webp", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_1.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_2.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_3.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_4.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_5.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_6.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_7.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_8.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_9.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_10.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_11.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_12.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_13.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_14.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_15.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_16.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_17.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_18.jpg", title: "", tagName: "Portraits" },
  { imgSrc: "Snap_19.jpg", title: "", tagName: "Weddings" },
  { imgSrc: "Snap_20.jpg", title: "", tagName: "Portraits" },
];

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("Everything");
  const [selected, setSelected] = useState<null | string>(null);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const filteredSections =
    selectedTag === "Everything"
      ? sections
      : sections.filter((image) => image.tagName === selectedTag);

  useEffect(() => {
    document.body.style.overflow = scrollDisabled ? "hidden" : "auto";
  }, [scrollDisabled]);

  return (
    <div className="max-w-[1600px] w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-40 mx-auto mb-10">
        {["Everything", "Weddings", "Portraits"].map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className="border border-orange-800/50 px-3 py-1 cursor-pointer hover:text-white hover:bg-amber-800/50"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="columns-1 sm:columns-2  md:columns-3  lg:columns-4 p-4 gap-6">
        {filteredSections.map((section, index) => (
          // <FadeIn amount={0}>
          <>
            <div
              key={index}
              onClick={() => {
                setScrollDisabled(true);
                setSelected(section.imgSrc);
              }}
              className="max-w-lg w-full break-inside-avoid  flex flex-col items-center"
            >
              <img
                src={section.imgSrc}
                loading="lazy"
                sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
                alt=""
                className="w-full cursor-pointer"
              />
              <h3 className="text-md mt-2">{section.title}</h3>
              <p className="text-zinc-500 text-sm">{section.tagName}</p>
            </div>
          </>
          // </FadeIn>
        ))}
        {selected && (
          <ImageModal
            src={selected}
            setScrollDisabled={setScrollDisabled}
            setSelected={setSelected}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
