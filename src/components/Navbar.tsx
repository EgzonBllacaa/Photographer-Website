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
    // <header className=" top-0  w-full  px-12 pt-20 pb-5 bg-transparent"></header>
    <header
      className={`px-12 pt-20 top-0 transition-all duration-300 fixed left-0 z-50 pb-5  w-full ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      } `}
    >
      <nav className="flex justify-between items-center ">
        <ul className="flex flex-1 items-center text-sm">
          <li>
            <Link className="p-5 uppercase" to={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="p-5 uppercase" to={"/portfolio"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="p-5 uppercase" to={"/portfolio"}>
              Info
            </Link>
          </li>
        </ul>
        <span className="text-4xl flex justify-center flex-1 font-serif">
          <Link to={"/"}>JORDAN VOTH</Link>
        </span>
        <div className="flex flex-1 justify-end items-center">
          <Link to={"www.instagram.com"} className="p-2">
            <FiInstagram width={34} height={34} />
          </Link>
          <Link to={"www.linkedin.com"} className="p-2">
            <FiLinkedin width={34} height={34} />
          </Link>
          <Link to={"www.gmail.com"} className="p-2">
            <SiGmail width={34} height={34} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
