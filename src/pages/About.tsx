import { Link } from "react-router";
import FadeIn from "../components/FadeIn";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const intro = t("about.intro", { returnObjects: true }) as string[];
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
          {Array.isArray(intro) &&
            intro.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
        </div>
      </FadeIn>
      <button className="py-4 px-10 border-2 border-amber-800 hover:bg-amber-800 hover:text-white hover:cursor-pointer w-fit mx-auto text-amber-900">
        <Link to={"/contact"}>{t("about.buttonText")}</Link>
      </button>
    </div>
  );
};

export default About;
