import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import TitaniumBlack from "/src/assets/titaniumBlack.jpg";

const BestSelling = () => {
  return (
    <>
      <div className="py-[50px] ">
        <Container>
          <div className="flex justify-start items-center space-x-2">
            <div className="w-4 h-7 bg-mainColor rounded-sm"></div>
            <h6 className="text-base text-mainColor font-semibold">
              This Month
            </h6>
          </div>
          <div className="flex justify-between items-center pt-5">
            <h3 className="text-[35px] font-semibold ">
              Best Selling Products
            </h3>
            <div className="w-[100px] py-2 bg-mainColor space-x-2 rounded-sm">
              <p className="text-center text-white font-semibold ">View All</p>
            </div>
          </div>
          <div className="mt-5">
            <Flex className={"justify-between items-center"}>
              <Product
                title={"Galaxy S25 Ultra 5G"}
                price={"210000"}
                productColor={"Black"}
                imgSrc={TitaniumBlack}
                badgeText={"10%"}
                badgeClassName={"bg-black text-white"}
              />
              <Product
                title={"Galaxy S25 Ultra 5G"}
                price={"210000"}
                imgSrc={TitaniumBlack}
                badgeText={"10%"}
                badgeClassName={"bg-black text-white"}
              />
              <Product
                title={"Galaxy S25 Ultra 5G"}
                price={"210000"}
                imgSrc={TitaniumBlack}
                badgeText={"10%"}
                badgeClassName={"bg-black text-white"}
              />
              <Product
                title={"Galaxy S25 Ultra 5G"}
                price={"210000"}
                imgSrc={TitaniumBlack}
                badgeText={"10%"}
                badgeClassName={"bg-black text-white"}
              />
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;
