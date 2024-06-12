import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { urls } from "../../Helpers/routes";

const ProductPage = () => {
  return (
    <div className="container">
      <div>
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
      </div>

      {/* Brands */}
      <div className="mt-10">
        <div>
          <h2 className="text-black text-md font-medium relative">
            Brand
            <div className="flex ml-4 items-center justify-between">
              <IoIosArrowUp />
            </div>
            <span className="absolute bottom-[-0.5rem] left-0 w-[256px] h-[2px] bg-[#4b5563]"></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
