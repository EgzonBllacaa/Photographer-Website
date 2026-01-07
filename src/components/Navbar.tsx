import { useEffect, useState } from "react";
import { BsTiktok } from "react-icons/bs";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcGlobe } from "react-icons/fc";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  // const { t } = useTranslation();
  const [isLangShown, setIsLangShown] = useState(false);
  const { i18n } = useTranslation();

  const portfolioPage = location.pathname === "/portfolio";
  console.log("Location", location.pathname);

  const currentLang = i18n.language;
  console.log(currentLang === "de");
  console.log(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-12  pt-20 top-0 transition-all duration-300 fixed left-0 z-50 pb-5 w-full ${
        isScrolled
          ? "bg-black text-white md:backdrop-blur-sm md:shadow-md"
          : "md:bg-transparent text-black"
      }`}
    >
      {/* flex justify-between items-center */}
      {/* grid place-items-center grid-cols-3  */}
      <nav className=" flex items-center justify-between z-50">
        {/* Hamburger icon */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`text-2xl z-50 cursor-pointer ${
            isOpen ? "text-[#fff59e]" : "text-[#777035]"
          }   lg:hidden`}
        >
          <GiHamburgerMenu />
        </button>

        {/* ====== Mobile Full-Screen Menu ====== */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-black text-white  flex flex-col items-center justify-center gap-8 text-lg transform transition-transform duration-300 ease-in-out lg:hidden z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li>
            <Link
              className="p-3 uppercase hover:border-b-2 hover:border-[#777035] hover:text-[#777035]"
              to={"/portfolio"}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="p-3 uppercase hover:border-b-2 hover:border-[#777035] hover:text-[#777035]"
              to={"/contact"}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="block uppercase px-4 py-2 hover:border-[#777035] hover:text-[#777035]"
              to={"/investment"}
              onClick={() => {
                setIsOpen(false);
                setIsInfoOpen(false);
              }}
            >
              Pricing
            </Link>
          </li>
          <li className="relative flex flex-col items-center">
            <span
              className="p-3 uppercase cursor-pointer"
              onClick={() => setIsInfoOpen((prev) => !prev)}
            >
              Info
            </span>

            {isInfoOpen && (
              <div className="mt-2 w-64 uppercase text-zinc-500 bg-white py-4 text-center rounded-lg shadow-lg transition-all duration-200">
                <Link
                  className="block px-4 py-2  hover:border-b hover:border-[#777035] hover:text-[#777035]"
                  to={"/about"}
                  onClick={() => {
                    setIsOpen(false);
                    setIsInfoOpen(false);
                  }}
                >
                  About Riard
                </Link>
              </div>
            )}
          </li>

          {/* Mobile social icons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Link
              to={"https://www.instagram.com/riardbllaca.photography/?hl=en"}
              className="p-2 hover:text-[#777035]"
            >
              <FiInstagram width={28} height={28} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/riard-bllaca-514b7918a/"}
              className="p-2 hover:text-[#777035]"
            >
              <FiLinkedin width={28} height={28} />
            </Link>
            <a
              href="mailto:riardbllaca9@gmail.com"
              className="p-2 hover:text-[#777035]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTiktok />
            </a>
          </div>
        </ul>

        {/* ====== Desktop Menu ====== */}
        <ul className="lg:flex flex-1 items-center hidden text-sm">
          <li>
            <Link
              className="p-5 uppercase hover:border-b-2 hover:text-[#777035]"
              to={"/portfolio"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="p-5 uppercase hover:border-b-2 hover:text-[#777035] hover:border-[#777035]"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="p-5 uppercase  hover:border-b hover:text-[#777035] hover:border-[#777035 "
              to={"/investment"}
            >
              Pricing
            </Link>
          </li>
          <li className="relative group">
            <span className="p-5 uppercase cursor-pointer hover:text-amber-800/70">
              Info
            </span>
            <div className="absolute left-0 w-70 uppercase text-zinc-500 bg-white py-4 text-center rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                className="px-4 py-2 hover:text-amber-800 hover:border-b border-amber-800 block"
                to={"/about"}
              >
                About Riard
              </Link>
            </div>
          </li>
        </ul>

        {/* Center logo */}
        <div className="flex gap-4 items-center  lg:flex-col relative">
          <span className="lg:text-4xl sm:text-3xl text-lg  flex flex-1 sm:text-nowrap text-center justify-center font-serif">
            <Link
              to={"/"}
              className={`font-light ${
                isScrolled ? " text-white " : " text-black "
              }`}
            >
              Riard Bllaca Photography
            </Link>
          </span>
          {!portfolioPage && (
            <div className="flex relative gap-4 justify-center items-center z-70 text-black">
              <button
                className={`bg-white p-2 rounded-2xl cursor-pointer`}
                onClick={() => setIsLangShown((prev) => !prev)}
              >
                <FcGlobe />
              </button>
              {isLangShown && (
                <div className="w-full flex flex-col absolute top-10 gap-2 bg-zinc-50 rounded-xl py-2 min-w-48 px-2">
                  <div
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setIsLangShown(false);
                    }}
                    className={`flex items-center justify-between mx-auto max-w-22 w-full cursor-pointer ${
                      currentLang === "en" &&
                      "bg-white shadow-md ring-1 ring-zinc-200 scale-[1.02] hover:bg-zinc-100 hover:shadow-sm "
                    }`}
                  >
                    <button className={`mr-2  cursor-pointer `}>EN </button>
                    <img
                      src="/england-flag.png"
                      className="min-w-8 max-w-8 w-full rounded-xl"
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      i18n.changeLanguage("de");
                      setIsLangShown(false);
                    }}
                    className={`flex items-center justify-between mx-auto max-w-22  w-full cursor-pointer ${
                      currentLang === "de" &&
                      "bg-white shadow-md ring-1 ring-zinc-200 scale-[1.02] hover:bg-zinc-100 hover:shadow-sm"
                    }`}
                  >
                    <button className={`mr-2  cursor-pointer `}>DE </button>
                    <img
                      src="/german-flag.png"
                      className="min-w-8 max-w-8   h-full w-full rounded-xl"
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => {
                      i18n.changeLanguage("sq");
                      setIsLangShown(false);
                    }}
                    className={`flex items-center justify-between mx-auto max-w-22  w-full cursor-pointer ${
                      currentLang === "sq" &&
                      "bg-white shadow-md ring-1 ring-zinc-200 scale-[1.02] hover:bg-zinc-100 hover:shadow-sm"
                    }`}
                  >
                    <button className={`mr-2 text-black cursor-pointer `}>
                      AL
                    </button>
                    <img
                      src="/albania-flag.png"
                      className="min-w-8 max-w-8  w-full rounded-xl"
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop icons */}
        <div className="lg:flex hidden  flex-1 justify-end items-center ">
          <Link
            to={"https://www.instagram.com/riardbllaca.photography/?hl=en"}
            className="px-5"
          >
            <FiInstagram width={34} height={34} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/riard-bllaca-514b7918a/"}
            className="px-5"
          >
            <FiLinkedin width={34} height={34} />
          </Link>
          <Link
            className="px-5"
            to={"https://www.tiktok.com/@riardbllaca.photographer"}
          >
            <BsTiktok />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
