import Flex from "./Flex";
import { HiOutlineEye, HiOutlineHeart } from "react-icons/hi2";
const Product = ({
  imgSrc,
  imgAlt,
  badgeText,
  title,
  price,
  productColor,
  badgeClassName,
  priceClassName,
}) => {
  return (
    <>
      <div className="relative group bg-white w-full  mx-auto">
        <div className="relative w-full h-[250px]  md:h-[300px] lg:h-[330px] bg-white overflow-hidden">
          {/* Default Image */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[250px]  md:h-[300px] lg:h-[330px] object-cover transition-opacity duration-300 border-2 border-gray-200"
          />
          <div className="absolute py-2 sm:py-3 space-y-2 sm:space-y-3 bottom-0 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out hover:cursor-pointer bg-black/80">
            <p className="text-white text-center text-xs sm:text-sm">Add to Cart</p>
          </div>
        </div>
        {/* Badge part Start  */}
        <div
          className={`absolute top-2 right-2 py-1 sm:py-2 px-3 sm:px-5 text-black font-bold text-center text-xs sm:text-sm ${badgeClassName}`}
        >
          {badgeText}
        </div>
        {/* Badge part End  */}

        {/* Icons part */}
        <div className="absolute space-y-2 sm:space-y-3 top-3 left-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:cursor-pointer bg-gray-200 flex items-center justify-center">
            <HiOutlineEye className="text-lg sm:text-xl text-black" />
          </div>
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:cursor-pointer bg-gray-200 flex items-center justify-center">
            <HiOutlineHeart className="text-lg sm:text-xl text-black" />
          </div>
        </div>
        <div className="p-2 sm:p-4 sm:pb-5 mt-2 sm:mt-5">
          <p className="text-[#767676] text-sm sm:text-base font-bold line-clamp-1">{productColor}</p>
          <h3 className="text-[#262626] text-base sm:text-lg font-bold line-clamp-2 mt-1">{title}</h3>
          <h4
            className={`text-mainColor text-sm sm:text-base font-bold mt-1 ${priceClassName}`}
          >
            {price}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Product;