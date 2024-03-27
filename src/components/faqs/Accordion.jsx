import PlusIcon from "../../assets/plus-icon.svg";
import MinusIcon from "../../assets/minus-icon.svg";
import { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="bg-[#F3F4FE] p-10 drop-shadow-2xl rounded-lg max-w-[500px] justify-self-center">
      <button
        className="flex justify-center gap-5 bg-[#F3F4FE] border-none items-center"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="transition-transform duration-300 transform">
          <img
            src={accordionOpen ? MinusIcon : PlusIcon}
            alt={accordionOpen ? "close" : "open"}
            className={`transform ${accordionOpen ? "rotate-180" : ""}`}
          />
        </span>
        <span className="font-poppins text-[18px] text-dark">{title}</span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out text-slate-600 text-sm overflow-hidden ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`text-[14px] text-dark overflow-hidden ml-14 ${
            accordionOpen ? "mt-6" : "mt-0"
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
