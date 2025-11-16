import { useEffect, useState } from "react";
import FadeIn from "../components/FadeIn";
import ImageModal from "../components/ImageModal";

const sections = [
  {
    imgSrc: "/IMG_6.jpg",
    title: "Intimate joshua tree wedding",
    tagName: "Weddings",
  },
  {
    imgSrc: "/IMG_7.jpg",
    title: "Seattle portrait session with emma",
    tagName: "Weddings",
  },
  {
    imgSrc: "/qlirimi 1.jpg",
    title: "Intimate joshua tree wedding",
    tagName: "Weddings",
  },
  {
    imgSrc: "/qlirimi2.jpg",
    title: "Seattle portrait session with emma",
    tagName: "Weddings",
  },
  {
    imgSrc: "/IMG_10.jpg",
    title: "Intimate joshua tree wedding",
    tagName: "Portraits",
  },
  {
    imgSrc: "/IMG_3.jpg",
    title: "Seattle portrait session with emma",
    tagName: "Portraits",
  },
  {
    imgSrc: "/Hero_img_1.jpg",
    title: "Intimate joshua tree wedding",
    tagName: "Portraits",
  },
  {
    imgSrc: "/Hero_img_1.jpg",
    title: "Seattle portrait session with emma",
    tagName: "Portraits",
  },
];

const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("Everything");
  const [selected, setSelected] = useState<null | string>(null);
  const [scrollDisabled, setScrollDisabled] = useState(false);

  const filteredSections =
    selectedTag === "Everything"
      ? sections
      : sections.filter((section) => section.tagName === selectedTag);
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
          <FadeIn amount={0}>
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
                alt=""
                className="w-full cursor-pointer"
              />
              <h3 className="text-md mt-2">{section.title}</h3>
              <p className="text-zinc-500 text-sm">{section.tagName}</p>
            </div>
            <></>
          </FadeIn>
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
