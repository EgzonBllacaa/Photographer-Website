import ClientWords from "../components/ClientWords";
import CoverLetter from "../components/CoverLetter";
import FadeIn from "../components/FadeIn";
import FullWidth from "../components/FullWidth";
import PricingSection from "../components/PricingSection";

const Investment = () => {
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

      <CoverLetter
        content="Kam nderin të jem pjesë e shumë dasmave përgjatë një dekade e më shumë. Përvoja më ka mësuar se fotografia nuk është thjesht vendi, drita apo kompozicioni — është ndjenja që kapet në një moment. Unë fotografoj marrëdhëniet, gjestet e vogla dhe ato çaste të sinqerta që e bëjnë çdo dasmë të veçantë. "
        captureText="It’s about capturing the intricacies of the relationships that make every wedding unique."
        content2="Qëllimi im është që, kur të shikoni fotot, të përjetoni sërish të njëjtin gëzim, mallëngjim apo buzëqeshje që patët atë ditë. Nuk ka të bëjë me “fotografinë perfekte”, por me historinë që qëndron pas saj — historinë e familjes, miqve dhe momenteve që tregojnë dashurinë dhe lidhjen njerëzore."
        content3="Nëse përmes fotove të mia përjetoni sërish ndjenjat e asaj dite, nëse buzëqeshni duke kujtuar një moment të bukur me miqtë, apo humbisni në një detaj që nuk e keni vënë re atëherë — atëherë unë e kam bërë punën time. Dhe nëse në ditët më të vështira këto fotografi ju sjellin pak dritë, ky është nderi më i madh që mund të kem si fotograf."
        linkTo="contact"
        linkToText="Let's Get Started"
      />
      <PricingSection />
      <FadeIn>
        <ClientWords />
      </FadeIn>
    </div>
  );
};

export default Investment;
