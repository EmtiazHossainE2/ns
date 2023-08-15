import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const FooterBottom = () => {
  // State variables to manage selected country and currency
  const [selectedCountry, setSelectedCountry] = useState("usa");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  // Get the current year
  const getFullYear = new Date().getFullYear();

  // Function to handle country change and update currency accordingly
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountryValue = event.target.value;
    setSelectedCountry(selectedCountryValue);

    // Set currency based on selected country
    if (selectedCountryValue === "usa") {
      setSelectedCurrency("usd");
    } else if (selectedCountryValue === "bangladesh") {
      setSelectedCurrency("taka");
    } else if (selectedCountryValue === "india") {
      setSelectedCurrency("rupee");
    }
  };

  return (
    <div className="px-[16px] lg:px-[120px] ">
      {/* Horizontal line separator */}
      <hr className="text-[#E4E4EE]" />

      {/* Container for social media links and country/currency selection */}
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center pt-5 pb-5 md:pb-4 lg:py-6">
        {/* Social media links */}
        <div className="flex space-x-[10px] pt-7 md:pt-0">
          {/* Link to Facebook */}
          <Link
            href="/"
            className="w-9 h-9 flex justify-center items-center rounded-md border border-[#E4E4EE]"
          >
            <Image
              src="/icons/social/facebook.svg"
              alt="facebook"
              width={12}
              height={21}
              className=""
            />
          </Link>
          {/* Link to Twitter */}
          <Link
            href="/"
            className="w-9 h-9 flex justify-center items-center rounded-md border border-[#E4E4EE]"
          >
            <Image
              src="/icons/social/twitter.svg"
              alt="twitter"
              width={18}
              height={21}
              className=""
            />
          </Link>
          {/* Link to Instagram */}
          <Link
            href="/"
            className="w-9 h-9 flex justify-center items-center rounded-md border border-[#E4E4EE]"
          >
            <Image
              src="/icons/social/instagram.svg"
              alt="instagram"
              width={16}
              height={21}
              className=""
            />
          </Link>
          {/* Link to YouTube */}
          <Link
            href="/"
            className="w-9 h-9 flex justify-center items-center rounded-md border border-[#E4E4EE]"
          >
            <Image
              src="/icons/social/youtube.svg"
              alt="youtube"
              width={21}
              height={21}
              className=""
            />
          </Link>
          {/* Link to Twitch */}
          <Link
            href="/"
            className="w-9 h-9 flex justify-center items-center rounded-md border border-[#E4E4EE]"
          >
            <Image
              src="/icons/social/twitch.svg"
              alt="twitch"
              width={18}
              height={21}
              className=""
            />
          </Link>
        </div>

        {/* Country and currency selection */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0 md:space-x-4 md:mb-5 lg:mb-0">
          {/* Dropdown for selecting country */}
          <select
            id="country"
            className="border rounded-md px-4 py-2 w-[328px] h-[44px] md:h-[36px] md:w-[228px] cursor-pointer"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="usa"> United States</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="india">India</option>
          </select>

          {/* Dropdown for selecting currency */}
          <select
            id="currency"
            className="border rounded-md px-4 py-2 w-[328px] h-[44px] md:h-[36px] md:w-[228px]"
            value={selectedCurrency}
            onChange={(event) => setSelectedCurrency(event.target.value)}
          >
            <option value="usd">USD - US Dollar</option>
            {/* Display currency options based on selected country */}
            {selectedCountry === "bangladesh" && (
              <option value="taka">Taka</option>
            )}
            {selectedCountry === "india" && (
              <option value="rupee">Rupee</option>
            )}
          </select>
        </div>
      </div>

      {/* Horizontal line separator */}
      <hr className="text-[#E4E4EE] " />

      {/* Copyright and legal information */}
      <div>
        <p className="text-center py-6 lg:pt-5 lg:pb-10 text-[#6C757D] text-xs md:text-base">
          Copyright © {getFullYear} NichoShop Inc. All rights reserved.{" "}
          <br className="md:hidden" />{" "}
          <Link href="/" className="text-[#0B80CC]">
            User agreement, Privacy
          </Link>{" "}
          and{" "}
          <Link href="/" className="text-[#0B80CC]">
            Cookies.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
