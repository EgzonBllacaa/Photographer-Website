import { useEffect, useState } from "react";
import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";
import PhotoGallery from "../components/PhotoGallery";

// { src: "/medina.webp", alt: "Hero img" },
// { src: "horizontal_2.webp", alt: "Hero img" },
export const images = [
  // {
  //   src: "qlirimi 1.webp",
  //   alt: "Hero img",
  //   objectPositionClass: "object-[center_60%]",
  // },
  // {
  //   src: "DJI_0771-Enhanced-NR.webp",
  //   alt: "Hero img",
  //   objectPositionClass: "object-[center_50%]",
  // },
  // {
  //   src: "DJI_0773.webp",
  //   alt: "Hero img",
  //   objectPositionClass: "object-[center_50%]",
  // },
  {
    src: "/marigona10.webp",
    alt: "Hero img",
    objectPositionClass: "object-[center_35%]",
  },
  {
    src: "visar_4.webp",
    alt: "Hero img",
    objectPositionClass: "object-[center_50%]",
  },
  {
    src: "isa100.webp",
    alt: "Hero img",
    objectPositionClass: "object-[center_40%]",
  },
  {
    src: "agnesa_5.webp",
    alt: "Hero img",
    objectPositionClass: "object-[center_45%]",
  },
  {
    src: "isa200.webp",
    alt: "Hero img",
    objectPositionClass: "object-[center_55%]",
  },
  {
    src: "Photo_4.webp",
    alt: "Hero img",
    objectPositionClass: "object-[center_60%]",
  },
  // { src: "DJI_0775.webp", alt: "Hero img" },
  // { src: "DJI_0777.webp", alt: "Hero img" },
  // { src: "DJI_0781.webp", alt: "Hero img" },
  // { src: "DJI_0782.webp", alt: "Hero img" },
  // { src: "Snap_19.jpg", alt: "Hero img" },
  // { src: "Snap_20.jpg", alt: "Hero img" },
  // { src: "DJI_0790.webp", alt: "Hero img" },
  // { src: "DSC02570.webp", alt: "Hero img" },`
  // { src: "DSC02586.webp", alt: "Hero img" },
  // { src: "DSC02593.webp", alt: "Hero img" },
  // { src: "DSC03003.webp", alt: "Hero img" },
  // { src: "DSC07200.webp", alt: "Hero img" },
  // { src: "agnesa_6.webp", alt: "Hero img" },
  // { src: "agnesa_4.webp", alt: "Hero img" },
  // { src: "agnesa_3.webp", alt: "Hero img" },
  // { src: "DSC07992.webp", alt: "Hero img" },
  // { src: "Photo_1.webp", alt: "Hero img" },
  // { src: "Photo_2.webp", alt: "Hero img" },
  // { src: "Photo_3.webp", alt: "Hero img" },

  // // Converted plain strings ↓↓

  // { src: "Photo_5.webp", alt: "Hero img" },
  // { src: "Photo_6.webp", alt: "Hero img" },
  // { src: "Photo_7.webp", alt: "Hero img" },
  // { src: "Photo_8.webp", alt: "Hero img" },
  // { src: "Photo_9.webp", alt: "Hero img" },
  // { src: "Photo_10.webp", alt: "Hero img" },
  // { src: "Photo_11.webp", alt: "Hero img" },
  // { src: "Photo_12.webp", alt: "Hero img" },
  // { src: "Photo_13.webp", alt: "Hero img" },
  // { src: "Photo_14.webp", alt: "Hero img" },
  // { src: "Photo_15.webp", alt: "Hero img" },
  // { src: "Photo_16.webp", alt: "Hero img" },
  // { src: "Photo_17.webp", alt: "Hero img" },
  // { src: "Photo_18.webp", alt: "Hero img" },
  // { src: "Photo_19.webp", alt: "Hero img" },
  // { src: "Photo_20.webp", alt: "Hero img" },
  // // { src: "horizontal_3.webp", alt: "Hero img" },
  // { src: "Photo_22.webp", alt: "Hero img" },
  // { src: "Photo_23.webp", alt: "Hero img" },
  // { src: "Photo_24.webp", alt: "Hero img" },
  // { src: "Photo_25.webp", alt: "Hero img" },
  // { src: "Photo_webp_1.webp", alt: "Hero img" },
  // { src: "Photo_webp_2.webp", alt: "Hero img" },

  // { src: "Snap_1.jpg", alt: "Hero img" },
  // { src: "Snap_2.jpg", alt: "Hero img" },
  // { src: "Snap_3.jpg", alt: "Hero img" },
  // { src: "Snap_5.jpg", alt: "Hero img" },
  // { src: "Snap_6.jpg", alt: "Hero img" },
  // { src: "Snap_7.jpg", alt: "Hero img" },
  // { src: "Snap_8.jpg", alt: "Hero img" },
  // { src: "Snap_9.jpg", alt: "Hero img" },
  // { src: "Snap_10.jpg", alt: "Hero img" },
  // { src: "Snap_11.jpg", alt: "Hero img" },
  // { src: "Snap_12.jpg", alt: "Hero img" },
  // { src: "Snap_13.jpg", alt: "Hero img" },
  // { src: "Snap_14.jpg", alt: "Hero img" },
  // { src: "Snap_15.jpg", alt: "Hero img" },
  // { src: "Snap_16.jpg", alt: "Hero img" },
  // { src: "Snap_17.jpg", alt: "Hero img" },
  // { src: "Snap_18.jpg", alt: "Hero img" },
];
export const images2 = [
  { src: "qlirimi 1.webp", alt: "Hero img" },
  { src: "/medina_1.webp", alt: "Hero img" },
  { src: "DJI_0773.webp", alt: "Hero img" },
  // { src: "/marigona.web//p", alt: "Hero img" },
  { src: "DJI_0771-Enhanced-NR.webp", alt: "Hero img" },
  { src: "marigona2.webp", alt: "Hero img" },
  { src: "DSC02586.webp", alt: "Hero img" },
  { src: "DSC02593.webp", alt: "Hero img" },
  { src: "DSC07200.webp", alt: "Hero img" },
  { src: "agnesa_2.webp", alt: "Hero img" },
  { src: "agnesa_6.webp", alt: "Hero img" },
  { src: "agnesa_5.webp", alt: "Hero img" },
  { src: "agnesa_4.webp", alt: "Hero img" },
  { src: "blue_7.webp", alt: "Hero img" },
  { src: "Photo_7.webp", alt: "Hero img" },
  { src: "isa_1.webp", alt: "Hero img" },
  { src: "isa_2.webp", alt: "Hero img" },
  { src: "isa_3.webp", alt: "Hero img" },
  { src: "isa_4.webp", alt: "Hero img" },
  { src: "isa_5.webp", alt: "Hero img" },
  { src: "isa_6.webp", alt: "Hero img" },
  { src: "isa_7.webp", alt: "Hero img" },
  { src: "Snap_18.jpg", alt: "Hero img" },
  { src: "Snap_13.jpg", alt: "Hero img" },
  { src: "Snap_10.jpg", alt: "Hero img" },
  { src: "riri_1.webp", alt: "Hero img" },
  { src: "riri_2.webp", alt: "Hero img" },
  { src: "lake_1.webp", alt: "Hero img" },
  { src: "lake_2.webp", alt: "Hero img" },
  { src: "visar_1.webp", alt: "Hero img" },
  { src: "visar_2.webp", alt: "Hero img" },
  { src: "visar_3.webp", alt: "Hero img" },
  { src: "visar_4.webp", alt: "Hero img" },
  { src: "visar_5.webp", alt: "Hero img" },
  { src: "Photo_22.webp", alt: "Hero img" },
  { src: "Photo_23.webp", alt: "Hero img" },
  { src: "Photo_24.webp", alt: "Hero img" },
  { src: "Photo_25.webp", alt: "Hero img" },
  { src: "Photo_webp_1.webp", alt: "Hero img" },
  { src: "Photo_webp_2.webp", alt: "Hero img" },
  { src: "Snap_4.jpg", alt: "Hero img" },
  { src: "Snap_5.jpg", alt: "Hero img" },
  { src: "Snap_6.jpg", alt: "Hero img" },
  { src: "Snap_11.webp", alt: "Hero img" },
  { src: "Snap_12.webp", alt: "Hero img" },
  { src: "Snap_15.webp", alt: "Hero img" },
  { src: "Snap_16.webp", alt: "Hero img" },
  { src: "Snap_17.webp", alt: "Hero img" },
  { src: "Snap_19.webp", alt: "Hero img" },
  { src: "Snap_20.webp", alt: "Hero img" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <FullWidth>
        <div className="relative md:w-full md:min-h-[900px]  h-full min-h-[500px] mt-12 md:mt-0 mb-16 md:mb-0 overflow-hidden">
          {images.map((photo, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={`w-full h-full object-cover ${photo.objectPositionClass}`}
              />
            </div>
          ))}
        </div>
      </FullWidth>

      <CoverLetter
        heading="Human Connection is a beautiful thing"
        content="And is at the heart of my photography. I’m drawn to the authentic,
        subtle moments that often go unnoticed—the quiet glances, gentle
        touches, and soft smiles that weave together the story of your wedding
        day. My goal is to capture these fleeting, genuine interactions,
        preserving the emotions and connections that make your day uniquely
        yours."
        linkTo="about"
        linkToText="More about Riard"
      />
      <PhotoGallery />
    </div>
  );
};

export default Home;
