import React, { useEffect, useState } from "react";
import Container from "../Container";
import HomeProduct from "../HomeProduct";
import { Link } from "react-router-dom";
import axios from "axios";

const OurProducts = () => {
  const [myProduct, setMyProduct] = useState([]); // ← fixed typo
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function allDatas() {
      try {
        // replace this URL with your own backend endpoint
        const apiEndpoint =
          import.meta.env.VITE_PRODUCTS_API ||
          "https://twahidulislamdev.github.io/product-aip/data/products/index.json";
        let { data } = await axios.get(apiEndpoint);
        setMyProduct(data.products);
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    }
    allDatas();
  }, []);

  return (
    <div className="w-full m-auto lg:px-0 mt-5  overflow-hidden">
      <Container>
        {/* Top Label */}
        <div className="w-full flex space-x-2 pb-3 px-3 lg:px-0">
          <div className="w-3 h-6 sm:w-4 sm:h-7 bg-mainColor rounded-sm"></div>
          <h6 className="text-sm sm:text-base text-mainColor font-semibold ">
            Categories
          </h6>
        </div>

        {/* Section Title */}
        <h3 className="text-xl md:text-2xl lg:text-4xl text font-semibold px-3 lg:px-0">
          Explore Our <span className="text-mainColor">Products</span>
        </h3>

        {/* Products grid retrieved from API */}
        <div className="w-full mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {(showAll ? myProduct : myProduct.slice(0, 8)).map((prod) => (
              <HomeProduct
                key={prod.id}
                title={prod.title}
                price={prod.price}
                imgSrcFirst={prod.image}
                imgAlt={prod.title}
                badgeText={prod.badge}
                badgeClassName={prod.badge ? "bg-green-300" : ""}
              />
            ))}
          </div>
        </div>

        {/* See More toggle */}
        {myProduct.length > 2 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="relative px-0 py-2 text-black text-sm md:text-base font-medium group cursor-pointer"
            >
              <span className="group-hover:text-black transition-colors duration-300">
                {showAll ? "SHOW LESS" : "SEE MORE"}
              </span>
              <span className="absolute left-0 bottom-0 h-0.5 bg-black w-1/3 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default OurProducts;
