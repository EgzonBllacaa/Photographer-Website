import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <FullWidth>
        <img
          src="/Riard_self_image.jpeg"
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          className="w-full h-full mt-32 md:min-h-[400px] md:max-h-[800px] md:w-full object-cover"
          alt=""
        />
      </FullWidth>
      <CoverLetter
        heading={t("contact.heading")}
        content={t("contact.content")}
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
