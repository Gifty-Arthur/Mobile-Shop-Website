import React from "react";
import { Link } from "react-router-dom";
import iphone from "../../../assets/Images/iphone.png";

function Home() {
  return (
    <div className="bg-head h-auto ">
      <div className="container ">
        <div className=" md:my-8 flex flex-col md:flex-row-reverse md:items-center justify-between ">
          <img className=" md:[632px] sm:flex hidden " src={iphone} alt="" />
          <div className="md:w-1/2 mt-10 ">
            <div className="ml-20 ">
              <h2 className="text-white opacity-50 text-md ml-12 md:ml-0 ">
                Pro.Beyond
              </h2>
              <h1 className="text-white text-5xl md:text-6xl font-thin  ">
                IPhone 14{" "}
                <span className="font-medium flex ml-12 md:ml-0 md:inline">
                  Pro
                </span>
              </h1>
              <p className="text-white opacity-50 mt-2">
                Created to change everything for the better. For everyone
              </p>
            </div>
            <Link to="/shop">
              <button className="w-[184px] h-[56px] mt-6 md:ml-20 ml-20  rounded-md border border-1 text-white hover:bg-violet-500">
                Shop Now
              </button>
            </Link>{" "}
          </div>
        </div>
        <div>
          <img
            className=" flex sm:hidden h-[289px] w-[343px]"
            src={iphone}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
