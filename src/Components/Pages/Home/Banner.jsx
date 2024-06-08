import React from "react";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Images
import b3 from "../../../assets/Banner/b3.png";
import b2 from "../../../assets/Banner/b2.png";
import b1 from "../../../assets/Banner/b1.png";
import mbanner2 from "../../../assets/Images/mbanner2.png";

// Mobile device images
import mb2 from "../../../assets/Banner/mb2.png";

const Banner = () => {
  return (
    <div>
      <div className="mt-12 ">
        {/* Desktop View */}
        <div className="sm:flex hidden">
          <div className="md:flex flex-row">
            {/* b3 */}
            <div className="w-[360px] h-[640px] hover:scale-95 transition-all duration-300 cursor-pointer">
              <img src={b3} alt="b3" />
              <div className="md:ml-10 md:-mt-12">
                <h1 className="text-[33px] font-light font-roboto">
                  Popular Products
                </h1>
                <p className="text-calm">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking, and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4 rounded-md border-black border-2 text-black hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* b2 */}
            <div className="w-[360px] h-[640px] bg-[#F9F9F9] hover:scale-95 transition-all duration-300 cursor-pointer">
              <img src={b2} alt="b2" />
              <div className="md:ml-10 mt-8">
                <h1 className="text-[33px] font-light font-roboto">Ipad Pro</h1>
                <p className="text-calm">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking, and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4 rounded-md border-black border-2 text-black hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* b1 */}
            <div className="w-[360px] h-[640px] bg-[#EAEAEA] hover:scale-95 transition-all duration-300 cursor-pointer">
              <img src={b1} alt="b1" />
              <div className="md:ml-10 mt-8">
                <h1 className="text-[33px] font-light font-roboto">
                  Samsung Galaxy
                </h1>
                <p className="text-calm">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking, and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4 rounded-md border-black border-2 text-black hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
            {/* mbanner2 */}
            <div className="w-[360px] h-[640px] bg-[#2C2C2C] hover:scale-95 transition-all duration-300 cursor-pointer">
              <div>
                <img className="mt-20" src={mbanner2} alt="mbanner2" />
              </div>
              <div className="md:ml-10 md:mt-28">
                <h1 className="text-[33px] text-white font-light font-roboto">
                  Macbook Pro
                </h1>
                <p className="text-calm">
                  iPad combines a magnificent 10.2-inch Retina display,
                  incredible performance, multitasking, and ease of use.
                </p>
                <Link to="/shop">
                  <button className="w-[184px] h-[56px] mt-4 rounded-md border-white border-2 text-white hover:bg-violet-500">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex sm:hidden  flex-col items-center">
          {/* Fixed Images at the Top */}

          <div className=" w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={2}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper "
              onSlideChange={(swiper) =>
                console.log("slide changed", swiper.activeIndex)
              }
            >
              {/* slide1 */}
              <div className="flex flex-row">
                <SwiperSlide>
                  <div className=" flex justify-center items-center">
                    <div>
                      <img className="-mt-8" src={mb2} alt="" />
                      <h1 className="text-[49px] text-center">Ipad Pro</h1>
                      <p className="text-calm text-md text-center">
                        iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                      </p>
                      <Link to="/shop">
                        <button className="w-[184px] h-[56px] ml-20 items-center mt-4  rounded-md border-black border-2 text-black hover:bg-violet-500">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* slide2 */}
                <SwiperSlide>
                  <div className="flex justify-center items-center bg-picker">
                    <div>
                      <img className="-mt-8 h-[329px]" src={b3} alt="" />
                      <h1 className="text-[49px] text-center">Ipad Pro</h1>
                      <p className="text-calm text-md text-center">
                        iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                      </p>
                      <Link to="/shop">
                        <button className="w-[184px] h-[56px] ml-20 items-center mt-4  rounded-md border-black border-2 text-black hover:bg-violet-500">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* slide3 */}
                <SwiperSlide>
                  <div className="h-[612px] flex justify-center items-center">
                    <div>
                      <img className="h-[329px] -mt-32" src={b1} alt="" />
                      <h1 className="text-[49px] text-center">Samsung</h1>
                      <p className="text-calm text-md text-center">
                        iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                      </p>
                      <Link to="/shop">
                        <button className="w-[184px] h-[56px] ml-20 items-center mt-4  rounded-md border-black border-2 text-black hover:bg-violet-500">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                {/* slide4 */}
                <SwiperSlide>
                  <div className="h-[612px] flex justify-center items-center">
                    <div>
                      <img className="ml-4" src={mbanner2} alt="" />
                      <h1 className="text-[49px] text-center">Macbook Air</h1>
                      <p className="text-calm text-sm text-center">
                        iPad combines a magnificent 10.2-inch Retina display,
                        incredible performance, multitasking and ease of use.
                      </p>
                      <Link to="/shop">
                        <button className="w-[184px] h-[56px] ml-20 items-center mt-4  rounded-md border-black border-2 text-black hover:bg-violet-500">
                          Shop Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
