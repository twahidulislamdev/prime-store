import { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

import {
  FaRegUser,
  FaRegHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineShoppingBag, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { NavLink, Link } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "PAGES", path: "/pages" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [ isMenuOpen]);

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <div className="hidden lg:block w-full py-5">
        <Container className="px-4">
          <Flex className="justify-between items-center">
            <Link to="/">
              <h3 className="text-2xl font-bold">
                Prime <span className="text-mainColor">Store</span>
              </h3>
            </Link>

            <ul className="flex items-center gap-x-10">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.path}
                    end
                    className={({ isActive }) =>
                      `relative py-2 text-sm font-medium transition ${
                        isActive ? "text-black" : "text-gray-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}

                        <span
                          className={`absolute left-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Flex>
        </Container>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="w-full bg-white shadow-sm lg:hidden sticky top-0 z-40">
        <Container>
          <Flex className="justify-between items-center py-3 px-3">
            <Link to="/">
              <h3 className="text-lg font-semibold">
                Prime <span className="text-red-500">Store</span>
              </h3>
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2"
            >
              <FaBars className="text-2xl" />
            </button>
          </Flex>
        </Container>

        {/* Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/40 transition ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* ================= FULLSCREEN MENU ================= */}
        <aside
          className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center px-5 py-5 border-b">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <nav className="px-6 py-6">
            <ul className="space-y-2">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <NavLink
                    to={item.path}
                    end
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl transition ${
                        isActive
                          ? "bg-gray-100 text-black"
                          : "text-gray-600"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="text-sm font-medium">
                          {item.name}
                        </span>

                        {isActive && (
                          <span className="text-black">→</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* ================= LOWER HEADER ================= */}
      <div className="w-full flex justify-center bg-[#F5F5F3] py-4 shadow-sm">
        <Container>
          <div className="flex justify-between items-center">
            <HiMiniBars3CenterLeft className="text-2xl cursor-pointer" />

            <div className="flex-1 mx-4 flex justify-center">
              <input
                className="w-full max-w-[500px] py-2 px-3 border rounded-md bg-[#F5F5F5]"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>

            <div className="flex items-center gap-4">
              <FaRegHeart className="text-xl cursor-pointer" />
              <FaRegUser className="text-xl cursor-pointer" />
              <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;