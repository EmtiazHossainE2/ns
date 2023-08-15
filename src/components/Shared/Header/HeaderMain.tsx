import Link from "next/link";

const HeaderMain = () => {
  return (
    <div className="hidden lg:block">
      <hr className="text-[#E4E4EE] lg:mt-4 " />
      <div className="px-[16px] lg:px-[76px] xl:px-[120px] pt-3 pb-3">
        <div className="flex justify-between text-[9px] xl:text-sm extraBig_Ns:text-base">
          <Link href="/" className="">
            Fashion
          </Link>
          <Link href="/" className="">
            Electronics
          </Link>
          <Link href="/" className="">
            Leisure
          </Link>
          <Link href="/" className="">
            Collectables & Art
          </Link>
          <Link href="/" className="">
            Home & Garden
          </Link>
          <Link href="/" className="">
            Home & Garden
          </Link>
          <Link href="/" className="">
            Toys & Hobbies
          </Link>
          <Link href="/" className="">
            Sporting Goods
          </Link>
          <Link href="/" className="">
            Health & Beauty
          </Link>
          <Link href="/" className="">
            Motors
          </Link>
          <Link href="/" className="">
            Business & Industrial
          </Link>
          <Link href="/" className="">
            Today’s Deals
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain