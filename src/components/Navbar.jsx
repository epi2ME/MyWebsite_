import logo from "../assets/myLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="pl-6 mx-2 w-20" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/chris-jerald-maralit-633b22205/"><FaLinkedin /></a>
          <a href="https://github.com/cj-09"><FaGithub /></a>
          <a href="https://www.facebook.com/profile.php?id=100010223647999"><FaFacebook /></a>
          <a href="https://www.instagram.com/j_not.g/"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
