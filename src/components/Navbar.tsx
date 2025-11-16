import { useEffect, useState } from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

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
      className={`px-12 bg-white pt-20 top-0 transition-all duration-300 fixed left-0 z-50 pb-5 w-full ${
        isScrolled
          ? "md:bg-white/80 md:backdrop-blur-sm md:shadow-md"
          : "md:bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        {/* Hamburger icon */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-2xl z-50 cursor-pointer md:hidden"
        >
          <GiHamburgerMenu />
        </button>

        {/* ====== Mobile Full-Screen Menu ====== */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-white  flex flex-col items-center justify-center gap-8 text-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li>
            <Link
              className="p-3 uppercase hover:border-b-2 hover:border-amber-800 hover:text-amber-800"
              to={"/portfolio"}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="p-3 uppercase hover:border-b-2 hover:border-amber-800 hover:text-amber-800"
              to={"/contact"}
              onClick={() => setIsOpen(false)}
            >
              Contact
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
                  className="block px-4 py-2 hover:text-amber-800 hover:border-b border-amber-800"
                  to={"/about"}
                  onClick={() => {
                    setIsOpen(false);
                    setIsInfoOpen(false);
                  }}
                >
                  About Jordan
                </Link>
                <Link
                  className="block px-4 py-2 hover:text-amber-800 hover:border-b border-amber-800"
                  to={"/investment"}
                  onClick={() => {
                    setIsOpen(false);
                    setIsInfoOpen(false);
                  }}
                >
                  Investment
                </Link>
              </div>
            )}
          </li>

          {/* Mobile social icons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Link
              to={"https://www.instagram.com/riardbllaca.photography/?hl=en"}
              className="p-2"
            >
              <FiInstagram width={28} height={28} />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/riard-bllaca-514b7918a/"}
              className="p-2"
            >
              <FiLinkedin width={28} height={28} />
            </Link>
            <a
              href="mailto:riardbllaca9@gmail.com"
              className="p-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail width={28} height={28} />
            </a>
          </div>
        </ul>

        {/* ====== Desktop Menu ====== */}
        <ul className="md:flex flex-1 items-center hidden text-sm">
          <li>
            <Link
              className="p-5 uppercase hover:border-b-2 hover:text-amber-800"
              to={"/portfolio"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="p-5 uppercase hover:border-b-2 hover:border-amber-800 hover:text-amber-800"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li className="relative group">
            <span className="p-5 uppercase cursor-pointer">Info</span>
            <div className="absolute left-0 w-70 uppercase text-zinc-500 bg-white py-4 text-center rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                className="px-4 py-2 hover:text-amber-800 hover:border-b border-amber-800 block"
                to={"/about"}
              >
                About Jordan
              </Link>
              <Link
                className="px-4 py-2 hover:text-amber-800 hover:border-b border-amber-800 block"
                to={"/investment"}
              >
                Investment
              </Link>
            </div>
          </li>
        </ul>

        {/* Center logo */}
        <span className="md:text-4xl  flex justify-center flex-1 font-serif">
          <Link to={"/"}>Riard Bllaca Photography</Link>
        </span>

        {/* Desktop icons */}
        <div className="md:flex hidden flex-1 justify-end items-center">
          <Link
            to={"https://www.instagram.com/riardbllaca.photography/?hl=en"}
            className="p-2"
          >
            <FiInstagram width={34} height={34} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/riard-bllaca-514b7918a/"}
            className="p-2"
          >
            <FiLinkedin width={34} height={34} />
          </Link>
          <a
            href="mailto:riardbllaca9@gmail.com"
            className="p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail width={34} height={34} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
