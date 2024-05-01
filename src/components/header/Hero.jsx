import React from "react";

export const Hero = () => {
  return (
    <section className="bg-primary h-[90vh]">
      <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="flex flex-col items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xADfnYAbWZo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Hero;
