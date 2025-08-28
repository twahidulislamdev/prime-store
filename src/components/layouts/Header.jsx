import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

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
          </Container>
        </div>
        {/* Header Lower Part End  */}

        {isExpand && (
          <div className="absolute top-40 right-0 z-10 w-[400px] h-screen bg-gray-200 p-10 ">
            <div className="flex justify-between">
              <h6>Samsung Galaxy S25 ultra</h6>
              <p>01</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
