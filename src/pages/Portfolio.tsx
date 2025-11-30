import { useEffect, useState } from "react";
// import FadeIn from "../components/FadeIn";
import ImageModal from "../components/ImageModal";
import FadeIn from "../components/FadeIn";
// import { GiCardKingClubs } from "react-icons/gi";

export const sections = [
  {
    imgSrc: "qlirimi 1.webp",
    title: "",
    tagName: "Weddings",
    content: "Celebrating love and new beginnings 💍❤️",
  },
  {
    imgSrc: "/medina_1.webp",
    title: "",
    tagName: "Weddings",
    content: "A magical day filled with joy and laughter ✨🥂",
  },
  {
    imgSrc: "DJI_0773.webp",
    title: "",
    tagName: "Weddings",
    content: "Two hearts becoming one 💕👰🤵",
  },
  {
    imgSrc: "/marigona.webp",
    title: "",
    tagName: "Weddings",
    content: "A lifetime of happiness starts here 🎉💖",
  },
  {
    imgSrc: "DJI_0771-Enhanced-NR.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of love captured forever 📸💑",
  },
  {
    imgSrc: "marigona2.webp",
    title: "",
    tagName: "Weddings",
    content: "Smiles, tears, and memories to cherish 🌸💞",
  },
  {
    imgSrc: "DSC02586.webp",
    title: "",
    tagName: "Weddings",
    content: "Cherishing every beautiful moment 🎉💖",
  },
  {
    imgSrc: "DSC02593.webp",
    title: "",
    tagName: "Weddings",
    content: "Love, laughter, and happily ever after 💕🥂",
  },
  // {
  //   imgSrc: "DSC03003.webp",
  //   title: "",
  //   tagName: "Weddings",
  //   content: "A day to remember forever 💖📸",
  // },
  {
    imgSrc: "DSC07200.webp",
    title: "",
    tagName: "Weddings",
    content: "Capturing the essence of love 🌸💑",
  },
  {
    imgSrc: "agnesa_2.webp",
    title: "",
    tagName: "Engagement",
    content: "A promise of forever 💍✨",
  },
  {
    imgSrc: "agnesa_6.webp",
    title: "",
    tagName: "Engagement",
    content: "Two souls, one journey 💖🥰",
  },
  {
    imgSrc: "agnesa_5.webp",
    title: "",
    tagName: "Engagement",
    content: "Celebrating love and commitment 🥂💌",
  },
  {
    imgSrc: "agnesa_4.webp",
    title: "",
    tagName: "Engagement",
    content: "A beautiful beginning together 🌹💑",
  },
  {
    imgSrc: "blue_1.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_2.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_3.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_4.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_5.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_6.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_7.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_8.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_9.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_10.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "blue_11.webp",
    title: "",
    tagName: "Engagement",
    content: "The perfect couple, forever and always 💕💫",
  },
  {
    imgSrc: "Photo_7.webp",
    title: "",
    tagName: "Engagement",
    content: "Cherishing every moment together ❤️📸",
  },
  {
    imgSrc: "isa_1.webp",
    title: "",
    tagName: "Weddings",
    content: "A day full of love, joy, and memories 🎉💖",
  },
  {
    imgSrc: "isa_2.webp",
    title: "",
    tagName: "Weddings",
    content: "Creating memories that last a lifetime 💕📸",
  },
  {
    imgSrc: "isa_3.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of pure happiness 💖✨",
  },
  {
    imgSrc: "isa_4.webp",
    title: "",
    tagName: "Weddings",
    content: "A magical celebration of love 💍🎉",
  },
  {
    imgSrc: "isa_5.webp",
    title: "",
    tagName: "Weddings",
    content: "Capturing smiles and laughter 💕📸",
  },
  {
    imgSrc: "isa_6.webp",
    title: "",
    tagName: "Weddings",
    content: "A day filled with love and joy ✨💖",
  },
  {
    imgSrc: "isa_7.webp",
    title: "",
    tagName: "Weddings",
    content: "Happily ever after starts here 💍❤️",
  },
  {
    imgSrc: "Snap_18.jpg",
    title: "",
    tagName: "Weddings",
    content: "Memories frozen in time 📸💖",
  },
  {
    imgSrc: "Snap_13.jpg",
    title: "",
    tagName: "Weddings",
    content: "Celebrating love and laughter 🎉💕",
  },
  {
    imgSrc: "Snap_10.jpg",
    title: "",
    tagName: "Weddings",
    content: "A day to remember forever 💖✨",
  },
  {
    imgSrc: "riri_1.webp",
    title: "",
    tagName: "Weddings",
    content: "The start of a beautiful journey 💕💍",
  },
  {
    imgSrc: "riri_2.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of love captured beautifully 📸💖",
  },
  {
    imgSrc: "lake_1.webp",
    title: "",
    tagName: "Engagement",
    content: "Together forever 💍💖",
  },
  {
    imgSrc: "lake_2.webp",
    title: "",
    tagName: "Engagement",
    content: "A beautiful beginning 🌹✨",
  },
  {
    imgSrc: "lake_88.webp",
    title: "",
    tagName: "Engagement",
    content: "A beautiful beginning 🌹✨",
  },
  {
    imgSrc: "visar_1.webp",
    title: "",
    tagName: "Engagement",
    content: "Cherishing each moment together 💖📸",
  },
  {
    imgSrc: "visar_2.webp",
    title: "",
    tagName: "Engagement",
    content: "A love story in the making 💕💑",
  },
  {
    imgSrc: "visar_3.webp",
    title: "",
    tagName: "Engagement",
    content: "Together is a wonderful place to be 💖✨",
  },
  {
    imgSrc: "visar_4.webp",
    title: "",
    tagName: "Engagement",
    content: "Forever and always 💍❤️",
  },
  {
    imgSrc: "visar_5.webp",
    title: "",
    tagName: "Engagement",
    content: "Smiles, laughter, and love 🌸💖",
  },
  {
    imgSrc: "Photo_22.webp",
    title: "",
    tagName: "Engagement",
    content: "Capturing the perfect moment 💕📸",
  },
  {
    imgSrc: "Photo_23.webp",
    title: "",
    tagName: "Engagement",
    content: "A day full of love and joy 💖✨",
  },
  {
    imgSrc: "Photo_24.webp",
    title: "",
    tagName: "Engagement",
    content: "Cherishing memories together 💍💑",
  },
  {
    imgSrc: "Photo_25.webp",
    title: "",
    tagName: "Weddings",
    content: "A celebration of love and commitment 💖🥂",
  },
  {
    imgSrc: "Photo_webp_1.webp",
    title: "",
    tagName: "Engagement",
    content: "Two hearts, one love 💍❤️",
  },
  {
    imgSrc: "Photo_webp_2.webp",
    title: "",
    tagName: "Weddings",
    content: "A day to remember forever 💕✨",
  },
  {
    imgSrc: "Snap_4.jpg",
    title: "",
    tagName: "Weddings",
    content: "Happily ever after starts now ✨👰🤵",
  },
  {
    imgSrc: "Snap_5.jpg",
    title: "",
    tagName: "Weddings",
    content: "Memories of a lifetime 💖📸",
  },
  {
    imgSrc: "Snap_6.jpg",
    title: "",
    tagName: "Weddings",
    content: "Celebrating love and happiness 🎉💕",
  },
  {
    imgSrc: "Snap_11.webp",
    title: "",
    tagName: "Weddings",
    content: "A day to cherish forever 💖✨",
  },
  {
    imgSrc: "Snap_12.webp",
    title: "",
    tagName: "Weddings",
    content: "Capturing magical moments 💍📸",
  },
  {
    imgSrc: "Snap_15.webp",
    title: "",
    tagName: "Weddings",
    content: "Love, laughter, and happiness 💖🥂",
  },
  {
    imgSrc: "Snap_16.webp",
    title: "",
    tagName: "Weddings",
    content: "A lifetime of memories 💕✨",
  },
  {
    imgSrc: "Snap_17.webp",
    title: "",
    tagName: "Weddings",
    content: "Happily ever after begins here 💍💖",
  },
  {
    imgSrc: "Snap_19.webp",
    title: "",
    tagName: "Weddings",
    content: "Moments of love to remember 💕📸",
  },
  {
    imgSrc: "Snap_20.webp",
    title: "",
    tagName: "Weddings",
    content: "A magical day of love and joy 💖✨",
  },
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
  // console.log(selected);
  return (
    <div className="max-w-[1600px] w-full mx-auto">
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-40 mx-auto mb-10">
        {["Everything", "Weddings", "Engagement"].map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`border border-[#777035] px-3 py-1 cursor-pointer  ${
              selectedTag === tag ? "bg-[#777035] text-white" : ""
            } `}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="columns-1 sm:columns-2  md:columns-3  lg:columns-4 p-4 gap-6">
        {filteredSections.map((section, index) => (
          <>
            <div
              key={index}
              onClick={() => {
                setScrollDisabled(true);
                setSelected(section.imgSrc);
              }}
              className="max-w-lg w-full break-inside-avoid  flex flex-col mb-5 items-center"
            >
              <FadeIn amount={0}>
                <img
                  src={section.imgSrc}
                  loading="lazy"
                  sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
                  alt=""
                  className="w-full cursor-pointer"
                />
              </FadeIn>
              <h3 className="text-md mt-2">{section.title}</h3>
              <p className="text-zinc-500 text-sm">{section.tagName}</p>
              <p className="text-sm text-zinc-500">{section.content}</p>
            </div>
          </>
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
