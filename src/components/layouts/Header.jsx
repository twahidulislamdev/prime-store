import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

const Header = () => {
  let [isExpand, setExpand] = useState(false);
  return (
    <>
      <div className="relative">
        {/* Header Upper Part Start  */}
        <div className="py-4 bg-black">
          <Container>
            <Flex className={"justify-center items-center gap-x-3"}>
              <p className="text-[#FAFAFA] ">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <button className="border-b-1 border-white text-[#FAFAFA]">
                ShopNow
              </button>
            </Flex>
          </Container>
        </div>
        {/* Header Upper Part End  */}

        {/* Header Lower Part Start  */}
        <div className="py-5 ">
          <Container>
            <Flex className={"justify-between items-center"}>
              <h4 className="text-[30px] font-bold">Prime Store</h4>
              <ul className="flex gap-x-10">
                <Link to={"/"}>
                  <li className="text-base ">Home</li>
                </Link>
                <Link to={"/shop"}>
                  <li className="text-base ">Shop</li>
                </Link>
                <Link to={"/about"}>
                  <li className="text-base ">About</li>
                </Link>

                <li className="text-base ">Contact</li>
                <li className="text-base ">Sign Up</li>
              </ul>
              <div className="flex justify-center items-center">
                {/* Search part Start  */}
                <div className="relative flex justify-center items-center mr-3">
                  <input
                    className=" py-1.5 px-5 outline-1 outline-gray-200 bg-[#F5F5F5]"
                    type="text"
                    size={"27"}
                    placeholder="What are you looking for?"
                  />
                  <FiSearch className="absolute right-5 text-xl " />
                </div>
                {/* Search part End  */}
                <FiHeart className=" text-xl mr-3" />
                <GoPerson className=" text-xl mr-3" />
                <FiShoppingCart
                  className=" text-xl hover:cursor-pointer "
                  onClick={() => setExpand(!isExpand)}
                />
              </div>
            </Flex>
            {isExpand && (
              <div className="absolute top-15 right-0 z-10 w-[450px] h-[600px] bg-gray-100 ">
                <div className="flex justify-between border-b-2 border-gray-200 pb-3 mb-5 px-10 mt-10">
                  <h3 className="text-2xl font-semibold mb-5">Shopping Cart</h3>
                  <ImCross
                    className=" text-lg hover:cursor-pointer"
                    onClick={() => setExpand(false)}
                  />
                </div>
                <div className="flex justify-between px-10">
                  <h6 className="text-lg font-semibold">Items</h6>
                  <p className="text-base text-amber-600 font-medium">Clear All</p>
                </div>
              </div>
            )}
          </Container>
        </div>
        {/* Header Lower Part End  */}
      </div>
    </>
  );
};

export default Header;
