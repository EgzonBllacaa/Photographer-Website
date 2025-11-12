import { useEffect, useState } from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={`px-12 pt-20 top-0 transition-all duration-300 fixed left-0 z-50 pb-5  w-full ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      } `}
    >
      <nav className="flex justify-between items-center ">
        <ul className="flex flex-1 items-center text-sm">
          <li>
            <Link
              className="p-5 uppercase hover:border-b-2  hover:text-amber-800"
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

            {/* Dropdown box */}
            <div className="absolute left-0  w-70 uppercase text-zinc-500 bg-white py-4 text-center  rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                className=" px-4 py-2 transition-all duration-75 hover:text-amber-800 w-fit mx-auto hover:border-b "
                to={"/about"}
              >
                About Jordan
              </Link>
              <Link
                className="block px-4 py-2 transition-all duration-75 hover:text-amber-800 w-fit mx-auto hover:border-b border-amber-800"
                to={"/investment"}
              >
                Investment
              </Link>
            </div>
          </li>
        </ul>
        <span className="text-4xl flex justify-center flex-1 font-serif">
          <Link to={"/"}>JORDAN VOTH</Link>
        </span>
        <div className="flex flex-1 justify-end items-center">
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
