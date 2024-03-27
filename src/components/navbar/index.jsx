import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Basket from "../../assets/basket.svg";
import Person from "../../assets/person.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-button" : ""
      } font-poppins font-[17px] text-black no-underline hover:text-button transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {`${page}`}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackbround = isTopOfPage ? "" : "bg-[#F3F4FE] drop-shadow";

  return (
    <nav>
      <div
        className={` ${navbarBackbround} ${flexBetween} w-full fixed z-30 py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="products"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="about us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="faqs"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="contact us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <img src={Search} alt="search" />
                  <img src={Basket} alt="basket" />
                  <img src={Person} alt="person" />
                </div>
              </>
            ) : (
              <button
                className="rounded-full bg-buttonSecondary border-none p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-dark" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[350px] bg-white drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="products"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="about us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="faqs"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="contact us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
