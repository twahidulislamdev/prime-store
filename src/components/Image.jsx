import React from "react";

const Image = ({ imgClassName, imgSrc, imgAlt }) => {
  return <img className={`w-full h-[420px] ${imgClassName}`} src={imgSrc} alt={imgAlt} />;
};

export default Image;
