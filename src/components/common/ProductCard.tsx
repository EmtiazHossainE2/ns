import Image from "next/image";
import { Product } from "@/config/data";

interface ProductCardProps {
  product: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="">
    {/* Product Image */}
    <Image
      src={product.image}
      alt="Product"
      width={255}
      height={255}
      className="product_Image"
    />
    {/* Product Price */}
    <div className="flex pt-2 pb-1 md:pt-4 md:pb-3 space-x-[2px] md:space-x-2">
      <del className="text-[#81818F] sm_Ns:text-[10px] text-xs md:text-base">
        $123.45
      </del>
      <button className="bg-[#FF6666] text-white rounded text-[10px] md:text-base px-[2px] md:px-1">
        12 % OFF
      </button>
    </div>
    <p className=" self-stretch text-base md:text-[22px] font-semibold">
      ${product.price}
    </p>
  </div>
);
export default ProductCard;