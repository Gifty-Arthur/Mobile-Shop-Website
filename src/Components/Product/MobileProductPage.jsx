import { Link } from "react-router-dom";

//icons
import { AiOutlineNodeCollapse } from "react-icons/ai";
import {
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { CiHeart } from "react-icons/ci";

//Images

import iphon7 from "../../assets/ProductPage/iphone7.png";
import iphon8 from "../../assets/ProductPage/iphone8.png";
import iphon5 from "../../assets/ProductPage/iphone5.png";
import iphon2 from "../../assets/ProductPage/iphone2.png";
import iphon3 from "../../assets/ProductPage/iphone3.png";
import iphon4 from "../../assets/ProductPage/iphone4.png";
import { urls } from "../../Helpers/routes";
const MobileProductPage = () => {
  return (
    <div className="flex sm:hidden md:hidden">
      <div className="flex flex-row ">
        <div>
          <div className="flex flex-row gap-6">
            <Link to={urls.mobilefilters}>
              <div className="">
                <div className="h-[58px] w-[164px] border-2 rounded-md">
                  <div className="flex items-center justify-between">
                    <h1 className="mt-4 ml-2 font-roboto">Filters</h1>
                    <AiOutlineNodeCollapse size={20} className="mt-4 mr-4" />
                  </div>
                </div>
              </div>
            </Link>
            {/* rate */}
            <Link>
              <div className="">
                <div className="h-[58px] w-[164px] border-2 rounded-md">
                  <div className="flex items-center justify-between">
                    <h1 className="mt-4 ml-2 font-roboto">By rating</h1>
                    <IoIosArrowDown size={20} className="mt-4 mr-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Products */}
          <div className="mt-4">
            <h1 className="text-[#6C6C6C] text-lg">
              Product Result: <span className="font-medium text-black">85</span>
            </h1>

            {/* images */}
            <div className="flex flex-row gap-4">
              <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="" src={iphon8} alt="" />
                </div>
                <p className="text-[16px] font-medium text-center md:mt-4">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </p>
                <p className="text-[24px] font-medium text-center">$1437</p>
                <Link to="/shop">
                  <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* img2 */}
              <div>
                <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="" src={iphon7} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1437</p>
                  <Link to="/shop">
                    <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* img3 */}
            <div className="flex flex-row gap-4">
              <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="" src={iphon7} alt="" />
                </div>
                <p className="text-[16px] font-medium text-center md:mt-4">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </p>
                <p className="text-[24px] font-medium text-center">$1437</p>
                <Link to="/shop">
                  <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* img4 */}
              <div>
                <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="" src={iphon5} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1437</p>
                  <Link to="/shop">
                    <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* img5 */}
            <div className="flex flex-row gap-4">
              <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="" src={iphon8} alt="" />
                </div>
                <p className="text-[16px] font-medium text-center md:mt-4">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </p>
                <p className="text-[24px] font-medium text-center">$1437</p>
                <Link to="/shop">
                  <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* img 6*/}
              <div>
                <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="" src={iphon4} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1437</p>
                  <Link to="/shop">
                    <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* img7 */}
            <div className="flex flex-row gap-4">
              <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                <div className="text-calm flex items-center justify-end mr-4">
                  <CiHeart size={32} className="mt-4" />
                </div>
                <div className="flex items-center justify-center ">
                  <img className="" src={iphon3} alt="" />
                </div>
                <p className="text-[16px] font-medium text-center md:mt-4">
                  Apple iPhone 14 Pro 512GB Gold (MQ233)
                </p>
                <p className="text-[24px] font-medium text-center">$1437</p>
                <Link to="/shop">
                  <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* img8 */}
              <div>
                <div className="bg-brand mt-8 w-[164px]  h-[352px]  rounded-md hover:scale-95 transtion-all duration-300">
                  <div className="text-calm flex items-center justify-end mr-4">
                    <CiHeart size={32} className="mt-4" />
                  </div>
                  <div className="flex items-center justify-center ">
                    <img className="" src={iphon2} alt="" />
                  </div>
                  <p className="text-[16px] font-medium text-center md:mt-4">
                    Apple iPhone 14 Pro 512GB Gold (MQ233)
                  </p>
                  <p className="text-[24px] font-medium text-center">$1437</p>
                  <Link to="/shop">
                    <button className=" h-[48px] w-[140px] mt-2    ml-2 rounded-[8px] bg-black text-white hover:bg-violet-500 ">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

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

        {/* Rating */}
      </div>
    </div>
  );
};

export default MobileProductPage;
