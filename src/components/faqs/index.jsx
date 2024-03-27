import Accordion from "./Accordion";

const faqs = [
  {
    title: "How long until we deliver your product.",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
  {
    title: "How long until we deliver your product.",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
  {
    title: "Do you offer money back guarentee?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
  {
    title: "Is it medically tested?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
  {
    title: "Do you ship out of United States?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
  {
    title: "How to get best results from this product?",
    answer:
      "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.",
  },
];

const Faqs = () => {
  return (
    <section id="faqs" className="mx-auto w-5/6 py-10 md:py-20">
      <div className="w-4/5 mx-auto">
        <h2 className="text-[40px] text-[#2D1D61] text-center">
          Frequently Ask Questions
        </h2>
      </div>

      <div className="w-full grid justify-center sm:grid-cols-2 gap-5 mt-20">
        {faqs.map((faq) => (
          <Accordion title={faq.title} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
