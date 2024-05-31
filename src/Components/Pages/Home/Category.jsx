import React from "react";
import { Link } from "react-router-dom";
// Mobile imgaes
import mbanner3 from "../../../assets/Images/mbanner3.png";
import mbanner4 from "../../../assets/Images/mbanner4.png";
import mbanner1 from "../../../assets/Images/mbanner1.png";
import mbanner2 from "../../../assets/Images/mbanner2.png";

//web images
import banner1 from "../../../assets/Images/banner1.png";

function Category() {
  return (
    <div className="w-full ">
      <div className="container">
        <div>
          {/* img1 */}
          <div className="md:flex flex-col-reverse">
            <div className="bg-white w-full  mt-10 ">
              <img className="w-[192px] ml-20 " src={mbanner3} alt="" />
              <div className="flex  flex-wrap gap-2 mt-8 ml-8">
                <h1 className="text-[34px] font-light ">Apple AirPods</h1>
                <h1 className="text-[34px] font-medium  ">Max</h1>
              </div>
              <p className="text-calm font-medium text-md ml-2">
                Computational a16pxudio. Listen, it's powerful
              </p>
            </div>
            {/* img2 */}
            <div className="bg-mid w-full h-96 ">
              <img className="ml-10 mt-10 w-[325px] " src={mbanner4} alt="" />
              <div className="flex  flex-wrap gap-2 mt-4 ml-14">
                <h1 className="text-[34px] font-light text-white ">
                  Apple Vision
                </h1>
                <h1 className="text-[34px] font-medium text-white ">Pro</h1>
              </div>
              <p className="text-calm font-medium text-md ml-2">
                An immersive way to experience entertainments
              </p>
            </div>
            {/* img3 */}
            <div className="bg-white w-full h-[424px] md:w-[720px] md:h-[328px] md:flex mt-6">
              <img
                className=" md:hidden md:ml-16 md:h-[360px] md:w-[343px]"
                src={mbanner1}
                alt=""
              />

              <div className="flex flex-wrap gap-2 mt-4 ml-14 md:flex-wrap">
                <h1 className="text-[34px] font-regular text-black ml-4 md:text-[49px]">
                  Playstation
                </h1>
                <h1 className="text-[34px] font-medium text-black md:text-[49px]">
                  5
                </h1>
              </div>
              <p className="text-calm font-medium text-md ml-2 center-text mt-2">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                <span className="centered-line">
                  will redefine your PlayStation experience.
                </span>
              </p>
            </div>
          </div>

          {/* img4 */}

          <div className="bg-picker h-[504px]">
            <img className="ml-8 w-[330px] " src={mbanner2} alt="" />
            <div className="flex  flex-wrap gap-2 mt-4 ml-14">
              <h1 className="text-[34px] font-medium text-black ml-4  ">
                Macbook
              </h1>
              <h1 className="text-[34px] font-light text-black ">Air</h1>
            </div>
            <p className="text-calm font-medium text-md ml-2 mt-2">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>

            <Link to="/shop">
              <button className="w-[343px] h-[56px] mt-8 ml-6  rounded-md border-black  border-2 text-black  hover:bg-violet-500 ">
                Shop Now
              </button>
            </Link>
          </div>

          {/* browse */}
        </div>
      </div>
    </div>
  );
}

export default Category;
