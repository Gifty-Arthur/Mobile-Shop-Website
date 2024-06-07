import React from "react";
import { Link } from "react-router-dom";

// images
import banner1 from "../../../assets/Images/banner1.png";
import banner3 from "../../../assets/Images/banner3.png";
import banner4 from "../../../assets/Images/banner4.png";
import banner2 from "../../../assets/Images/banner2.png";

//images for mobile device
import mbanner3 from "../../../assets/Images/mbanner3.png";
import mbanner1 from "../../../assets/Images/mbanner1.png";
import mbanner4 from "../../../assets/Images/mbanner4.png";
import mbanner2 from "../../../assets/Images/mbanner2.png";

const Category = () => {
  return (
    <div className="">
      <div className="">
        <div className=" flex flex-row w-full">
          <div className="   md:flex-col flex flex-col-reverse">
            <div className="md:flex">
              {/* img mobile */}
              <div className="flex items-center justify-center sm:hidden">
                <img className="mt-2" src={mbanner1} alt="" />
              </div>
              {/* img md */}
              <img className="hidden sm:flex" src={banner1} alt="" />
              <div className="md:mt-24 ml-8 md:ml-0">
                <h1 className="font-medium text-3xl sm:text-4xl text-center md:inline mt-2">
                  Playstation 5
                </h1>
                <p className="text-md font-medium text-calm mt-2 ">
                  Incredibly powerful CPUs, GPUs, and an SSD with
                  <br />
                  integrated I/O will redefine your PlayStation <br />
                  experience.
                </p>
              </div>
            </div>

            {/* headphone */}
            <div className="md:flex ">
              <div className="bg-picker  sm:flex md:basis-1/2 ">
                {/* img mobile */}
                <div className="flex items-center justify-center sm:hidden">
                  <img className="" src={mbanner3} alt="" />
                </div>
                {/* img md */}
                <img className="hidden sm:flex" src={banner3} alt="" />

                <div className="md:w-3/5 mx-auto md:mt-10 ml-10">
                  <div className="flex flex-row md:flex-col gap-2">
                    <h1 className="font-light text-3xl text-[34px] sm:text-[29px]">
                      Apple <br className="hidden sm:block" /> AirPods
                    </h1>
                    <h1 className="font-medium font-roboto text-3xl sm:text-[29px]">
                      Max
                    </h1>
                  </div>

                  <p className="text-sm font-medium text-calm">
                    Computational audio Listen, it's powerful
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="bg-mid md:basis-1/2 ">
                <div className="md:flex ">
                  <div className="flex items-center justify-center sm:hidden">
                    <img className="mt-2" src={mbanner4} alt="" />
                  </div>
                  {/* img md */}
                  <img className="hidden sm:flex" src={banner4} alt="" />
                  <div className="md:w-3/5 mx-auto md:mt-10 ml-8 md:ml-10">
                    <div className="flex flex-row md:flex-col gap-2 ">
                      <h1 className="font-light text-3xl text-[34px] ml-10  text-white sm:text-[29px]">
                        Apple Vision
                      </h1>
                      <h1 className="font-medium font-roboto md:ml-10 text-3xl text-white sm:text-[29px]">
                        Pro
                      </h1>
                    </div>
                    <p className="text-md font-medium text-calm mt-2">
                      An immersive way to experience entertainment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* laptop */}
          <div className="bg-picker  basis-1/2  justify-between items-center sm:flex hidden">
            <div className="ml-10">
              <h1 className="text-[64px] font-thin">
                Macbook <span className="font-medium">Air</span>
              </h1>
              <p className="text-[14px] text-calm">
                The new 15‑inch MacBook Air makes room for more of <br />
                what you love with a spacious Liquid Retina display.
              </p>
              <Link to="/shop">
                <button className="w-[184px] h-[56px] rounded-md border border-1 border-black text-black hover:bg-violet-500 mt-4">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="">
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-picker ">
          <div className="flex items-center justify-center">
            <img className="flex sm:hidden" src={mbanner2} alt="" />
          </div>

          <div className=" flex sm:hidden flex-col">
            <h1 className="text-4xl font-medium text-center">
              Macbook <span className="font-thin">Air</span>
            </h1>
            <p className="text-[14px] text-calm mt-2">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <Link to="/shop">
              <button className="w-[343px] h-[56px] rounded-md border ml-8 border-1 border-black text-black hover:bg-violet-500 mt-4">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
