import { Link } from "react-router";

type Props = {
  heading: string;
  content: string;
  captureText?: string;
};

const CoverLetter = ({ heading, content, captureText }: Props) => {
  return (
    <section className="px-32 py-28 relative flex flex-col justify-center z-20 -mt-7 bg-white mx-auto max-w-3xl gap-3.5 items-center ">
      <h2 className="uppercase text-xl font-light">
        Human Connection <br />{" "}
        <span className="italic">is a beautiful thing</span>
      </h2>
      <p className="text-center text-md leading-loose text-zinc-500">
        And is at the heart of my photography. I’m drawn to the authentic,
        subtle moments that often go unnoticed—the quiet glances, gentle
        touches, and soft smiles that weave together the story of your wedding
        day. My goal is to capture these fleeting, genuine interactions,
        preserving the emotions and connections that make your day uniquely
        yours.
      </p>
      <Link to={"/about"} className="text-amber-800/70 text-sm underline">
        More about Jordan
      </Link>
    </section>
  );
};

export default CoverLetter;
