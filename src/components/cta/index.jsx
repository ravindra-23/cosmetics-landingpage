import React from "react";
import Ctabg from "../../assets/cta-bg.png";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="mx-auto w-5/6 py-10 md:py-20">
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
        <div className="bg-cta bg-cover rounded-2xl w-full flex md:flex-row flex-col items-center justify-between p-8 sm:py-14 sm:px-20">
          <div className=" md:w-2/5 w-full">
            <h2 className="text-[#00566B] text-[40px] ">
              Enough talk, let's make you look beautiful
            </h2>
            <p className="text-[16px] text-white">
              There are many variations of passages of lorem Ipsum available,
              but the
            </p>
          </div>

          <div className="md:2/5">
            <button className="px-6 py-4 rounded-lg mt-6 md:mt-0 border-none shadow-xl text-poppins text-[16px]">
              Let’s started
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
