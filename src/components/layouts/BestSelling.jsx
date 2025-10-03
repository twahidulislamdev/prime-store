import React, { useEffect, useState } from "react";
import Container from "../Container";
import Product from "../Product";
import axios from "axios";

const BestSelling = () => {
  const [myProduct, setMyProduct] = useState([]);

  useEffect(() => {
    async function allDatas() {
      let data = await axios.get(
        "https://twahidulislamdev.github.io/product-aip/data/products/index.json"
      );
      setMyProduct(data.data.products);
    }
    allDatas();
  }, []);

  return (
    <>
      <div className="w-full py-[50px] ">
        <Container>
          <div>
            <div className="flex justify-start items-center space-x-2">
              <div className="w-4 h-7 bg-mainColor rounded-sm"></div>
              <h6 className="text-base text-mainColor font-semibold">This Month</h6>
            </div>
            <div className="flex justify-between items-center pt-5">
              <h3 className="text-[25px] lg:text-[35px] font-semibold">
                Best Selling Products
              </h3>
              <div className="w-[100px] py-2 bg-mainColor rounded-sm cursor-pointer">
                <p className="text-center text-white font-semibold ">View All</p>
              </div>
            </div>
          </div>

          {/* Responsive grid layout */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myProduct.map((item) => (
              <div key={item.id} className="w-full">
                <Product
                  title={item.title}
                  price={item.price}
                  imgSrc={item.image}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;
