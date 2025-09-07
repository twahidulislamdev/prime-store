import React, { useEffect, useState } from "react";
import Flex from "../Flex";
import Container from "../Container";
import Product from "../Product";
import TitaniumBlack from "/src/assets/titaniumBlack.jpg";
import axios from "axios";

const Shop = () => {
  let [myProduct, setMyProduct] = useState([]);
  useEffect(() => {
    async function allDatas() {
      let data = await axios.get(
        "https://twahidulislamdev.github.io/product-aip/data/products/index.json"
      );
      setMyProduct(data.data.products);
      console.log(data.data.data);
    }
    allDatas();
  }, []);
  return (
    <>
      <div className="py-10">
        <Container>
          <Flex>
            <div className="w-[20%]"></div>
            <div className="w-[80%]">
              <Flex className={"justify-between flex-wrap gap-y-5"}>
                {myProduct.map((item) => (
                  <Product
                    className={""}
                    title={item.title}
                    price={item.price}
                    imgSrc={item.image}
                  />
                ))}
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Shop;
