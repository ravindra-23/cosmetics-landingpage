import React from "react";
import Stripe from "../../assets/stripe.svg";
import Google from "../../assets/google.svg";
import Deloite from "../../assets/deloite.svg";
import Accenture from "../../assets/accenture.svg";
import Ibm from "../../assets/ibm.svg";
import Samsung from "../../assets/samsung.svg";

const logos = [
  { src: Stripe, alt: "Stripe" },
  { src: Google, alt: "Google" },
  { src: Deloite, alt: "Deloite" },
  { src: Accenture, alt: "Accenture" },
  { src: Ibm, alt: "Ibm" },
  { src: Samsung, alt: "Samsung" },
];

const Clients = () => {
  return (
    <section className="mx-auto min-h-full w-5/6 py-10 md:py-20">
      <div>
        <h4 className="text-[16px] font-poppins text-[#C8CED8] text-center">
          SOME OF OUR TRUSTED CLIENTS
        </h4>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden md:mt-16">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll list-none">
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll list-none"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
