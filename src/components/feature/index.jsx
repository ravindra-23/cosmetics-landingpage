import React from "react";
import Product1 from "../../assets/product-1.png";
import Product2 from "../../assets/product-2.png";
import { motion } from "framer-motion";

import { ScrollParallax } from "react-just-parallax";
import useMediaQuery from "../../hooks/useMediaQuery";

const Feature = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="products" className="mx-auto min-h-full w-5/6 py-10 md:py-20">
      <div className="md:my-5 flex flex-col items-center justify-center text-center">
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h2 className="text-[50px] text-dark mb-0">
              Best Cosmetic Products
            </h2>
            <p className="font-poppins text-[16px] leading-7 text-body">
              Launched in 2002, Makeup City has brought renowned international
              personal care brands under one roof for the first time in
              Pakistan. from a journey of a few stores, we have grown
              significantly, by making our brands available to almost every
              where a person can think off.
            </p>
          </div>
        </motion.div>

        <div className="w-4/5 mx-auto md:py-20 text-left">
          <div className="md:flex justify-between items-center">
            {isAboveMediumScreens ? (
              <div className="w-2/5">
                <ScrollParallax>
                  <img className="w-full h-auto" src={Product1} alt="product" />
                </ScrollParallax>
              </div>
            ) : (
              <img className="w-[350px]" src={Product1} alt="product" />
            )}

            <div className="md:w-2/5 w-full">
              <h2 className="text-[40px] text-dark leading-[60px]">
                GOS- Primer Plus 30 ML
              </h2>
              <p className="text-[16px] leading-7 text-body">
                GOSH COPENHAGEN offers a wide selection of products in different
                categories: Cosmetics, Fragrances, Hair Care, Face Care, Body
                Care. GOSH Cosmetics are available online.{" "}
              </p>
            </div>
          </div>
          <div className="md:flex justify-between items-center mt-10">
            <div className="md:w-2/5 w-full">
              <h2 className="text-[40px] text-dark leading-[60px]">
                GOS- Primer Plus 30 ML
              </h2>
              <p className="text-[16px] leading-7 text-body">
                GOSH COPENHAGEN offers a wide selection of products in different
                categories: Cosmetics, Fragrances, Hair Care, Face Care, Body
                Care. GOSH Cosmetics are available online.{" "}
              </p>
            </div>
            {isAboveMediumScreens ? (
              <div className="w-2/5">
                <ScrollParallax>
                  <img className="w-full h-auto" src={Product2} alt="product" />
                </ScrollParallax>
              </div>
            ) : (
              <img
                className="w-[350px] flex justify-center"
                src={Product2}
                alt="product"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
