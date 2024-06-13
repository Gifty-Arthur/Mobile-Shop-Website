import { Link } from "react-router-dom";
import { urls } from "../../Helpers/routes";
import { FaCircle } from "react-icons/fa";
//icons
import {
  IoIosArrowBack,
  IoIosArrowDown,
  //   IoIosArrowForward,
  IoIosArrowUp,
  IoIosCheckbox,
} from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const MobileProductFilters = () => {
  return (
    <div className="flex sm:hidden md:hidden">
      <div className="flex flex-col ml-6">
        <Link to={urls.productPage}>
          <div className="flex flex-row gap-4">
            <IoIosArrowBack size={20} className="mt-2 " />
            <h1 className="text-[24px] font-medium">Filters</h1>
          </div>
        </Link>

        {/* Price */}
        <div className="mt-4">
          <h2 className="text-black text-[18px] font-medium flex items-center  relative">
            Price
            <IoIosArrowUp className="ml-64" />
            <span className="absolute bottom-[-1rem] w-[341px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>

        {/* from - To*/}
        <div className="mt-10">
          <div className="flex flex-row justify-between">
            <p className="text-md text-calm">From</p>
            <p className="text-md text-calm">To</p>
          </div>
        </div>
        {/* 1299 */}
        <div className="flex flex-row  space-x-32 mt-2">
          <div className="w-[107px] h-[40px] rounded-sm  border-2 border-calm ">
            <p className="mt-1 ml-1">1299</p>
          </div>

          <div className="w-[107px] h-[40px] rounded-sm  border-2 border-calm ">
            <p className="mt-1 ml-16">1299</p>
          </div>
        </div>

        {/*bar  */}
        <div className="mt-6">
          <div className="bg-custom5 w-full h-[4px] rounded-full relative">
            <div className="bg-black w-[30%] h-[4px] flex justify-end items-center rounded-full relative">
              {/* Icon at the end of the black color */}
              <FaCircle
                className="absolute right-28 -top-[4px] transform translate-x-1/2 text-blac ml-2 "
                size={12}
              />
            </div>
            {/* Icon at the end of the remaining color */}
            <FaCircle
              className="absolute left-36 -top-[4px] transform translate-x-1/2 text-black"
              size={12}
            />
          </div>
        </div>
        {/* SSearch bar */}
        <div className="relative mt-6">
          <input
            className="appearance-none border-2 pl-10 bg-[#F5F5F5] border-gray-300 hover:border-gray-400 transition-colors rounded-md w-[315px] py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
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
            ></svg>
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

        {/* Brands */}
        <div className="flex flex-wrap gap-2 mt-6">
          <IoIosCheckbox className="mt-1" />
          <h2 className="text-md font-medium">
            Apple
            <span className="text-sm ml-1 font-thin text-[#929292]">110</span>
          </h2>
        </div>
        {/* Samsung */}
        <div className="flex flex-row gap-2 mt-2 ">
          <MdOutlineCheckBoxOutlineBlank className="mt-1.5 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Samsung
            <span className="text-sm ml-1 font-thin text-[#929292]">125</span>
          </h2>
        </div>
        {/* Xiaomi */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Xiaomi
            <span className="text-sm ml-1 font-thin text-[#929292]">68</span>
          </h2>
        </div>
        {/* Poco */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Poco
            <span className="text-sm ml-1 font-thin text-[#929292]">44</span>
          </h2>
        </div>
        {/* OPPO */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            OPPO
            <span className="text-sm ml-1 font-thin text-[#929292]">36</span>
          </h2>
        </div>
        {/* Homor  */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Honor
            <span className="text-sm ml-1 font-thin text-[#929292]">10</span>
          </h2>
        </div>
        {/* Motorola */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Motorola
            <span className="text-sm ml-1 font-thin text-[#929292]">34</span>
          </h2>
        </div>
        {/* Nokia */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Nokia
            <span className="text-sm ml-1 font-thin text-[#929292]">68</span>
          </h2>
        </div>
        {/* Realme */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Realme
            <span className="text-sm ml-1 font-thin text-[#929292]">35</span>
          </h2>
        </div>

        {/* Built-in Memory */}
        <div className="mt-6">
          <h2 className="text-black text-md font-medium flex items-center  relative">
            Built-in memory
            <IoIosArrowUp className="ml-48" />
            <span className="absolute bottom-[-1rem] w-[341px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>

        {/* Search bar for built in memory */}

        <div className="relative mt-8">
          <input
            className="appearance-none border-2 pl-10 bg-[#F5F5F5] border-gray-300 hover:border-gray-400 transition-colors rounded-md w-[315px] py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
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
            ></svg>
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

        {/* Gigabyte */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            Poco
            <span className="text-sm ml-1 font-thin text-[#929292]">44</span>
          </h2>
        </div>
        {/* OPPO */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            16GB
            <span className="text-sm ml-1 font-thin text-[#929292]">65</span>
          </h2>
        </div>
        {/* Homor  */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            32GB
            <span className="text-sm ml-1 font-thin text-[#929292]">123</span>
          </h2>
        </div>
        {/* Motorola */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            64GB
            <span className="text-sm ml-1 font-thin text-[#929292]">48</span>
          </h2>
        </div>
        {/* Nokia */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            128GB
            <span className="text-sm ml-1 font-thin text-[#929292]">50</span>
          </h2>
        </div>
        {/* Realme */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            256GB
            <span className="text-sm ml-1 font-thin text-[#929292]">50</span>
          </h2>
        </div>

        {/* 512GB */}
        <div className="flex flex-row gap-2 mt-2">
          <MdOutlineCheckBoxOutlineBlank className="mt-2 text-[#D3D3D3]" />
          <h2 className="text-md font-medium mt-1">
            515GB
            <span className="text-sm ml-1 font-thin text-[#929292]">8</span>
          </h2>
        </div>

        {/* Protection class */}

        <div className="mt-12">
          <h2 className="text-black text-md font-medium flex items-center  relative">
            Protection class
            <IoIosArrowDown className="ml-48" />
            <span className="absolute bottom-[-1rem] w-[341px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>

        {/* Screen diagonal */}

        <div className="mt-12">
          <h2 className="text-black text-md font-medium flex items-center  relative">
            Screen diagonal
            <IoIosArrowDown className="ml-48" />
            <span className="absolute bottom-[-1rem] w-[341px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>

        {/* Battery capacity */}
        <div className="mt-12">
          <h2 className="text-black text-md font-medium flex items-center  relative">
            Screen type
            <IoIosArrowDown className="ml-56" />
            <span className="absolute bottom-[-1rem] w-[341px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>

        {/* Battery capacity */}
        <div className="mt-12">
          <h2 className="text-black text-md font-medium flex items-center  relative">
            Battery capacity
            <IoIosArrowDown className="ml-48" />
            <span className="absolute bottom-[-1rem] w-[341px] left-0 right-8 h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>

        {/* Apply */}
        <div className="mt-8">
          <Link to="/shop">
            <button className=" h-[48px] w-[341px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
              Apply
            </button>
          </Link>
        </div>
        <div className="mt-20"></div>
      </div>
    </div>
  );
};

export default MobileProductFilters;
