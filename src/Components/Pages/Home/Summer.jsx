import React from "react";
import { Link } from "react-router-dom";

//images
import Sum1 from "../../../assets/Summer/Sum1.png";
import Sum2 from "../../../assets/Summer/Sum2.png";
import tab2 from "../../../assets/Summer/tab2.png";
import tab from "../../../assets/Summer/tab.png";

const Summer = () => {
  return (
    <div className="container">
      <div className="md:flex hidden sm:flex lg:flex">
        <div className=" w-full relative bg-gradient-to-r from-[#2E2E2E] from-10% via-[#1A1A1A] via-30% to-[#101010] to-90%">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col ml-6">
            <h1 className="text-5xl text-white  ">
              Big Summer <span className="text-5xl font-medium">Sale</span>
            </h1>
            <p className="text-calm text-md mt-2">
              Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
            <Link to="/shop">
              <button className="w-[184px] h-[56px] rounded-md border  border-1 border-white text-white hover:bg-violet-500 mt-8">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="md:flex items-start justify-between sm:">
            <div className="mt-12">
              <img className="" src={tab} alt="" />
              <img className="mt-2" src={tab2} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-end w-full">
                <img className="" src={Sum2} alt="" />
              </div>
              <img className="" src={Sum1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summer;
