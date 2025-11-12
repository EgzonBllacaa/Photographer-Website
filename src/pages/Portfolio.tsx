import { useState } from "react";

const sections = [
  {
    imgSrc: "/Hero_img_1.jpg",
    title: "Studio maternity with natalie lock",
    tagName: "Maternity",
  },
  {
    imgSrc: "/IMG_3.jpg",
    title: "Studio maternity with natalie lock",
    tagName: "Maternity",
  },
  {
    imgSrc: "/IMG_4.jpg",
    title: "Studio maternity with natalie lock",
    tagName: "Maternity",
  },
  {
    imgSrc: "/IMG_5.jpg",
    title: "Studio maternity with natalie lock",
    tagName: "Maternity",
  },
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
    imgSrc: "/IMG_8.jpg",
    title: "Intimate joshua tree wedding",
    tagName: "Weddings",
  },
  {
    imgSrc: "/IMG_9.jpg",
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

  const filteredSections =
    selectedTag === "Everything"
      ? sections
      : sections.filter((section) => section.tagName === selectedTag);
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center gap-2 mt-40 mx-auto mb-10">
        {["Everything", "Weddings", "Portraits", "Maternity"].map(
          (tag, index) => (
            <button
              key={index}
              onClick={() => setSelectedTag(tag)}
              className="border border-orange-800/50 px-3 py-1 cursor-pointer hover:text-white hover:bg-amber-800/50"
            >
              {tag}
            </button>
          )
        )}
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {filteredSections.map((section, index) => (
          <div
            key={index}
            className="max-w-lg w-full flex flex-col items-center"
          >
            <img src={section.imgSrc} alt="" className="w-full" />
            <h3 className="text-md mt-2">{section.title}</h3>
            <p className="text-zinc-500 text-sm">{section.tagName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
