import React from "react";

// images
import banner1 from "../../../assets/Images/banner1.png";
import banner3 from "../../../assets/Images/banner3.png";
import banner4 from "../../../assets/Images/banner4.png";
import banner2 from "../../../assets/Images/banner2.png";

const Category = () => {
  return (
    <div className=" max-w-screen-2xl md:h-[600px] ">
      <div className="container">
        <div>
          <div className=" bg-white md:h-[328px] md:w-[720px] ">
            <div className="flex ">
              <img className="md:w-[360px] md:h-[343px]" src={banner1} alt="" />
              <div className="flex flex-col items-start justify-center mt-4  ">
                <h1 className="font-medium text-3xl font-roboto sm:text-4xl">
                  Playstation 5
                </h1>
                <p className="text-md font-medium text-calm ">
                  Incredibly powerful CPUs, GPUs, and an SSD with <br />
                  <span>
                    integrated I/O will redefine your PlayStation experience.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* headphone */}
          <div className="flex ">
            <div className="bg-picker md:w-[360px] md:h-[272px] items-center ">
              <div className="flex ">
                <img
                  className="md:w-[104px] md:h-[272px]"
                  src={banner3}
                  alt=""
                />
                <div className="flex flex-col items-start justify-center ml-8   ">
                  <h1 className="font-light text-3xl  sm:text-[29px]">
                    Apple <br /> AirPods
                  </h1>
                  <h1 className="font-medium font-roboto text-3xl sm:text-[29px]">
                    Max
                  </h1>
                  <p className="text-md font-medium text-calm ">
                    Computational audio
                    <br /> Listen, it's powerful
                  </p>
                </div>
              </div>
            </div>

            {/* vision  */}

            <div className="md:w-[360px] h-[272px] bg-mid flex items-center justify-center">
              <div className="flex mt-14">
                <img
                  className="md:w-[136px] md:h-[190px]"
                  src={banner4}
                  alt=""
                />
                <div className="flex flex-col items-start justify-center   ml-8">
                  <h1 className="font-light text-3xl text-white  sm:text-[29px]">
                    Apple <br /> Vision{" "}
                    <span className="sm:text-[29px] font-medium font-roboto">
                      Pro
                    </span>
                  </h1>

                  <p className="text-md font-medium text-calm mt-2 ">
                    An immersive way to experience
                    <br /> entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* laptop */}
        <div>
          <div>
            <img src={banner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
