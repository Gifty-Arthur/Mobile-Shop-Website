import React, { useState } from "react";
import logo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";

// icons
import { CiHeart, CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  // so when user clicks the hamburger button, it goes from false(!nav) to true(nav)
  const handleClick = () => setNav(!nav);

  return (
    <nav className="bg-white md:h-[89px] h-auto flex justify-between items-center nav relative">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-10 md:mt-0 p-5">
        <img className="md:ml-2 mt-2" src={logo} alt="Logo" />

        <form action="" className="relative mt-4 w-full md:w-auto">
          {/* icon */}
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <CiSearch className="w-5 h-5 md:w-[24px] md:h-[24px] text-secondary" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-[572px] h-10 md:h-[56px] bg-stroke border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>

      <ul className="hidden md:flex gap-6 mr-36 mt-6">
        <Link to="/">
          <li className="text-xl font-semibold font-roboto hover:text-purp cursor-pointer">
            Home
          </li>
        </Link>

        <Link to="/">
          <li className="text-xl font-medium font-roboto hover:text-purp">
            About
          </li>
        </Link>

        <Link to="/">
          <li className="text-xl font-medium font-roboto hover:text-purp">
            Blog
          </li>
        </Link>

        <Link to="/">
          <li className="text-xl font-medium font-roboto hover:text-purp">
            Contact
          </li>
        </Link>
      </ul>
      <div className="hidden md:block">
        <div className="flex gap-7 mt-6">
          <Link to="/">
            <li className="flex items-center text-xl font-medium font-roboto hover:text-purp">
              <AiOutlineShoppingCart size={40} />
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center mr-10 text-xl font-medium font-roboto hover:text-purp">
              <CgProfile size={40} />
            </li>
          </Link>
        </div>
      </div>

      <div className="md:hidden z-10 " onClick={handleClick}>
        {nav ? (
          <FaTimes className="text-white size-10 mt-14" />
        ) : (
          <RxHamburgerMenu className="text-black size-10 mt-14 mr-2" />
        )}
      </div>

      {/* Mobile View */}

      <ul
        className={`${
          nav
            ? "opacity-100 transform translate-x-0"
            : "opacity-0 transform -translate-y-full"
        } transition-transform duration-300 absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to="/">
          <li className="text-xl text-white font-medium font-roboto hover:text-purp">
            Home
          </li>
        </Link>

        <Link to="/">
          <li className="text-xl text-white font-medium font-roboto hover:text-purp">
            About
          </li>
        </Link>

        <Link to="/">
          <li className="text-xl text-white font-medium font-roboto hover:text-purp">
            Blog
          </li>
        </Link>

        <Link to="/">
          <li className="text-xl text-white font-medium font-roboto hover:text-purp">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
