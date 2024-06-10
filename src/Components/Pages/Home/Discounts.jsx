import React from "react";
import { Link } from "react-router-dom";

//images
import GPS from "../../../assets/Arrivals/GPS.png";
import airpods from "../../../assets/Arrivals/airpods.png";
import di1 from "../../../assets/Discount/di1.png";
import di2 from "../../../assets/Discount/di2.png";

//icons
import { CiHeart } from "react-icons/ci";

const Discounts = () => {
  return (
    <div className="">
      <div className="container">
        <div>
          <h2 className="text-2xl font-medium ">Discount up to -50%</h2>
        </div>

        {/* img */}
        <div className="md:flex flex-row  sm:flex-row gap-4">
          <div className="flex md:gap-4 gap-8">
            <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
              <div className="text-calm flex items-center justify-end mr-4">
                <CiHeart size={32} className="mt-4" />
              </div>
              <div className="flex items-center justify-center ">
                <img className="mt-8" src={di1} alt="" />
              </div>
              <p className="text-[16px] font-medium text-center md:mt-4">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="text-[24px] font-medium text-center">$900</p>
              <Link to="/shop">
                <button className="md:w-[184px] h-[48px] w-[139px] mt-2 md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                  Buy Now
                </button>
              </Link>
            </div>

            {/* Airpods */}
            <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
              <div className="text-calm flex items-center justify-end mr-4">
                <CiHeart size={32} className="mt-4" />
              </div>
              <div className="flex items-center justify-center ">
                <img className="mt-8" src={airpods} alt="" />
              </div>
              <p className="text-[16px] font-medium text-center md:mt-4">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="text-[24px] font-medium text-center">$900</p>
              <Link to="/shop">
                <button className="md:w-[184px] h-[48px] w-[139px] mt-2 ml-6 md:ml-10 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>

          {/* Apple watch */}
          <div className="flex flex-row gap-8 md:gap-4s ">
            <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
              <div className="text-calm flex items-center justify-end mr-4">
                <CiHeart size={32} className="mt-4" />
              </div>
              <div className="flex items-center justify-center ">
                <img className="mt-8" src={GPS} alt="" />
              </div>
              <p className="text-[16px] font-medium text-center md:mt-4">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="text-[24px] font-medium text-center">$900</p>
              <Link to="/shop">
                <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                  Buy Now
                </button>
              </Link>
            </div>

            {/* Discount2*/}
            <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
              <div className="text-calm flex items-center justify-end mr-4">
                <CiHeart size={32} className="mt-4" />
              </div>
              <div className="flex items-center justify-center ">
                <img className="mt-8" src={di2} alt="" />
              </div>
              <p className="text-[16px] font-medium text-center md:mt-4">
                Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
              </p>
              <p className="text-[24px] font-medium text-center">$900</p>
              <Link to="/shop">
                <button className="md:w-[184px] h-[48px] w-[139px] mt-2 md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
