import Link from "next/link";

const FooterTop = () => {
  return (
    <div className="px-[16px] lg:px-[120px] py-9 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First footer section */}
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg md:text-[22px] text-[#25252E] font-semibold leading-[32px] lg:pb-1">
            Buy
          </h5>
          <Link href="/">Registration</Link>
          <Link href="/">NichoShop Buyer Protection</Link>
          <Link href="/">Bidding & buying help</Link>
        </div>

        {/* Second footer section */}
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg md:text-[22px] text-[#25252E] font-semibold leading-[32px] lg:pb-1">
            Sell
          </h5>
          <Link href="/">Start selling</Link>
          <Link href="/">NichoShop Seller Protection</Link>
          <Link href="/">Learn to sell</Link>
        </div>

        {/* Third footer section */}
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg md:text-[22px] text-[#25252E] font-semibold leading-[32px] lg:pb-1">
            About NichoShop
          </h5>
          <Link href="/">Company info</Link>
          <Link href="/">News</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Policies</Link>
        </div>

        {/* Fourth footer section */}
        <div className="flex flex-col space-y-4">
          <h5 className="text-lg md:text-[22px] text-[#25252E] font-semibold leading-[32px] lg:pb-1">
            Help & Contact
          </h5>
          <Link href="/">Help topics</Link>
          <Link href="/">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
