import React from "react";
import Banner from "../layouts/Banner";
import Categories from "../layouts/Categories";
import BestSelling from "../layouts/BestSelling";
import LatestOffer from "../layouts/LatestOffer";
import OurProducts from "../layouts/OurProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <BestSelling />
      <LatestOffer />
      <OurProducts />
    </>
  );
};

export default Home;
