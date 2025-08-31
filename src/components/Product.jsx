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
      <div className=" relative group bg-white ">
        <div className="relative w-full h-[330px] bg-white ">
          {/* Default Image */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[330px] pb-5 border-2 border-gray-200  object-cover transition-opacity duration-300 "
          />
          <div className="absolute py-3 space-y-3  bottom-0 left-0 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out hover:cursor-pointer bg-black ">
            <p className="text-white text-center">Add to Cart </p>
          </div>
        </div>
        {/* Badge part Start  */}
        <div
          className={`absolute top-2 right-2 py-2 px-5 text-black font-bold text-center text-sm ${badgeClassName}`}
        >
          {badgeText}
        </div>
        {/* Badge part End  */}

        {/* <Badge className={"absolute top-5 left-5"} badgeText={text} /> */}
        <div className="absolute space-y-3  top-3 left-3 w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-gray-200">
            <HiOutlineEye className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative w-[40px] h-[40px] rounded-[50%] hover:cursor-pointer bg-gray-200 ">
            <HiOutlineHeart className="text-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="pb-5 px-2 mt-5">
          <p className="text-[#767676] text-base font-bold">{productColor}</p>
          <h3 className="text-[#262626] text-lg font-bold">{title}</h3>
          <h4
            className={`text-mainColor text-base font-bold ${priceClassName}`}
          >
            {price}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Product;
