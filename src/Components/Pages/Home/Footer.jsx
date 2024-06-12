import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="bg-[#000000] md:w-screen md:h-[500px] h-screen  flex flex-col justify-between">
        <div className="md:flex flex-row gap-12">
          <div className="md:ml-10 md:mt-20 sm:ml-10 sm:mt-20 text-center">
            <h2 className="text-white text-3xl mt-2 font-bold">cyber</h2>
            <p className="text-[#CFCFCF] md:text-md font-medium mt-8 text-xs">
              We are a residential interior design firm located in Portland.
              <span className="md:mr-8">
                <br /> Our boutique-studio offers more than
              </span>
            </p>
          </div>

          <div className="md:flex flex-row lg:flex-row ">
            <div className="md:ml-10 md:mt-20 text-center mt-6">
              <h1 className="text-white font-semibold text-2xl">Services</h1>
              <p className=" text-sm text-[#CFCFCF] mt-2">Bonus program</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Gift cards</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Credit and payment</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Service contracts</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Non-cash contracts</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Payment</p>
            </div>

            <div className="md:ml-20 md:mt-20 text-center ">
              <h1 className="text-white font-semibold text-2xl mt-5">
                Assistance to the buyer
              </h1>
              <p className=" text-sm text-[#CFCFCF] mt-2">Find an order</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Terms of delivery</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">
                Exchange and return of goods
              </p>
              <p className=" text-sm text-[#CFCFCF] mt-4">Guarantee</p>
              <p className=" text-sm text-[#CFCFCF] mt-4">
                Frequently asked questions
              </p>
              <p className=" text-sm text-[#CFCFCF] mt-4">
                Terms of use of the site
              </p>
            </div>
          </div>
        </div>

        <div className="md:ml-10 md:mb-20 ml-14 mb-10">
          <div className="text-white flex flex-row gap-12">
            <FaTwitter size={25} />
            <FaFacebook size={25} />
            <FaTiktok size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
