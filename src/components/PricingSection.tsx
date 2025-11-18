import { Link } from "react-router";
import FadeIn from "./FadeIn";

const sections = [
  {
    title: "Portraits",
    content: "WA/OR starting at $1,500 Destination starting at $2,500",
    cta: "Get in Touch",
    imgSrc: "/medina.webp",
  },
  {
    title: "Weddings",
    content: "WA/OR starting at $7,500 Destination starting at $8,500",
    cta: "Get in Touch",
    imgSrc: "/marigona2.webp",
  },
  {
    title: "Elopements",
    content: "WA/OR starting at $5,750 Destination starting at $6,750",
    cta: "Get in Touch",
    imgSrc: "/marigona.webp",
  },
];

const PricingSection = () => {
  return (
    <div className="mb-30">
      {sections.map((section, index) => (
        <FadeIn>
          <section
            className={`flex w-full items-center flex-col sm:flex-row ${
              index % 2 !== 0 ? "sm:flex-row-reverse " : ""
            }`}
            key={index}
          >
            <div className="sm:w-1/2 w-full flex flex-col gap-6 px-32 py-20 items-center">
              <h3 className="text-3xl uppercase tracking-wider">
                {section.title}
              </h3>
              <p className="text-sm text-zinc-500 tracking-wide text-center ">
                {section.content}
              </p>
              <Link className="text-orange-800/40" to={"/contact"}>
                {section.cta}
              </Link>
            </div>
            <img
              src={section.imgSrc}
              loading="lazy"
              sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
              className="sm:w-1/2 w-full"
            />
          </section>
        </FadeIn>
      ))}
    </div>
  );
};

export default PricingSection;
