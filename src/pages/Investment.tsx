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
          src="/IMG_4.webp"
          loading="lazy"
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
          className="min-h-[400px] max-h-[880px] w-full object-cover"
          alt=""
        />
      </FullWidth>

      <CoverLetter
        content="Kam nderin të jem pjesë e shumë dasmave gjatë një dekade e më shumë; përvoja më ka mësuar se fotografia nuk është thjesht vendi, drita apo kompozicioni — është ndjenja që kapet në një moment. Unë fotografoj marrëdhëniet, gjestet e vogla dhe ato çaste të sinqerta që e bëjnë çdo dasmë të veçantë. Qëllimi im është që kur të shikoni fotot të ndjeni të njëjtën gëzim, mallëngjim apo të qeshni me kujtimet — ashtu si e ndjetë ditën e dasmës.

Është më pak për “fotografinë perfekte” dhe më shumë për historinë që qëndron pas saj: historinë e familjes, shokëve, dhe momentet që tregojnë dashurinë dhe lidhjen njerëzore. Nëse fotografitë e mia arrijnë t’ju sjellin përsëri ato ndjenja — pulsin, lotin, ose buzëqeshjen — kam bërë punën time siç duhet. Dhe nëse ndonjëherë fotografitë shërbejnë si dritë në momentet jo edhe aq të mira, atëherë ajo është shpërblimi më i madh."
        captureText="It’s about capturing the intricacies of the relationships that make every wedding unique."
        content2="Nëse përmes fotove të mia ndjeni përsëri ato drithërima, nëse qeshni duke kujtuar një batutë të shoqes së nuses, apo thjesht humbisni në një moment që nuk e keni vënë re atë ditë — atëherë e kam bërë punën time. Dhe nëse në ditët më të vështira ato fotografi ju kthejnë pak dritë, ky është nderi më i madh që mund të kërkoj si fotograf. Nëse përmes fotove të mia ndjeni përsëri ato drithërima, nëse qeshni duke kujtuar një batutë të shoqes së nuses, apo thjesht humbisni në një moment që nuk e keni vënë re atë ditë — atëherë e kam bërë punën time. Dhe nëse në ditët më të vështira ato fotografi ju kthejnë pak dritë, ky është nderi më i madh që mund të kërkoj si fotograf."
        content3="Cilindo fotograf të zgjidhni, unë ju inkurajoj ta trajtoni fotografinë e dasmës si një prioritet. Janë kujtimet që mbesin."
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
