import React from "react";
import { Link } from "react-router-dom";

//images
import b3 from "../../../assets/Banner/b3.png";
import b2 from "../../../assets/Banner/b2.png";
import b1 from "../../../assets/Banner/b1.png";
import mbanner2 from "../../../assets/Images/mbanner2.png";

const Banner = () => {
  return (
    <div>
      <div className="mt-12">
        <div className="sm:flex hidden">
          <div className="md:flex flex-row ">
            <div className="w-[360px] h-[640px] hover:scale-95 transtion-all duration-300 cursor-pointer ">
              <img src={b3} alt="" />
              <div className="md:ml-10 md:-mt-10">
                <h1 className="text-[33px] font-light font-roboto">
                  Popular Products
                </h1>
                <p className="text-calm ">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4  rounded-md border-black border-2 text- hoveblackr:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[360px] h-[640px] bg-[#F9F9F9] hover:scale-95 transtion-all duration-300 cursor-pointer ">
              <img src={b2} alt="" />
              <div className="md:ml-10 mt-8">
                <h1 className="text-[33px] font-light font-roboto">Ipad Pro</h1>
                <p className="text-calm ">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4  rounded-md border-black border-2 text-black hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* b1 */}
            <div className="w-[360px] h-[640px] bg-[#EAEAEA] hover:scale-95 transtion-all duration-300 cursor-pointer ">
              <img src={b1} alt="" />
              <div className="md:ml-10 mt-8">
                <h1 className="text-[33px] font-light font-roboto">
                  Samsung Galaxy
                </h1>
                <p className="text-calm ">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4  rounded-md border-black border-2 text-black hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* mbanner2 */}
            <div className="w-[360px] h-[640px] bg-[#2C2C2C] hover:scale-95 transtion-all duration-300 cursor-pointer ">
              <div className="">
                <img className="mt-20" src={mbanner2} alt="" />
              </div>
              <div className="md:ml-10 md:mt-28 ">
                <h1 className="text-[33px] text-white font-light font-roboto">
                  Macbook Pro
                </h1>
                <p className="text-calm ">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4  rounded-md border-white border-2 text-white hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* mobile devicess */}
      </div>
    </div>
  );
};

export default Banner;
