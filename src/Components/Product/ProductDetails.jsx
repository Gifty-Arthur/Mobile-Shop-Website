import { urls } from "../../Helpers/routes";
import { Link } from "react-router-dom";

//images
import iphone4 from "../../assets/ProductPage/iphone4.png";
import p1 from "../../assets/ProductDetails/p1.png";
import p2 from "../../assets/ProductDetails/p2.png";
import p3 from "../../assets/ProductDetails/p3.png";
import p5 from "../../assets/ProductDetails/p5.png";

//icons
import {
  IoIosArrowForward,
  // IoIosArrowUp,
  // IoIosCheckbox,
  // IoIosArrowDown,
  // IoIosArrowBack,
} from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { GoCpu } from "react-icons/go";
import { SiSecurityscorecard } from "react-icons/si";
import { CiCamera } from "react-icons/ci";
import { GiBattery75 } from "react-icons/gi";

const ProductDetails = () => {
  return (
    <div className="container mt-6">
      <div>
        <div>
          <div className="space-x-10 md:flex hidden sm:flex lg:flex">
            <div className="">
              <Link to={urls.home}>
                <div className="flex space-x-10">
                  <div className="flex gap-2">
                    <h2 className="text-md text-[#A4A4A4] font-medium">Home</h2>
                    <IoIosArrowForward className="text-[#A4A4A4] mt-1" />
                  </div>
                  <div className="flex gap-2">
                    <h2 className="text-md text-[#A4A4A4] font-medium">
                      Catalog
                    </h2>
                    <IoIosArrowForward className="text-[#A4A4A4] mt-1" />
                  </div>
                  {/* Apple */}
                  <div className="flex gap-2">
                    <h2 className="text-md text-[#A4A4A4] font-medium">
                      Apple
                    </h2>
                    <IoIosArrowForward className="text-[#A4A4A4] mt-1" />
                  </div>
                </div>
              </Link>
            </div>
            {/* Smart phone */}
            <Link to={urls.productPage}>
              <div className="flex flex-row gap-2">
                <h2 className="text-md text-[#A4A4A4] font-medium">
                  Smartphones
                </h2>
                <IoIosArrowForward className="text-[#A4A4A4] mt-1" />
              </div>
            </Link>

            <Link to={urls.productdetails}>
              <div className="flex">
                <h2 className="text-md text-black font-medium">
                  iPhone 14 pro Max
                </h2>
              </div>
            </Link>
          </div>

          {/* image */}

          <div className="md:flex md:flex-row md:gap-4 md:mt-20 ">
            {/* mobile image */}
            <div className="flex items-center justify-center sm:hidden ml-10 md:hidden lg:hidden">
              <img className="w-auto h-auto" src={iphone4} alt="" />
            </div>
            <div className=" flex flex-row gap-8 md:gap-2 md:mt-28 md:flex md:flex-col sm:flex-col mt-10 items-center justify-center ">
              <img className="w-auto md:h-[93px] h-[66px]" src={p1} alt="" />
              <img
                className="md:mt-4 w-auto md:h-auto h-[66px]"
                src={p5}
                alt=""
              />
              <img
                className="md:mt-4 w-auto md:h-auto h-[66px]"
                src={p3}
                alt=""
              />
              <img
                className="md:mt-4 w-auto md:h-auto h-[66px]"
                src={p2}
                alt=""
              />
            </div>
            {/* main iphone */}
            <div className="flex">
              <img
                className=" md:mt-24  md:flex hidden sm:flex lg:flex"
                src={iphone4}
                alt=""
              />
              <div>
                <h1 className="font-bold text-[40px] ">
                  Apple iPhone 14 Pro Max
                </h1>
                <p className="font-medium text-[32px]">
                  $1399{" "}
                  <span className="text-[24px] text-calm underline">$1499</span>
                </p>
                <div className="flex flex-row gap-4 mt-6">
                  <p className="text-sm mt-1">Select color:</p>
                  <div className="rounded-full bg-black w-[32px] h-[32px]"></div>
                  <div className="rounded-full bg-[#781dbc] w-[32px] h-[32px]"></div>
                  <div className="rounded-full bg-[#e10000] w-[32px] h-[32px]"></div>
                  <div className="rounded-full bg-[#e1b000] w-[32px] h-[32px]"></div>
                  <div className="rounded-full bg-[#e8e8e8] w-[32px] h-[32px]"></div>
                </div>
                {/* 12g */}
                <div className="mt-6 flex gap-4">
                  <div className="w-[122px] h-[48px] rounded-md border border-1 flex items-center justify-center border-[#D5D5D5]">
                    <p className="text-[#D5D5D5]">128GB</p>
                  </div>
                  <div className="w-[122px] h-[48px] rounded-md border border-1 flex items-center justify-center border-[#D5D5D5]">
                    <p className="text-[#6F6F6F]">256GB</p>
                  </div>
                  <div className="w-[122px] h-[48px] rounded-md border border-1 flex items-center justify-center border-[#D5D5D5]">
                    <p className="text-[#6F6F6F]">512GB</p>
                  </div>
                  <div className="w-[122px] h-[48px] rounded-md border flex items-center justify-center border-black">
                    <p className="text-black font-medium ">1TB</p>
                  </div>
                </div>

                {/* screen size */}
                <div className="mt-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-[168px] h-[64px] rounded-md  bg-[#F4F4F4] flex items-center justify-center ">
                        <div className="mr-6">
                          <FaMobileScreen size={24} />
                        </div>
                        <div className="mr-2">
                          <p className="text-[#CACACA]  text-md ">
                            Screen size
                          </p>
                          <p>6.7</p>
                        </div>
                      </div>
                      {/* Apple A16 */}
                      <div className="w-[168px] h-[64px] rounded-md  bg-[#F4F4F4] flex items-center justify-center ">
                        <div className="mr-6">
                          <GoCpu size={24} />
                        </div>
                        <div className="mr-2">
                          <p className="text-[#CACACA]    text-sm ">CPU</p>
                          <p className="text-sm">Apple A16</p>
                          <p className="text-sm">Bionic</p>
                        </div>
                      </div>
                      {/* cores */}
                      <div className="w-[168px] h-[64px] rounded-md  bg-[#F4F4F4] flex items-center justify-center ">
                        <div className="mr-6">
                          <SiSecurityscorecard size={24} />
                        </div>
                        <div className="mr-2">
                          <p className="text-[#CACACA]  text-sm ">Number of</p>
                          <p className="text-sm">Cores</p>
                          <p className="text-sm">6</p>
                        </div>
                      </div>
                    </div>
                    {/* 2ND  */}
                    <div className="flex gap-4">
                      <div className="w-[168px] h-[64px] rounded-md  bg-[#F4F4F4] flex items-center justify-center ">
                        <div className="mr-6">
                          <CiCamera size={24} />
                        </div>
                        <div className="mr-2">
                          <p className="text-[#CACACA]  text-md ">
                            Main camera
                          </p>
                          <p>48-12-12MP</p>
                        </div>
                      </div>

                      {/* Font-camera */}
                      <div className="w-[168px] h-[64px] rounded-md  bg-[#F4F4F4] flex items-center justify-center ">
                        <div className="mr-6">
                          <CiCamera size={24} />
                        </div>
                        <div className="mr-2">
                          <p className="text-[#CACACA]  text-md ">
                            Main camera
                          </p>
                          <p>48-12-12MP</p>
                        </div>
                      </div>
                      {/* battery */}
                      <div className="w-[168px] h-[64px] rounded-md  bg-[#F4F4F4] flex items-center justify-center ">
                        <div className="mr-6">
                          <GiBattery75 size={24} />
                        </div>
                        <div className="mr-2">
                          <p className="text-[#CACACA]  text-md ">
                            Battery capacity
                          </p>
                          <p>4323 mAh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Add */}
                  <div className="mt-6">
                    <p className="text-[#6C6C6C]">
                      Enhanced capabilities thanks toan enlarged display of 6.7
                      inchesand work
                      <br /> without rechargingthroughout the day. Incredible
                      photosas in weak, yesand <br />, bright lightusing the new
                      systemwith two cameras more...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
