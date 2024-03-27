import Logo from "../../assets/logo.svg";
const aboutus = ["About Us", "Home", "Features", "FAQs", "Reviews", "Stories"];

const privacy = ["Privacy", "Privacy", "Policy", "Payments", "Terms"];

const Footer = () => {
  return (
    <section className="mx-auto w-5/6 py-10 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div>
          <img src={Logo} alt="logo" />
          <p class="text-[18px] text-body font-poppins mb-4">
            Subscribe to our newsletter to receive updates and exclusive offers.
          </p>
          <form className="mt-8">
            <div class="flex">
              <input
                type="email"
                class="px-4 py-3.5 text-sm rounded-l-lg w-full focus:outline-none"
                placeholder="Enter your email address"
              />
              <button
                type="button"
                class="bg-dark text-white px-4 rounded-r-lg text-sm tracking-wide border-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="sm:justify-self-center">
          <h2 className="text-[24px] text-dark">About Us</h2>
          <ul className="list-none pl-0">
            {aboutus.map((link) => (
              <li key={link} className="text-[18px] my-4 font-poppins">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:justify-self-center">
          <h2 className="text-[24px] text-dark">Privacy</h2>
          <ul className="list-none pl-0">
            {privacy.map((link) => (
              <li key={link} className="text-[18px] my-4 font-poppins">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:justify-self-center">
          <h2 className="text-[24px] text-dark">Contact Us</h2>
          <p className="text-[18px] my-4 font-poppins">+01 234 567 8910</p>
          <p className="text-[18px] font-poppins">shakir260@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
