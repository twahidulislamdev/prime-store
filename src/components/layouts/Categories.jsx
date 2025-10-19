import React from "react";
import Container from "../Container";
import CategoryItem from "../CategoryItem";
import Phones from "/src/assets/phones.png";
import Laptops from "/src/assets/laptops.png";
import Tablets from "/src/assets/tablets.png";
import Watchs from "/src/assets/watchs.png";
import Camera from "/src/assets/camera.png";
import EarBuds from "/src/assets/earBuds.png";
import Gaming from "/src/assets/gaming.png";
import Speakers from "/src/assets/speakers.png";
import PowerBank from "/src/assets/powerBank.png";

const Categories = () => {
  return (
    <div className="w-full flex justify-center lg:justify-between items-center py-15 md:py-20 lg:py-15 overflow-hidden ">
      <Container className={""}>
        {/* Top small Heading */}
        <div className="w-full flex space-x-2 pl-2 lg:px-0 pb-3 ">
          <div className="w-3 h-6 sm:w-4 sm:h-7 bg-mainColor rounded-sm"></div>
          <h6 className="text-sm sm:text-base text-mainColor font-semibold">
            Categories
          </h6>
        </div>

        {/* Section Title */}
        <div className="w-full md:w-full lg:w-full flex justify-between items-center px-3 lg:px-0">
          <h3 className="text-xl md:text-2xl lg:text-4xl text font-semibold">
            Browse By <span className="text-mainColor">Category</span>
          </h3>
          <p className="px-5 py-2 bg-mainColor text-white rounded ">View All</p>
        </div>

        {/* Responsive Grid */}
        <div className="w-full md:w-full md:h-full lg:w-full mt-8 flex justify-between items-center flex-wrap gap-x-10 lg:gap-x-5 gap-y-5 px-3 lg:px-0">
          <CategoryItem imgSrc={Phones} imgAlt="items" categoryName="Phones" />
          <CategoryItem imgSrc={Laptops} imgAlt="items" categoryName="Laptops" />
          <CategoryItem imgSrc={Tablets} imgAlt="items" categoryName="Tablets" />
          <CategoryItem imgSrc={Watchs} imgAlt="items" categoryName="Watchs" />
          <CategoryItem imgSrc={Camera} imgAlt="items" categoryName="Camera" />
          <CategoryItem imgSrc={EarBuds} imgAlt="items" categoryName="EarBuds" />
          <CategoryItem imgSrc={Gaming} imgAlt="items" categoryName="Gaming" />
          <CategoryItem imgSrc={Speakers} imgAlt="items" categoryName="Speakers" />
          <CategoryItem imgSrc={PowerBank} imgAlt="items" categoryName="Power Bank" />
        </div>
      </Container>
    </div>
  );
};

export default Categories;
