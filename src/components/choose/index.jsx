import React from "react";
import ChooseIcon from "../../assets/choose-icon.svg";
import ChooseImage from "../../assets/choose-image.png";
import LearnMore from "../../assets/learn-more-icon.svg";
import { ScrollParallax } from "react-just-parallax";
import useMediaQuery from "../../hooks/useMediaQuery";

const Choose = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="mx-auto min-h-full w-5/6 py-10 md:py-20">
      <div className="md:flex justify-between items-center">
        <div>
          <h4 className="text-poppoins italic text-[18px] text-[#7D7D7D]">
            Why Choose Us ?
          </h4>

          <h2 className="text-[45px] text-dark mt-3">
            How to use ? <br />
            learn more details.
          </h2>
        </div>

        <div className="flex justify-between items-center gap-3">
          <img src={ChooseIcon} alt="graph" />

          <div>
            <p className="text-[#494949] text-[14px] font-poppins">
              Dose not contain alcohol.
            </p>
            <h4 className="font-poppins text-[20px] text-dark mt-5 mb-0">
              PH 3.5
            </h4>
          </div>
        </div>
      </div>

      <div className="w-4/5 mx-auto md:py-20">
        <div className="md:basis-3/5 md:flex justify-between items-center">
          {isAboveMediumScreens ? (
            <ScrollParallax>
              <img src={ChooseImage} alt="product" />
            </ScrollParallax>
          ) : (
            <img className="w-[350px]" src={ChooseImage} alt="product" />
          )}

          <div>
            <h2 className="text-[22px] text-dark">Apply & Ingredients</h2>
            <p className="text-[16px] leading-7 text-textLight">
              Give your face that gorgeous sun-kissed look with high-quality
              bronzers! Makeup city is a house to international brands that sell
              natural-looking bronzers. Bronzing is about giving your face the
              perfect dimension and warmth.
            </p>
            <p className="text-[16px] leading-7 text-textLight">
              If you are looking for ways to warm up your pale skin, apply
              bronzer, and see the difference. Bronzer face seems the smart way
              to add glamour to your otherwise simplistic look.
            </p>

            <button className="flex justify-between items-center gap-2 font-poppins text-[15px] text-[#F93801] bg-white mt-4 border-none">
              <img src={LearnMore} alt="learn more" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
