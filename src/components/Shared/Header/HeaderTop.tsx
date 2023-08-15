import SearchInput from "@/components/common/SearchInput";
import Image from "next/image";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="px-[24px] lg:px-[76px] xl:px-[120px] py-4 lg:pt-6 ">
      {/* Header top section */}
      <div className="flex justify-between items-center ">
        {/* Left section with logo */}
        <div className="flex justify-between ">
          {/* Hamburger menu button (visible only on small and tablet screens) */}
          <button className="pr-[10px] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
            >
              {/* Hamburger menu lines */}
              <path
                d="M1.5 0.625H26.5"
                stroke="#25252E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 10H26.5"
                stroke="#25252E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 19.375H26.5"
                stroke="#25252E"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Logo with a link to the home page */}
          <Link href="/">
            <Image
              src="NSLogo.svg"
              alt="logo"
              width={233}
              height={44}
              className="nsLogo"
            />
          </Link>
        </div>
        {/* Search input (visible on larger screens) */}
        <div className="hidden lg:block">
          <SearchInput />
        </div>
        {/* Right section with buttons and icons */}
        <div className="flex justify-between ">
          {/* "Sell" button with a link to the home page (visible on larger screens) */}
          <Link
            href="/"
            className="text-[#0072BC] font-semibold hidden lg:block"
          >
            <button className="flex lg:w-[84px] xl:w-[104px] h-[48px] py-2 px-8 border border-[#0072BC] rounded-md  justify-center items-center gap-3">
              Sell
            </button>
          </Link>
          {/* Icons for contact, cart, and notifications */}
          <div className="flex justify-center items-center lg:pl-8 xl:pl-12 big_Ns:pl-[72px] space-x-2 xl:space-x-8">
            {/* Contact icon */}
            <Link href="/">
              <Image
                src="/icons/contact.svg"
                alt="logo"
                width={32}
                height={32}
                className="w-[32px]"
              />
            </Link>
            {/* Cart icon */}
            <Link href="/">
              <Image
                src="/icons/cart.svg"
                alt="logo"
                width={32}
                height={32}
                className=""
              />
            </Link>
            {/* Notification icon */}
            <Link href="/">
              <Image
                src="/icons/notification.svg"
                alt="logo"
                width={44}
                height={32}
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Search input for tablets (visible on small screens) */}
      <div className="mt-4 lg:hidden">
        <SearchInput />
      </div>
    </div>
  );
};

export default HeaderTop;
