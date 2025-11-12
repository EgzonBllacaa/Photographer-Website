import { FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="px-12 pt-20 pb-5">
      <nav className="flex justify-between items-center">
        <ul className="flex items-center">
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
        <span className="text-4xl font-serif">JORDAN VOTH</span>
        <div className="flex items-center">
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
