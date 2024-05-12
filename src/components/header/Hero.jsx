// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="h-[93vh] text-center bg-primary">
      <div className="h-full grid grid-rows-8 grid-cols-3 text-white pt-5">
        {/* GRID HOME */}
        <div className="row-span-1 col-span-3 flex justify-center items-end mb-9 md:row-span-3 sm:row-span-2 w-full h-full bg-slate-400">
          {/* <p className="text-7xl font-bold sm:text-9xl ">PULSEXMADRID</p> */}
          <p className="mobile-title lg:text-8xl">PULSEXMADRID</p>
        </div>
        <div className="row-span-3 col-span-3 md:row-span-3 bg-slate-600">
          <div className="iframe-container row-span-2">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/xADfnYAbWZo?si=mCpV1vMT5j8UMIvi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          </div>
        </div>
        <div className="row-span-1 col-span-3">
          <p
            className="mt-6"
            style={{ fontWeight: 700, letterSpacing: -2, fontSize: "30px" }}
          >
            ¡Vive experiencias inolvidables a tu alcance!
          </p>
        </div>

        {/* GRID HOME */}
      </div>
    </section>
  );
};
export default Hero;
