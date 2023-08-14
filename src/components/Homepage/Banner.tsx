import Image from "next/image";

const Banner = () => {
  return (
    <div className=" bg-gradient-to-b lg:bg-gradient-to-r from-[#F6FEE0] to-[#ADEDD5] ">
      <div className="banner flex flex-col lg:flex-row justify-end gap-12 lg:gap-[10px] lg:justify-between items-center lg:text-left  ">
        {/* Left side */}
        <div className="flex flex-col text-center lg:text-start items-center lg:items-start lg:w-[540px]">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold text-[#25252E]">
            Sporting and Enjoy
          </h2>
          <p className="text-base md:text-[18px] pt-4 pb-6 md:pt-6 md:pb-9">
            Find everything you are looking for, <br className="md:hidden" />{" "}
            with great deals
          </p>
          {/* Shop Button  */}
          <div className="">
            <button className="flex justify-center items-center text-sm md:text-base py-2 px-8 gap-3 border border-[#0072BC] bg-white text-[#0072BC] font-semibold leading-6 rounded-lg">
              Shop Now
              <Image
                src="/icons/Arrow-Right.svg"
                alt="arrow"
                width={20}
                height={20}
                className="ml-2"
              />
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-shrink-0">
          <Image
            src="/images/homepage/pngwing1.svg"
            alt="cycle"
            width={683}
            height={378}
            className="banner_Image rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
