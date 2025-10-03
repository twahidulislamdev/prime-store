import { Link } from "react-router-dom";
import { HiOutlineEye, HiOutlineHeart } from "react-icons/hi2";

const Product = ({
    imgSrc,
    imgAlt,
    badgeText,
    title,
    price,
    productColor,
    badgeClassName = "",
    priceClassName = "",
    productClassName = ""
}) => {
    return (
        <div
            className={`w-[190px]  md:w-[32%] lg:w-[23%] xl:w-[23%] relative group border-2 border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300  ${productClassName}`}
        >
            {/* Product Image with Quickview */}
            <Link to="/quickview">
                <div className="relative w-full  overflow-hidden">
                    {/* Default Image */}
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Add to Cart Overlay */}
                    <div className="absolute bottom-0 left-0 w-full py-3 bg-black/80 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out cursor-pointer">
                        <p className="text-white text-center text-sm font-medium">Add to Cart</p>
                    </div>
                </div>
            </Link>

            {/* Badge */}
            {badgeText && (
                <div
                    className={`absolute top-3 right-3 py-1.5 px-4 text-black font-bold text-sm bg-white rounded-full shadow-md ${badgeClassName}`}
                >
                    {badgeText}
                </div>
            )}

            {/* Action Icons */}
            <div
                className="absolute flex flex-col gap-2 top-3 left-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
            >
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <HiOutlineEye className="text-lg text-gray-700" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                    <HiOutlineHeart className="text-lg text-gray-700" />
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <p className="text-gray-500 text-sm font-medium line-clamp-1">
                    {productColor}
                </p>
                <h3 className="text-gray-900 text-base font-semibold line-clamp-2 mt-1 hover:text-mainColor transition-colors duration-200">
                    {title}
                </h3>
                <h4
                    className={`text-mainColor text-lg font-bold mt-2 ${priceClassName}`}
                >
                    {price}
                </h4>
            </div>
        </div>
    );
};

export default Product;