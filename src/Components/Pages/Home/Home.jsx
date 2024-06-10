import React from "react";
import { Link } from "react-router-dom";
import iphone from "../../../assets/Images/iphone.png";

function Home() {
  return (
    <div className="bg-head w-full h-auto md:flex md:justify-center">
      <div className="container md:flex md:flex-row md:items-center">
        <div className=" md:mt-0 md:order-1">
          <h3 className="text-white text-xl md:text-[25px] font-semibold opacity-[50%]  ml-32 md:ml-0">
            Pro.Beyond.
          </h3>
          <div className="md:flex md:flex-wrap">
            <h1 className="text-white text-6xl md:text-[4.5rem] ml-10 md:ml-0 mt-8 text-center font-light">
              IPhone 14
            </h1>
            <p className="text-white text-[4.5rem] font-semibold font-roboto text-center md:ml-2 mt-2">
              Pro
            </p>
          </div>
          <p className="text-[#909090] text-[19px] font-medium opacity ml-10 md:ml-0">
            Created to change everything for the better. For everyone
          </p>
          <Link to="/shop">
            <button className="w-[184px] h-[56px] mt-6 ml-20 md:ml-0 rounded-md border border-1 text-white hover:bg-violet-500">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="md:ml-20 md:order-2">
          <img
            className="w-80 h-[289px] ml-8 md:w-[406px] md:h-[632px] md:ml-10"
            src={iphone}
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
