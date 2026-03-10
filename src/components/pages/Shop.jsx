import React, { useEffect, useState } from "react";
import Flex from "../Flex";
import Container from "../Container";
import axios from "axios";
import ShopProduct from "../ShopProduct";

const Shop = () => {
  const [myProduct, setMyProduct] = useState([]); // ← fixed typo

  useEffect(() => {
    async function allDatas() {
      try {
        let { data } = await axios.get(
          "https://twahidulislamdev.github.io/product-aip/data/products/index.json",
        );
        setMyProduct(data.products); // ← most APIs return { products: [...] }
      } catch (err) {
        console.error("Failed to load products:", err);
      }
    }
    allDatas();
  }, []);

  return (
    <div className="w-full py-10  lg:mx-0 overflow-x-hidden">
      <Container>
        <Flex className="justify-between">
          <div className="hidden lg:block lg:w-[20%]">
            {/* Sidebar - hidden on mobile */}
          </div>

          <div className="w-full lg:w-[75%] mx-3">
            {/* Product grid - responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-5">
              {myProduct.map((item, index) => (
                <ShopProduct
                  key={index} // better to use item.id if available
                  className="w-full" // important: let grid control width
                  title={item.title}
                  price={item.price}
                  imgSrcFirst={item.image}
                  imgAlt={item.title || "Product Image"}
                  text={"New"}
                  brand={item.brand}
                  category={item.category}
                />
              ))}
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
