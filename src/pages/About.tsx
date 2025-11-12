import { Link } from "react-router";

const About = () => {
  return (
    <div className="max-w-3xl flex flex-col gap-10 mx-auto mt-40 mb-10">
      <img src="/Hero_img_1.jpg" className="w-full" alt="" />
      <div className="flex flex-col gap-3 items-center text-center text-zinc-600 leading-loose">
        <p>
          I’m a portrait & wedding photographer based in Seattle, WA. I’ve been
          lucky enough to photograph weddings all over the world for over 15
          years.
        </p>
        <p>
          My wife, Gillian, and I reside in Ballard (our favorite neighborhood
          in Seattle) with our four pups, Tucker, Hudson, Oliver (pictured
          above) & Archie. We own a retail shop called September where you can
          frequently find us and the pups.
        </p>
        <p>
          I’ve become an avid runner in my spare time and will always try to
          squeeze in a run on my travels which is such a fun way to see the
          places I visit. Photography has been such a large part of my life for
          as long as I can remember. I’m so grateful to have been able to turn a
          passion of mine into a career. If you connect with my work, I would
          love to hear more about what you would like to create together.{" "}
        </p>
      </div>
      <button className="py-4 px-10 border-2 border-amber-800 w-fit mx-auto text-amber-900">
        <Link to={"/contact"}>Get in Touch</Link>
      </button>
    </div>
  );
};

export default About;
