import React from "react";

const Image = ({ imgClassName, imgSrc, imgAlt }) => {
  return <img className={`w-full   rounded-lg ${imgClassName}`} src={imgSrc} alt={imgAlt} />;
};

export default Image;
