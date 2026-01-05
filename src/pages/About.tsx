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
            I’m Riard Bllaca, a professional photographer based in Prishtina
            with over a decade of experience capturing compelling visual
            stories. My work spans a diverse range of projects, from weddings
            and portraits to commercial photography, each approached with
            creativity, precision, and purpose.
          </p>
          <p>
            By blending technical mastery with a sharp eye for detail, I deliver
            images that are not only visually striking but crafted to the
            highest professional standards.
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
