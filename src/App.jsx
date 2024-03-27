import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Choose from "./components/choose";
import Clients from "./components/clients";
import Testimonials from "./components/testimonials";
import Faqs from "./components/faqs";
import CTA from "./components/cta";
import Footer from "./components/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Hero />

      <Feature />

      <Choose />

      <Clients />

      <Testimonials />

      <Faqs />

      <CTA />

      <Footer />
    </div>
  );
}

export default App;
