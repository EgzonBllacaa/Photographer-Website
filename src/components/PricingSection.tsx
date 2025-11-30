import { Link } from "react-router";
import FadeIn from "./FadeIn";

const sections = [
  {
    title: "Basic | 399€",
    contentTitle: "Ideal për çiftet që duan diçka të thjeshtë dhe të bukur.",
    content: [
      "Fotosesion para dasmës (1:30h)",
      "300–500 foto",
      "30 foto të edituara profesionalisht",
      "1 video e shkurtër “Love Story” (20–40 sekonda)",
      "Location brenda Kosovës",
      "Fotot dorëzohen online",
    ],
    cta: "Book now",
    imgSrc: "/Photo_6.webp",
  },
  {
    title: "Standard | 599€",
    contentTitle: "Opsion i balancuar për çiftet që duan më shumë detaje.",
    content: [
      "Fotosesion para dasmës",
      "1 fotograf në dasmë",
      "500–800 foto totale ne fotosesion",
      "Të gjitha fotot me color correction",
      "50 foto të edituara profesionalisht",
      "1 video Love Story (30–60 sekonda)",
      "Dorëzimi: USB + online",
      "Location brenda Kosovës",
    ],
    cta: "Book now",
    imgSrc: "/Snap_4.jpg",
  },
  {
    title: "Premium | 799€",
    contentTitle:
      "Për çiftet që duan mbulim të fortë dhe dy këndvështrime në dasmë.",
    content: [
      "Për çiftet që duan mbulim të fortë dhe dy këndvështrime në dasmë.",
      "Fotosesion para dasmës",
      "2 fotografë ditën e dasmës",
      "700–1000 foto ne fotosesion",
      "Të gjitha fotot me color correction",
      "70 foto të edituara profesionalisht",
      "1 video Love Story (30–60 sekonda)",
      "Dorëzimi: USB + online",
      "Location brenda Kosovës",
    ],
    cta: "Book now",
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
            <div className="sm:w-1/2 w-full flex flex-col gap-6  md:px-32 py-20 items-center">
              <h3 className="text-3xl uppercase tracking-wider font-medium">
                {section.title}
              </h3>
              <div className="text-sm flex flex-col gap-5 text-zinc-500  text-center ">
                <span className=" text-black ">{section.contentTitle}</span>
                <ul>
                  {section.content.map((item, idx) => (
                    <>
                      <li key={idx}>{item}</li>
                      <br />
                    </>
                  ))}
                </ul>
              </div>
              <Link className="text-orange-800/90 " to={"/contact"}>
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
