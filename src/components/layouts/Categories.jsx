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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs / mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <Container>
        {/* Top small Heading */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-6 sm:w-4 sm:h-7 bg-mainColor rounded-sm"></div>
          <h6 className="text-sm sm:text-base text-mainColor font-semibold">
            Categories
          </h6>
        </div>

        {/* Section Title */}
        <div className="flex justify-between items-center pt-4 sm:pt-6">
          <h3 className="text-2xl sm:text-3xl md:text-[35px] font-semibold">
            Browse By Category
          </h3>
        </div>

        {/* Slider */}
        <div className="mt-8 sm:mt-10">
          <Slider className="pb-5" {...settings}>
            <div>
              <CategoryItem imgSrc={Phones} imgAlt="items" categoryName="Phones" />
            </div>
            <div>
              <CategoryItem imgSrc={Laptops} imgAlt="items" categoryName="Laptops" />
            </div>
            <div>
              <CategoryItem imgSrc={Tablets} imgAlt="items" categoryName="Tablets" />
            </div>
            <div>
              <CategoryItem imgSrc={Watchs} imgAlt="items" categoryName="Watchs" />
            </div>
            <div>
              <CategoryItem imgSrc={Camera} imgAlt="items" categoryName="Camera" />
            </div>
            <div>
              <CategoryItem imgSrc={EarBuds} imgAlt="items" categoryName="EarBuds" />
            </div>
            <div>
              <CategoryItem imgSrc={Gaming} imgAlt="items" categoryName="Gaming" />
            </div>
            <div>
              <CategoryItem imgSrc={Speakers} imgAlt="items" categoryName="Speakers" />
            </div>
            <div>
              <CategoryItem imgSrc={PowerBank} imgAlt="items" categoryName="Power Bank" />
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
