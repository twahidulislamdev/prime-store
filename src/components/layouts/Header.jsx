import { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

import {
  FaRegUser,
  FaRegHeart,
  FaBars,
  FaTimes,
  FaGoogle,
} from "react-icons/fa";
import {
  HiOutlineShoppingBag,
  HiMiniBars3CenterLeft,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "PAGES", path: "/pages" },
  ];

  useEffect(() => {
    if (isCartOpen || isUserOpen || isCategoryOpen || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen, isUserOpen, isCategoryOpen, isMenuOpen]);

  return (
    <>
      {/* Desktop Header start */}
      <div className="hidden lg:block w-full overflow-x-hidden py-5">
        <Container className="px-4">
          <Flex className="justify-between items-center">
            <Link to={"/"}>
              <h3 className="text-2xl font-bold">
                Prime <span className="text-mainColor">Store</span>
              </h3>
            </Link>
            <ul className="flex flex-wrap items-center gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-12">
              {menuItems.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  <li className="relative list-none py-2 text-sm text-black font-medium group cursor-pointer transition-all ease-in-out">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </Flex>
        </Container>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="w-full bg-white shadow-sm lg:hidden sticky top-0 z-40">
        <Container>
          <Flex className="justify-between items-center py-3 px-3">
            <Link to="/" className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">
                Prime <span className="text-red-500">Store</span>
              </h3>
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FaBars className="text-2xl text-gray-700" />
            </button>
          </Flex>
        </Container>

        {/* Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* ================= NEW FULLSCREEN DRAWER (YOUR REQUESTED STYLE) ================= */}
        <aside
          className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              Navigation
            </h3>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FaTimes className="text-2xl text-gray-800" />
            </button>
          </div>

          {/* Menu */}
          <nav className="px-6 py-6">
            <ul className="space-y-2">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition"
                  >
                    <span className="font-medium text-sm flex-1">
                      {item.name}
                    </span>
                    <span className="text-gray-400">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto px-6 py-4 border text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Prime Store
          </div>
        </aside>
      </div>

      {/* Header Lower Part Start */}
      <div className="w-full flex justify-center m-auto px-4 py-4 bg-[#F5F5F3] shadow-sm overflow-x-hidden">
        <Container>
          <div className="flex flex-wrap justify-between items-center">
            <HiMiniBars3CenterLeft
              onClick={() => setIsCategoryOpen(true)}
              className="text-2xl cursor-pointer"
            />

            <div className="flex-1 mx-3 lg:mx-8 flex justify-center items-center">
              <input
                className="w-full max-w-[500px] py-2 px-3 rounded-md border border-gray-300 outline-1 outline-gray-300 bg-[#F5F5F5] text-sm"
                type="text"
                placeholder="What are you looking?"
              />
            </div>

            <div className="flex items-center gap-x-4 lg:gap-x-8">
              <FaRegHeart className="text-xl cursor-pointer" />
              <FaRegUser
                onClick={() => setIsUserOpen(true)}
                className="text-xl cursor-pointer"
              />
              <HiOutlineShoppingBag
                onClick={() => setIsCartOpen(true)}
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* User Sidebar */}
      {isUserOpen && (
        <div className="fixed top-0 right-0 w-[98%] lg:w-[500px] h-screen p-7 lg:p-10 bg-white shadow-lg z-50">
          <div className="flex justify-between items-center mb-5">
            <h4 className="text-lg font-medium">LOGIN</h4>
            <GrClose
              onClick={() => setIsUserOpen(false)}
              className="text-xl cursor-pointer"
            />
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-full lg:w-[500px] h-[100vh] px-2 lg:px-5 py-5 bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-xl font-medium">SHOPPING BAG</h4>
            <GrClose
              onClick={() => setIsCartOpen(false)}
              className="text-xl font-bold cursor-pointer mr-3 lg:mr-0"
            />
          </div>
        </div>
      )}

      {/* Category Sidebar */}
      {isCategoryOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50">
          <div className="flex">
            <div className="w-[50%] h-screen hidden lg:block">
              <Image className={"w-full h-full"} imgSrc={""} imgAlt={""} />
            </div>
            <div className="w-full lg:w-[50%] p-5 lg:p-10">
              <div className="flex justify-between items-center">
                <div className="flex gap-x-5 lg:gap-x-10">
                  <h5 className="py-2 px-5 border-2 border-gray-300">
                    WOMEN
                  </h5>
                  <h6 className="py-2 px-5 border-2 border-gray-300">
                    MAN
                  </h6>
                  <p className="py-2 px-5 border-2 border-gray-300">
                    KIDS
                  </p>
                </div>
                <GrClose
                  onClick={() => setIsCategoryOpen(false)}
                  className="text-xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;