import type { Dispatch, SetStateAction } from "react";

type Props = {
  src: string;
  setSelected: Dispatch<SetStateAction<null | string>>;
  setScrollDisabled: Dispatch<SetStateAction<boolean>>;
};
const ImageModal = ({ src, setSelected, setScrollDisabled }: Props) => {
  return (
    <div
      className="fixed  inset-0 bg-black/70 flex justify-center items-center cursor-pointer z-50"
      onClick={() => {
        setSelected(null);
        setScrollDisabled(false);
      }}
    >
      <img
        src={src}
        loading="lazy"
        alt=""
        sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1800px"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-xl cursor-default"
      />
    </div>
  );
};

export default ImageModal;
