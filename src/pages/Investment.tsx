import { useTranslation } from "react-i18next";
import ClientWords from "../components/ClientWords";
import CoverLetter from "../components/CoverLetter";
import FadeIn from "../components/FadeIn";
import FullWidth from "../components/FullWidth";
import PricingSection from "../components/PricingSection";

type CoverLetterTranslation = {
  content: string;
  captureText?: string;
  content2?: string;
  content3?: string;
  linkToText: string;
};

const Investment = () => {
  const { t } = useTranslation();
  const coverLetterData = t("investment.coverLetter", {
    returnObjects: true,
  }) as CoverLetterTranslation;

  return (
    <div>
      <FullWidth>
        <img
          src="/DJI_0775.webp"
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          className="mt-32 md:min-h-[400px] z-50 md:max-h-[880px] h-full w-full object-cover"
          alt=""
        />
      </FullWidth>

      {Array.isArray(coverLetterData) && (
        <CoverLetter
          content={coverLetterData.content}
          captureText={coverLetterData.captureText}
          content2={coverLetterData.content2}
          content3={coverLetterData.content3}
          linkTo="contact"
          linkToText={coverLetterData.linkToText}
        />
      )}
      <PricingSection />
      <FadeIn>
        <ClientWords />
      </FadeIn>
    </div>
  );
};

export default Investment;
