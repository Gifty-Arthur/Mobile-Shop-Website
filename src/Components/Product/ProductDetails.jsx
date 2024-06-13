import { urls } from "../../Helpers/routes";
import { Link } from "react-router-dom";

//images
// import iphone4 from "../../assets/ProductPage/iphone4.png"

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
                  ihone 14 pro Max
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
