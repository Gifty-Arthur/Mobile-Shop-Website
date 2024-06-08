import React from "react";
import { Link } from "react-router-dom";

//images
import iphone14 from "../../../assets/Arrivals/iphone14.png";
import pocket from "../../../assets/Arrivals/pocket.png";
import apple from "../../../assets/Arrivals/apple.png";
import airpods from "../../../assets/Arrivals/airpods.png";
import GPS from "../../../assets/Arrivals/GPS.png";
import galaxy from "../../../assets/Arrivals/galaxy.png";
import folds from "../../../assets/Arrivals/folds.png";
import buds from "../../../assets/Arrivals/buds.png";

//icon
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const NewArrival = () => {
  return (
    <div className="container">
      <div className="">
        {/* text */}
        <div className="flex gap-8 mt-8">
          <h2 className="md:text-[18px] font-bold underline cursor-pointer">
            New Arrival
          </h2>
          <h2 className="md:text-[18px]  text-[#8B8B8B]">Bestseller</h2>
          <h2 className="text-[18px] text-[#8B8B8B]">Featured Products</h2>
        </div>

        {/* images */}

        {/* iphone14 */}

        <div className="md:flex flex-col sm:flex-col">
          <div className="md:flex flex-row  sm:flex-row gap-12">
            <div className="flex md:gap-12 gap-8">
              <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="mt-8" src={iphone14} alt="" />
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

              {/* Pocket */}
              <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="mt-8" src={pocket} alt="" />
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
            <div className="flex flex-row gap-8 md:gap-12 ">
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

              {/* airpods */}
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
                  <button className="md:w-[184px] h-[48px] w-[139px] mt-2 md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* 2nd Images */}

          <div className="md:flex flex-wrapsm:flex-row gap-12">
            <div className="flex md:gap-12 gap-8">
              {/* galaxy */}
              <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="mt-8" src={galaxy} alt="" />
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

              {/* folds */}
              <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <FaHeart size={32} className="mt-4 text-red-500" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="mt-8" src={folds} alt="" />
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

            {/* Buds*/}
            <div className="flex flex-row gap-8 md:gap-12 ">
              <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="mt-8" src={buds} alt="" />
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

              {/* apple */}
              <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="mt-8" src={apple} alt="" />
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
    </div>
  );
};

export default NewArrival;
