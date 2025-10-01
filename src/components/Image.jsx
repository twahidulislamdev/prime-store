import React from "react";

const Image = ({ imgClassName, imgSrc, imgAlt }) => {
  return <img className={`${imgClassName}`} src={imgSrc} alt={imgAlt} />;
};

export default Image;
