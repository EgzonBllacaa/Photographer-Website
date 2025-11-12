import React from "react";

type Props = {
  children: React.ReactNode;
};

const FullWidth = ({ children }: Props) => {
  return <div className="w-full">{children}</div>;
};

export default FullWidth;
