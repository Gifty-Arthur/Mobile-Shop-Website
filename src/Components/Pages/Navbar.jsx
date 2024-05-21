import React from "react";
import { useState } from "react";

//Images
import Logo from "../../assets/Images/Logo.png";
// Icons
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoClose, IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Blogs", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className="shadow-md w-full h-[88px] fixed top-0 left-0 bg-white">
      <div className="flex items-center justify-between py-8 px-4 md:px-20">
        <div className="flex items-center flex-wrap gap-14">
          {/* image */}
          <img src={Logo} alt="Logo" className="mr-4" />
          <div className="relative">
            <form action="" className="relative">
              {/* icon */}
              <span className=" absolute inset-y-0 left-0 pl-3 flex items-center ">
                <CiSearch className="w-[24px] h-[24px] text-secondary" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className=" w-[372px] border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ring-blue-500"
              />
            </form>
          </div>
          <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <button onClick={toggleNavbar}>
              {open ? <IoMenu /> : <IoClose />}
            </button>
          </div>
          {/* Navbar */}
          <ul
            className={`ml-4 font-roboto font-medium md:flex md:items-center md:pb-0 pb-12 absolute md:static hidden: bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }md:opacity-0`}
          >
            {Links.map((link) => (
              <li Key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:flex hidden flex-wrap gap-6 mr-14  pl-10">
          <FaRegHeart className="w-[32px] h-[32px] hover:text-red-400 " />
          <IoCartOutline className="w-[32px] h-[32px] hover:text-red-400" />
          <CgProfile className="w-[32px] h-[32px] hover:text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
