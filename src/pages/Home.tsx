import { useEffect, useState } from "react";
import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";
import PhotoGallery from "../components/PhotoGallery";

const images = [
  "/IMG_4.jpg",
  "/IMG_5.jpg",
  "/Investment_img_1.jpg",
  "/IMG_6.jpg",
  "/IMG_7.jpg",
  "/IMG_8.jpg",
  "/Hero_img_1.jpg",
  "/IMG_9.jpg",
  "/IMG_10.jpg",
  "/IMG_3.jpg",
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
              key={index}
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
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
