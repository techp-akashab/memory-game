import React from "react";
export default function Card({
  imgSrc,
  imgTitle,
}) {
  return (
    <>
      <img src={imgSrc} alt={imgTitle} />
      <p>{imgTitle}</p>
    </>
  );
}
