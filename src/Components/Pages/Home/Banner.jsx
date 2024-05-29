import React from "react";
import banner1 from "../../assets/Images/banner1.png";

const Banner = () => {
  return (
    <div className="h-[32rem] flex flex-col justify-center">
      <div className="container">
        <div className="bg-white w-[45rem] h-[20rem] ">
          <div>
            <img src={banner1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
