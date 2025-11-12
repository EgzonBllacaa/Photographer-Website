import ClientWords from "../components/ClientWords";
import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";
import PricingSection from "../components/PricingSection";

const Investment = () => {
  return (
    <div>
      <FullWidth>
        <img
          src="/IMG_4.jpg"
          className="min-h-[400px] max-h-[880px] w-full object-cover"
          alt=""
        />
      </FullWidth>
      <CoverLetter
        heading="Investment"
        content="I've had the honor of shooting many weddings in the twelve years since I began this adventure, and because of that I can confidently say that I know firsthand how impactful photographs can be.

To me, the photographs I shoot are much more than the place they're set in, the lighting, or the composition. All of those things play their part of course, but really, they're about capturing the intricacies of the relationships that make every wedding unique. They're about highlighting the gestures and moments that make love and human connection so damn wonderful."
        captureText="It’s about capturing the intricacies of the relationships that make every wedding unique."
        content2="Without getting too existential on you, the reality is that none of us know what life has in store for us next. Change comes quickly, and it doesn't always leave happy memories in its wake. I want my photographs to make you feel the same joy you felt on your wedding day. If I can make you feel those goosebumps again, or laugh remembering the story your bridesmaid told about you during their toast, then I’ve done my job. And if my photographs can be a source of light for you and yours in the not-so-great times, that's the biggest honor of all.

To put it simply: when you find someone whose work resonates with you, your photos will be that much more special. Take the time to choose someone who prioritizes documenting the kinds of moments that matter the most to you. It's a pretty big job, which is why I believe it’s one that's well worth the investment. Regardless of what you decide, I encourage you to make your wedding photographs a priority."
        linkTo="contact"
        linkToText="Let's Get Started"
      />
      <PricingSection />
      <ClientWords />
    </div>
  );
};

export default Investment;
