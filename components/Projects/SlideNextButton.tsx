import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import s from "./buttons.module.css";

export default function SlideNextButton({slidesCount}: any) {

  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className={`${s.next} ${slidesCount === 1 && s.disabled}`} aria-label="next slide">
      <svg
        width="23"
        height="19"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.807609 14.9792 0.807609 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM2.62268e-07 13.5L25 13.5L25 10.5L-2.62268e-07 10.5L2.62268e-07 13.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
