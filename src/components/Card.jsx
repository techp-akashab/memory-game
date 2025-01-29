import React from "react";
export default function Card({
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s",
  imgTitle = "Image",
}) {
  return (
    <>
      <img src={imgSrc} alt={imgTitle} />
      <p>{imgTitle}</p>
    </>
  );
}
