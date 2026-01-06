import { Link } from "react-router";
import FadeIn from "./FadeIn";
import { useTranslation } from "react-i18next";

interface Section {
  title: string;
  contentTitle: string;
  content: string[];
  cta: string;
  imgSrc: string;
}

const PricingSection = () => {
  const { t } = useTranslation();

  // Cast as Section[] to fix TS error
  const sections = t("investment.pricing.sections", {
    returnObjects: true,
  }) as Section[];

  return (
    <div className="mb-30">
      {sections.map((section, index) => (
        <FadeIn key={index}>
          <section
            className={`flex w-full items-center flex-col sm:flex-row ${
              index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="sm:w-1/2 w-full flex flex-col gap-6 md:px-32 py-20 items-center">
              <h3 className="text-3xl uppercase tracking-wider font-medium">
                {section.title}
              </h3>

              <div className="text-sm flex flex-col gap-5 text-zinc-500 text-center">
                <span className="text-black">{section.contentTitle}</span>
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link className="text-orange-800/90" to="/contact">
                {section.cta}
              </Link>
            </div>

            <img
              src={section.imgSrc}
              alt={section.title}
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
