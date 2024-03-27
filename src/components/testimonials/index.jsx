import React from "react";
import TestimonialsImage from "../../assets/testimonial-image.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ScrollParallax } from "react-just-parallax";

const Testimonials = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="mx-auto w-5/6 py-10 md:py-20">
      <div className="w-4/5 mx-auto md:py-20">
        <div className="md:flex justify-between items-center">
          {isAboveMediumScreens ? (
            <div className="md:w-2/5 w-full">
              <ScrollParallax>
                <img
                  className="w-full h-auto"
                  src={TestimonialsImage}
                  alt="product"
                />
              </ScrollParallax>
            </div>
          ) : (
            <img className="w-[300px]" src={TestimonialsImage} alt="product" />
          )}

          <div className="md:w-2/5 w-full">
            <h2 className="text-[45px] text-dark">
              Quick and best results. You are the best!
            </h2>
            <p className="text-[18px] leading-7 text-body">
              “If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </p>
            <p className="text-[18px] leading-7 text-body">
              There are many variations of passages of Lorem Ipsum available.”
            </p>
            <div className="mt-16">
              <h4 className="text-black text-[20px] my-0 mb-2">
                Dragos Gontariu
              </h4>
              <p className="text-[18px] text-[#4F6B7D] mt-0 font-poppins">
                Mareting Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
