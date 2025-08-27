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
import Flex from "../Flex";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <>
      <div className="py-[50px]">
        <Container>
          {/* Top small Heading Start  */}
          <div className="flex justify-start items-center space-x-2">
            <div className="w-4 h-7 bg-mainColor rounded-sm"></div>
            <h6 className="text-base text-mainColor font-semibold">
              Categories
            </h6>
          </div>
          {/* Top small Heading End  */}
          {/* Category part title start */}
          <div className="flex justify-between items-center">
            <h3 className="text-[35px] font-semibold pt-5">
              Browse By Category
            </h3>
            {/* <div className="flex space-x-2">
              <PrevArrow />
              <NextArrow />
            </div> */}
          </div>
          {/* Category part title End */}

          <div className="mt-10">
            <Slider className="pb-5" {...settings}>
              <div>
                <CategoryItem
                  imgSrc={Phones}
                  imgAlt={"items"}
                  categoryName={"Phones"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={Laptops}
                  imgAlt={"items"}
                  categoryName={"Laptops"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={Tablets}
                  imgAlt={"items"}
                  categoryName={"Tablets"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={Watchs}
                  imgAlt={"items"}
                  categoryName={"Watchs"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={Camera}
                  imgAlt={"items"}
                  categoryName={"Camera"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={EarBuds}
                  imgAlt={"items"}
                  categoryName={"EarBuds"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={Gaming}
                  imgAlt={"items"}
                  categoryName={"Gaming"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={Speakers}
                  imgAlt={"items"}
                  categoryName={"Speakers"}
                />
              </div>
              <div className="">
                <CategoryItem
                  imgSrc={PowerBank}
                  imgAlt={"items"}
                  categoryName={"Power Bank"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Categories;
