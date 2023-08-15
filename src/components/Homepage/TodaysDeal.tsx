import { Product, todaysDeal } from "@/config/data";
import { useState } from "react";
import PaginationButton from "../common/PaginationButton";
import ProductCard from "../common/ProductCard";

const TodaysDeal: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  // Function to handle left pagination
  const handlePaginationLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); 
    }
  };

  // Function to handle right pagination
  const handlePaginationRight = () => {
    if (startIndex < todaysDeal.length - 6) {
      setStartIndex(startIndex + 1); 
    }
  };

  // Slice currently visible products
  const visibleProducts: Product[] = todaysDeal.slice(
    startIndex,
    startIndex + 6
  );

  // Slice for tablet view
  const tabletProducts: Product[] = todaysDeal.slice(0, 8);

  //Slice for mobile view
  const mobileProducts: Product[] = todaysDeal.slice(0, 6);

  return (
    <>
      <div className="px-[16px] lg:px-[120px] py-9 md:py-[72px] lg:py-20">
        {/*Deal header */}
        <div className="flex justify-between">
          <div className="flex space-x-[72px] items-center">
            <h3 className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold text-primary md:leading-[36px] lg:leading-[42px]">
              Today’s Deals
            </h3>
            <div className="hidden lg:flex items-center space-x-3 ">
              <PaginationButton
                onClick={handlePaginationLeft}
                iconSrc="/icons/arrow_left.svg"
                iconAlt="arrow"
                iconWidth={14.5}
              />

              {/* Pagination Right Button */}
              <PaginationButton
                onClick={handlePaginationRight}
                iconSrc="/icons/Arrow_Right.svg"
                iconAlt="arrow"
                iconWidth={20}
              />
            </div>
          </div>
          {/* See More Button */}
          <div>
            <button className="hidden md:flex items-center text-[#0072BC] font-semibold space-x-1">
              See All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.5 13L10.5 8L5.5 3"
                  stroke="#0072BC"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Displaying Visible Products */}
        <div className="hidden lg:grid gap-4 lg:gap-8 mt-7 lg:mt-8 lg:grid-cols-4 xl:grid-cols-6">
          {visibleProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Displaying Tablet Products */}
        <div className="hidden md:grid  md:grid-cols-4 gap-4 mt-7 lg:hidden">
          {tabletProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Displaying Mobile Products */}
        <div className="grid gap-4 mt-5 grid-cols-3 md:hidden">
          {mobileProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* See More Mobile Button */}
        <div>
          <button className="flex pt-5 text-sm  md:hidden items-center text-[#0072BC] font-semibold space-x-1">
            See All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.5 13L10.5 8L5.5 3"
                stroke="#0072BC"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <hr className="text-[#E4E4EE]" />
    </>
  );
};

export default TodaysDeal;
