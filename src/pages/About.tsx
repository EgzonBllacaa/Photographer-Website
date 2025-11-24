import { Link } from "react-router";
import FadeIn from "../components/FadeIn";

const About = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-10 mx-auto mt-40 mb-10">
      <FadeIn>
        <img
          src="/Riard_self_image.jpeg"
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          className="w-full"
          alt=""
        />
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col gap-3 items-center text-center text-zinc-600 leading-loose">
          <p>
            I’m Riard Bllaca, a professional photographer based in Prishtina with over 10 years of experience. Throughout my career, I have worked on a wide range of projects, from weddings
            and portraits to commercial photography. My approach combines technical expertise and a keen eye for detail, ensuring every image meets the highest standards.
          </p>
          <p>
            Riard Bllaca here, a professional photographer from Prishtina with more than a decade of experience. I specialize in
            capturing authentic moments and creating visually
            striking images for weddings, portraits, and commercial work. With over 10 years behind the camera, I focus on precision, creativity,
            and consistently delivering exceptional results.
          </p>
        </div>
      </FadeIn>
      <button className="py-4 px-10 border-2 border-amber-800 hover:bg-amber-800 hover:text-white hover:cursor-pointer w-fit mx-auto text-amber-900">
        <Link to={"/contact"}>Get in Touch</Link>
      </button>
    </div>
  );
};

export default About;
