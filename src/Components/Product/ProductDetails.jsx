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
            <img
              className="w-[413px] h-[516px] md:mt-24  md:flex hidden sm:flex lg:flex"
              src={iphone4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
