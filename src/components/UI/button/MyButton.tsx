import React, { FC } from "react";

interface IMyBtn {
  name?: string;
  src?: string;
  alt?: string;
  className?: string;
}

const MyButton: FC<IMyBtn> = ({ name, src, alt, className }) => {
  return (
    <button className={className}>
      {name}
      <img src={src} alt={alt} />
    </button>
  );
};

export default MyButton;
