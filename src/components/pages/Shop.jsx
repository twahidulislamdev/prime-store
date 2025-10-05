import React, { useEffect, useState } from "react";
import Flex from "../Flex";
import Container from "../Container";
import axios from "axios";
import ShopProduct from "../ShopProduct";

const Shop = () => {
    const [myProduct, setMyProdyct] = useState([]);
    useEffect(() => {
        async function allDatas() {
            let data = await axios.get(
                "https://twahidulislamdev.github.io/product-aip/data/products/index.json"
            );
            setMyProdyct(data.data.products);
            // console.log(data.data.products);
        }
        allDatas();
    }, []);
    return (
        <>
            <div className="py-10">
                <Container>
                    <Flex className={"justify-between"}>
                        <div className="w-[20%]"></div>
                        <div className="w-[75%]">
                            <Flex className={"justify-between flex-wrap gap-y-5"}>
                                {myProduct.map((item) => (
                                    <ShopProduct
                                        className={""}
                                        title={item.title}
                                        price={item.price}
                                        imgSrcFirst={item.image}
                                        imgAlt={"Arive One"}
                                        text={"New"}
                                        brand={item.brand}
                                        category={item.category}
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
