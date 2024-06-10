import React from "react";
import { Link } from "react-router-dom";

//images
import Sum1 from "../../../assets/Summer/Sum1.png";
import Sum2 from "../../../assets/Summer/Sum2.png";
import tab2 from "../../../assets/Summer/tab2.png";
import tab from "../../../assets/Summer/tab.png";

//mobile view imgaes
import msum1 from "../../../assets/Summer/msum1.png";
import msum2 from "../../../assets/Summer/msum2.png";
import msum3 from "../../../assets/Summer/msum3.png";
import msum4 from "../../../assets/Summer/msum4.png";

const Summer = () => {
  return (
    <div className="">
      <div className="md:flex hidden sm:flex lg:flex">
        <div className=" w-screen relative bg-gradient-to-r from-[#2E2E2E] from-10% via-[#1A1A1A] via-30% to-[#101010] to-90%">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col ml-6">
            <h1 className="text-5xl text-white  ">
              Big Summer <span className="text-5xl font-medium">Sale</span>
            </h1>
            <p className="text-calm text-md mt-2 ml-10">
              Commodo fames vitae vitae leo mauris inconsequat.
            </p>
            <Link to="/shop">
              <button className="w-[184px] h-[56px] rounded-md border  border-1 border-white text-white hover:bg-violet-500 mt-8">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="md:flex items-start justify-between lg:items-start lg:justify-between">
            <div className="mt-12">
              <img className="" src={tab} alt="" />
              <img className="mt-2" src={tab2} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-end w-full">
                <img className="-mt-4" src={Sum2} alt="" />
              </div>
              <img className="mt-8 " src={Sum1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex md:hidden sm:hidden mt-4">
        <div className=" w-screen  bg-gradient-to-r from-[#2E2E2E] from-10% via-[#1A1A1A] via-30% to-[#101010] to-90%">
          <div className="relative  h-[500px]">
            <div className="absolute top-0 left-0">
              <img className="w-[48px] h-[141px]" src={msum4} alt="" />
            </div>
            <div className="absolute bottom-0 left-0">
              <img src={msum2} alt="" />
            </div>
            <div className="absolute top-0 right-0">
              <img src={msum3} alt="" />
            </div>
            <div className="absolute bottom-0 right-0">
              <img src={msum1} alt="" />
            </div>
            <div className="flex items-center justify-center flex-col ">
              <h1 className="text-white text-3xl mt-40">Big Summer </h1>
              <h1 className="text-white text-3xl font-bold">Sale</h1>
              <p className="text-calm text-md mt-2 text-center">
                Commodo fames vitae vitae leo mauris inconsequat.
              </p>
              <Link to="/shop">
                <button className="w-[184px] h-[56px] rounded-md border  border-1 border-white text-white hover:bg-violet-500 mt-10">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summer;
