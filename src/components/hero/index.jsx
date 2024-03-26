import React from "react";
import ButtonIcon from "../../assets/button-icon.svg";
import HeroImage from "../../assets/hero-image.png";

import { ScrollParallax } from "react-just-parallax";
import useMediaQuery from "../../hooks/useMediaQuery";

const Hero = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="gap-16 md:py-10 md:h-full md:pb-0 relative overflow-hidden"
    >
      <div className="before:absolute before:top-20 md:before:content-dottedlines before:z-[1] before:-left-20" />
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <div className="md:-mt-20">
            <h2 className="text-[50px] md:text-[70px] text-dark my-0 md:mb-5">
              Foundation Matte & Poreless
            </h2>

            <p className="text-[18px] md:text-[20px] font-poppins text-textLight my-10">
              Maybelline’s #1 foundation perfect for oily skin. No stickiness,
              no shine.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-8">
            <button className="rounded-md bg-button md:px-[28px] md:py-[18px] md:text-[20px] text-[18px] px-[20px] py-[8px] text-white drop-shadow border-none">
              Add to Cart
            </button>

            <button className="flex items-center justify-between md:gap-5 border-none bg-white text-[18px] md:text-[20px] text-textLight font-poppins">
              <img className="mt-1 size-[40px]" src={ButtonIcon} alt="play" />
              How It Works
            </button>
          </div>
        </div>

        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end mt-5">
          {isAboveMediumScreens ? (
            <ScrollParallax>
              <img
                className="w-[350px] md:w-[500px]"
                src={HeroImage}
                alt="hero"
              />
            </ScrollParallax>
          ) : (
            <img
              className="w-[350px] md:w-[500px]"
              src={HeroImage}
              alt="hero"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
