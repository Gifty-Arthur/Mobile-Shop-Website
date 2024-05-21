import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Images/animation.json";
import iphone from "../../assets/Images/iphone.png";

const Home = () => {
  return (
    <div className="bg-black w-full flex flex-col items-center justify-center  min-h-screen bg-center">
      <div className="container">
        <div className="flex flex-wrap gap-x-40">
          <div className=" flex flex-col items-start justify-center ">
            <h3 className="text-white text-[25px] font-semibold opacity-[50%]">
              Pro.Beyond.
            </h3>
            <div className="flex flex-wrap gap-10 ">
              <h1 className="text-white text-[96px] font-light ">IPhone 14 </h1>
              <p className="text-white text-[96px] font-roboto font-semibold">
                Pro
              </p>
            </div>
            <p className="text-white opacity-[50%] text-[19px] font-medium font-roboto">
              Created to change everything for the better. For everyone
            </p>
            <button className=" w-[185px] h-[56px] mt-10 rounded-md border border-1 text-white hover:bg-violet-500">
              Shop Now
            </button>
          </div>
          <div className="flex ">
            <img className="" src={iphone} alt="" />
            <Lottie
              animationData={animationData}
              className=" w-[300px] h-[640px] mt-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
