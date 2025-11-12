import CoverLetter from "../components/CoverLetter";
import FullWidth from "../components/FullWidth";

const Home = () => {
  return (
    <div>
      <FullWidth>
        <img
          src="/public/Hero_img_1.jpg"
          className="max-h-[890px] w-full object-cover"
        />
      </FullWidth>
      <CoverLetter
        heading="Human Connection is a beautiful thing"
        content="And is at the heart of my photography. I’m drawn to the authentic,
        subtle moments that often go unnoticed—the quiet glances, gentle
        touches, and soft smiles that weave together the story of your wedding
        day. My goal is to capture these fleeting, genuine interactions,
        preserving the emotions and connections that make your day uniquely
        yours."
        linkTo="about"
        linkToText="More about Jordan"
      />
    </div>
  );
};

export default Home;
