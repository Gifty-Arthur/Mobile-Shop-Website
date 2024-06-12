import { Link } from "react-router-dom";
import { urls } from "../../Helpers/routes";

// icons
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoIosCheckbox,
  IoIosArrowDown,
  IoIosArrowBack,
} from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

//Images

import iphon7 from "../../assets/ProductPage/iphone7.png";
import iphon8 from "../../assets/ProductPage/iphone8.png";
import iphon5 from "../../assets/ProductPage/iphone5.png";
import iphon2 from "../../assets/ProductPage/iphone2.png";
import iphon3 from "../../assets/ProductPage/iphone3.png";
import iphon4 from "../../assets/ProductPage/iphone4.png";

const ProductPage = () => {
  return (
    <div className="container ">
      <div className=" ">
        <div className="flex space-x-10">
          <Link to={urls.home}>
            <div className="flex space-x-10">
              <div className="flex gap-2">
                <h2 className="text-md text-[#A4A4A4] font-medium">Home</h2>
                <IoIosArrowForward className="text-[#A4A4A4] mt-2" />
              </div>
              <div className="flex gap-2">
                <h2 className="text-md text-[#A4A4A4] font-medium">Catalog</h2>
                <IoIosArrowForward className="text-[#A4A4A4] mt-2" />
              </div>
            </div>
          </Link>
          {/* Smart phone */}
          <Link to={urls.productPage}>
            <div className="flex">
              <h2 className="text-md text-black font-medium">Smartphones</h2>
            </div>
          </Link>
        </div>
        {/* Brands */}
        <div className="flex flex-row gap-14">
          <div className="mt-10">
            <div>
              <div className="flex flex-col">
                <div>
                  <h2 className="text-black text-md font-medium flex items-center  relative">
                    Brand
                    <IoIosArrowUp className="ml-48" />
                    <span className="absolute bottom-[-1rem] md:w-[256px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
                  </h2>
                </div>
                {/* Search bar */}
                <div className="relative mt-10">
                  <input
                    className="appearance-none border-2 pl-10 bg-[#F5F5F5] border-gray-300 hover:border-gray-400 transition-colors rounded-md w-[256px] py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Search"
                  />
                  <div className="absolute right-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-0 inset-y-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        // eslint-disable-next-line react/no-unknown-property
                        stroke-linejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Product */}
                <div className="mt-2">
                  {/* Apple */}
                  <div className="flex flex-wrap gap-2 ">
                    <IoIosCheckbox className="mt-1" />
                    <h2 className="text-md font-medium">
                      Apple
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        110
                      </span>
                    </h2>
                  </div>
                  {/* Samsung */}
                  <div className="flex flex-row gap-2 mt-2 ">
                    <MdOutlineCheckBoxOutlineBlank className="mt-1.5 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Samsung
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        125
                      </span>
                    </h2>
                  </div>
                  {/* Xiaomi */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Xiaomi
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        68
                      </span>
                    </h2>
                  </div>
                  {/* Poco */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Poco
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        44
                      </span>
                    </h2>
                  </div>
                  {/* OPPO */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      OPPO
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        36
                      </span>
                    </h2>
                  </div>
                  {/* Homor  */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Honor
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        10
                      </span>
                    </h2>
                  </div>
                  {/* Motorola */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Motorola
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        34
                      </span>
                    </h2>
                  </div>
                  {/* Nokia */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Nokia
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        68
                      </span>
                    </h2>
                  </div>
                  {/* Realme */}
                  <div className="flex flex-row gap-2 mt-2">
                    <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
                    <h2 className="text-md font-medium mt-1">
                      Realme
                      <span className="text-sm ml-1 font-thin text-[#929292]">
                        35
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="mt-8">
                  <div>
                    <h2 className="text-black text-md font-medium flex items-center  relative">
                      Battery capacity
                      <IoIosArrowDown className="ml-28" />
                      <span className="absolute bottom-[-1rem] md:w-[256px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
                    </h2>
                  </div>
                  {/* Screen type */}
                  <div className="mt-12">
                    <h2 className="text-black text-md font-medium flex items-center  relative">
                      Screen type
                      <IoIosArrowDown className="ml-36" />
                      <span className="absolute bottom-[-1rem] md:w-[256px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
                    </h2>
                  </div>
                  {/* Screen diagonal */}
                  <div className="mt-12">
                    <h2 className="text-black text-md font-medium flex items-center  relative">
                      Screen diagonal
                      <IoIosArrowDown className="ml-28" />
                      <span className="absolute bottom-[-1rem] md:w-[256px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
                    </h2>
                  </div>
                  {/* Protection class */}
                  <div className="mt-12">
                    <h2 className="text-black text-md font-medium flex items-center  relative">
                      Protection class
                      <IoIosArrowDown className="ml-28" />
                      <span className="absolute bottom-[-1rem] md:w-[256px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
                    </h2>
                  </div>
                  {/* Built-in memory */}
                  <div className="mt-12">
                    <h2 className="text-black text-md font-medium flex items-center  relative">
                      Built-in memory
                      <IoIosArrowDown className="ml-28" />
                      <span className="absolute bottom-[-1rem] md:w-[256px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Selected products */}
          <div className="mt-12">
            <h2>
              Selected Products:<span>85</span>
            </h2>

            {/* iphon1 */}
            <div>
              <div className="flex flex-row gap-4">
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon8} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1437</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
                {/* iphone 2 */}
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon7} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 11 128GB White (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$510</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>

                {/* iphone 3 */}
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon7} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 11 128GB White (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$550</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* 2nd images */}
              <div className="flex flex-row gap-4">
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon5} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1499</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>

                {/* iphone 5 */}
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon8} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 1TB Gold (MQ2V3)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1399</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>

                {/* iphone 6 */}
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon4} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1600</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* 3rd Image */}
              <div className="flex flex-row gap-4">
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon3} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 13 mini 128GB Pink (MLK23)
                  </p>
                  <p className="text-[24px] font-medium text-center">$850</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>

                {/* iphone 5 */}
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon2} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 256GB Space Black (MQ0T3)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1399</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>

                {/* iphone 6 */}
                <div className="bg-brand mt-8 md:w-[268px]  md:h-[432px] w-1/2 rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="mt-8" src={iphon5} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 11 128GB White (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1399</p>
                  <Link to="/shop">
                    <button className="md:w-[184px] h-[48px] w-[139px] mt-2  md:ml-10  ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
              {/* numbers */}
              <div>
                <div className="flex gap-12 mt-8  items-center justify-center">
                  <IoIosArrowBack size={25} />
                  <div className="flex flex-row gap-2">
                    <div className="bg-black w-[34px] h-[32px] rounded-md text-white flex items-center justify-center">
                      1
                    </div>
                    <div className="bg-[#F6F6F6] w-[34px] h-[32px] rounded-md text-black flex items-center justify-center">
                      <h1 className="text-[16px]">2</h1>
                    </div>
                    <div className="bg-[#F6F6F6] w-[34px] h-[32px] rounded-md text-black flex items-center justify-center">
                      <h1 className="text-[16px]">3</h1>
                    </div>
                    <h1 className="mt-1 text-[#737373] ">....</h1>
                    <div className="bg-[#F6F6F6] w-[34px] h-[32px] rounded-md text-black flex items-center justify-center">
                      <h1 className="text-[16px]">12</h1>
                    </div>
                  </div>

                  <IoIosArrowForward size={25} />
                </div>
              </div>
            </div>
          </div>

          {/* Drop down */}
          {/* <div className="relative inline-block text-left mt-10 ">
            <div>
              <button
                type="button"
                className="inline-flex w-[256px] h-[40px] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                By rating
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
