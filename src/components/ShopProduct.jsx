import { Link } from "react-router-dom";
import {
    HiOutlineShoppingBag,
    HiOutlineEye,
    HiOutlineHeart,
} from "react-icons/hi2";
const ShopProduct = ({
    title,
    price,
    badgeText,
    imgSrcFirst,
    imgAlt,
    badgeClassName,
    priceClassName,
    productClassName,
}) => {
    return (
        <>
            <div
                className={`relative w-[32%] lg:w-[310px] h-100 lg:h-110 group border-2 border-gray-200 m-auto lg:m-0 flex-wrap ${productClassName}`}
            >
                {/* <Link to={"/quickview"} > */}
                <div className="relative w-[230px] m-auto lg:w-[305px] h-70 lg:h-80 border-b-2 border-neutral-300">
                    {/* Default Image */}
                    <img
                        src={imgSrcFirst}
                        alt={imgAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    />
                    {/* Group Hover Part */}
                    <div className="lg:p-0 space-y-3 absolute bottom-0 left-0 w-full lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 sm:opacity-100 sm:translate-y-0 transition-all duration-300 ease-in-out delay-100">
                        {/* Add To Cart part Start */}
                        <div
                            className="w-[100%] h-[40px] lg:h-[50px] flex justify-center m-auto hover:cursor-pointer bg-black hover:bg-mainColor transition-colors duration-300"
                        >
                            <p className="py-2 lg:py-3 text-lg font-medium text-white">ADD TO CART</p>
                        </div>
                        {/* Add To Cart part End */}
                    </div>
                    {/* Wishlist Icon start */}
                    <div
                        className="w-[35px] h-[35px] rounded-full bg-black hover:bg-mainColor absolute top-2 right-2 hover:cursor-pointer flex items-center justify-center lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 sm:opacity-100 sm:translate-y-0 transition-all duration-300 ease-in-out delay-100"
                    >
                        <HiOutlineHeart className="text-white text-2xl transition-colors duration-300" />
                    </div>
                    {/* Wishlist Icon end */}
                    {/* Group Hover Part End */}
                </div>
                {/* </Link> */}

                {/* Badge */}
                <div
                    className={`absolute top-2 left-2 py-1.5 px-4 text-black font-bold text-center text-sm ${badgeClassName}`}
                >
                    {badgeText}
                </div>



                <div className="pb-10 px-3 mt-3">

                    <h3 className="text-[#262626] text-lg font-bold py-1">{title}</h3>
                    <div className="flex justify-between items-center">
                        <h4
                            className={`text-mainColor text-lg font-bold ${priceClassName}`}
                        >
                            ${price.toFixed(2)}
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopProduct