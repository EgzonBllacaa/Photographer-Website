import ContactForm from "../components/ContactForm";
import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";

const Contact = () => {
  return (
    <div>
      <FullWidth>
        <img src="/Hero_img_1.jpg" alt="" />
      </FullWidth>
      <CoverLetter
        heading="I can’t wait to hear from you!"
        content="If you connect with my work and want to learn more; please use the form below to get in contact."
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
