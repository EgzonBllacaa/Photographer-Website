import { Link } from "react-router";

type Props = {
  heading: string;
  content: string;
  content2?: string;
  captureText?: string;
  linkTo?: string;
  linkToText?: string;
};

const CoverLetter = ({
  heading,
  content,
  content2,
  captureText,
  linkTo,
  linkToText,
}: Props) => {
  return (
    <section className="px-32 py-28 relative flex flex-col justify-center z-20 -mt-7 bg-white mx-auto max-w-3xl gap-3.5 items-center ">
      <h2 className="uppercase text-xl font-light">{heading}</h2>
      <p className="text-center text-md leading-loose text-zinc-500">
        {content}
      </p>
      {captureText && (
        <p className="text-2xl px-4 leading-8 text-orange-800/60 py-10 text-center">
          {captureText}
        </p>
      )}
      {content2 && (
        <p className="text-center text-md leading-loose text-zinc-500 ">
          {content2}
        </p>
      )}
      {linkTo && (
        <Link
          to={`/${linkTo}`}
          className={`${
            linkToText === "More about Jordan"
              ? "text-amber-800/70 text-sm underline"
              : "px-12 py-6 bg-orange-900/60 tracking-wider text-white uppercase mt-10"
          } `}
        >
          {linkToText || "Learn More"}
        </Link>
      )}
    </section>
  );
};

export default CoverLetter;
