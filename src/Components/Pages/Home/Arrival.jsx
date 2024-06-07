import React from "react";

//images
import Camera from "../../../assets/Icons/Cameras.png";
import Computers from "../../../assets/Icons/Computers.png";
import Gaming from "../../../assets/Icons/Gaming.png";
import Head from "../../../assets/Icons/Head.png";
import Phones from "../../../assets/Icons/Phones.png";
import watch from "../../../assets/Icons/watch.png";

//icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Arrival = () => {
  return (
    <div>
      <div className="container mt-10 py-10">
        <div className="flex  items-center justify-between">
          <h1 className="md:text-3xl text-2xl font-medium">
            Browse By Category
          </h1>
          <div className="flex gap-2">
            <IoIosArrowBack size={32} />
            <IoIosArrowForward size={32} />
          </div>
        </div>

        {/* icons */}
        <div className="md:mt-14  md:flex gap-12 mt-8">
          {/* phones */}

          <div className="flex space-x-12 md:flex-row mt-8">
            <div
              className="bg-picker rounded-[15px] h-[128px] w-[160px] flex items-center justify-center cursor
               hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transitin-all duration-300 cursor-pointer"
            >
              <div className=" ">
                <img src={Phones} alt="" />
                <p className="text-center">Phones</p>
              </div>
            </div>
            {/* smart */}
            <div
              className="bg-picker rounded-[15px] h-[128px] w-[160px] cursor
               hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transitin-all duration-300 cursor-pointer"
            >
              <div className=" flex items-center justify-center flex-col mt-6 -ml-2">
                <img src={watch} alt="" />
                <p className="text-center">Smart Watches</p>
              </div>
            </div>
          </div>

          {/* Cameras */}
          <div className="flex space-x-12 md:flex-row mt-8">
            <div
              className="bg-picker rounded-[15px] h-[128px] w-[160px] flex items-center justify-center cursor
               hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transitin-all duration-300 cursor-pointer"
            >
              <div>
                <img src={Camera} alt="" />
                <p>Cameras</p>
              </div>
            </div>
            {/* Headphones */}
            <div
              className="bg-picker rounded-[15px] h-[128px] w-[160px] flex items-center justify-center cursor
               hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transitin-all duration-300 cursor-pointer"
            >
              <div>
                <img className="ml-4" src={Head} alt="" />
                <p>Headphones</p>
              </div>
            </div>
          </div>

          {/*Computers  */}
          <div className="flex space-x-12 md:flex-row mt-8">
            <div
              className="bg-picker rounded-[15px] h-[128px] w-[160px] flex items-center justify-center cursor
               hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transitin-all duration-300 cursor-pointer"
            >
              <div>
                <img className="ml-2" src={Computers} alt="" />
                <p>Computers</p>
              </div>
            </div>
            {/* Gaming */}
            <div
              className="bg-picker rounded-[15px] h-[128px] w-[160px] flex items-center justify-center cursor
               hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transitin-all duration-300 cursor-pointer"
            >
              <div>
                <img src={Gaming} alt="" />
                <p>Gaming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
