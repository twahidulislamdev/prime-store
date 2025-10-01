import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BestSelling = () => {
  let [myProduct, setMyProduct] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
  };

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
      <div className="py-[50px] ">
        <Container>
          <div className="">
            <div className="flex justify-start items-center space-x-2">
              <div className="w-4 h-7 bg-mainColor rounded-sm"></div>
              <h6 className="text-base text-mainColor font-semibold">
                This Month
              </h6>
            </div>
            <div className="flex justify-between items-center pt-5">
              <h3 className="text-[25px] lg:text-[35px] font-semibold ">
                Best Selling Products
              </h3>
              <div className="w-[100px] py-2 bg-mainColor space-x-2 rounded-sm">
                <p className="text-center text-white font-semibold ">
                  View All
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <Slider {...settings}>
              {myProduct.map((item) => (
                <div key={item.id}>
                  <Product
                    title={item.title}
                    price={item.price}
                    // productColor={"Black"}
                    imgSrc={item.image}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;
