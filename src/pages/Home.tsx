import { useEffect, useState } from "react";
import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";
import PhotoGallery from "../components/PhotoGallery";

const images = [
  "medina.webp",
  "marigona.webp",
  "marigona2.webp",
  "marigona3.webp",
  "qlirimi 1.webp",
  // "/IMG_4.webp",
  // "/IMG_5.webp",
  // "/Investment_img_1.webp",
  // "/IMG_6.webp",
  // "/IMG_7.webp",
  // "/IMG_8.webp",
  // "/Hero_img_1.webp",
  // "/IMG_9.webp",
  // "/IMG_10.webp",
  // "/IMG_3.webp",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500); // 3000ms = 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <FullWidth>
        <div className="relative w-full max-h-[800px] h-[800px] overflow-hidden">
          {images.map((src, index) => (
            <img
              src={src}
              loading="lazy"
              key={index}
              sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-[center_50%]  transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
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
        linkToText="More about Jordan"
      />
      <PhotoGallery />
    </div>
  );
};

export default Home;
