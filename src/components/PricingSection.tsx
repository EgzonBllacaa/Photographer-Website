import { Link } from "react-router";

const sections = [
  {
    title: "Portraits",
    content: "WA/OR starting at $1,500 Destination starting at $2,500",
    cta: "Get in Touch",
    imgSrc: "/Hero_img_1.jpg",
  },
  {
    title: "Weddings",
    content: "WA/OR starting at $7,500 Destination starting at $8,500",
    cta: "Get in Touch",
    imgSrc: "/Hero_img_1.jpg",
  },
  {
    title: "Elopements",
    content: "WA/OR starting at $5,750 Destination starting at $6,750",
    cta: "Get in Touch",
    imgSrc: "/Hero_img_1.jpg",
  },
];

const PricingSection = () => {
  return (
    <div className="mb-30">
      {sections.map((section, index) => (
        <section
          className={`flex w-full items-center  ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
          key={index}
        >
          <div className="w-1/2 flex flex-col gap-6 px-32 py-20 items-center">
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
          <img src={section.imgSrc} className="w-1/2" />
        </section>
      ))}
    </div>
  );
};

export default PricingSection;
