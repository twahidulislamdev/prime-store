import React from "react";
import Container from "../Container";
import HomeProduct from "../HomeProduct";
import PhoneOne from "../../assets/phoneOne.jpg";
import PhoneTwo from "../../assets/phoneTwo.jpg";
import PhoneFive from "../../assets/phoneFive.jpg";
import PhoneSix from "../../assets/phoneSix.jpg";
import PhoneSeven from "../../assets/phoneSeven.jpg";
import PhoneEight from "../../assets/phoneEight.jpg";
import PhoneNine from "../../assets/phoneNine.jpg";
import PhoneTen from "../../assets/phoneTen.jpg";
import PhoneEleven from "../../assets/phoneEleven.jpg";
import PhoneTwelve from "../../assets/phoneTwelve.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestSelling = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    // prevArrow: <TestiPrevArrow />,
    // nextArrow: <TestiNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768, // large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640, // small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full m-auto lg:px-0 mt-5 lg:mt-0 overflow-hidden">
        <Container>
          {/* Heading */}
          <div className="w-full flex space-x-2 px-2 lg:px-0 pb-3 ">
            <div className="w-3 h-6 sm:w-4 sm:h-7 bg-mainColor rounded-sm"></div>
            <h6 className="text-sm sm:text-base text-mainColor font-semibold">
              This Month
            </h6>
          </div>
          <div className="w-full px-3 text-start">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Best Selling Products
            </h3>
          </div>

          {/* Products Slider */}
          <div className="w-full mt-10">
            <Slider {...settings}>
              <div key="1" className="px-2">
                <HomeProduct
                  title={"iPhone 16 Pro"}
                  price={29.0}
                  imgSrcFirst={PhoneFive}
                  imgAlt={"iPhone 16 Pro"}
                  badgeText={"New"}
                  badgeClassName={"bg-neutral-200"}
                />
              </div>
              <div key="2" className="px-2">
                <HomeProduct
                  title={"Galaxy S25 Ultra 5G"}
                  price={1400}
                  imgSrcFirst={PhoneOne}
                  imgAlt={"Galaxy S25 Ultra 5G"}
                  badgeText={"New"}
                  badgeClassName={"bg-neutral-200"}
                />
              </div>
              <div key="3" className="px-2">
                <HomeProduct
                  title={"iPhone 16 Pro"}
                  price={29.0}
                  imgSrcFirst={PhoneSix}
                  imgAlt={"iPhone 16 Pro"}
                  badgeText={"New"}
                  badgeClassName={"bg-green-300"}
                />
              </div>
              <div key="4" className="px-2">
                <HomeProduct
                  title={"Galaxy S25 Ultra 5G"}
                  price={49.0}
                  imgSrcFirst={PhoneTwo}
                  imgAlt="Galaxy S25 Ultra 5G"
                  badgeText={"10%"}
                  badgeClassName={"bg-green-300"}
                />
              </div>
              <div key="5" className="px-2">
                <HomeProduct
                  title={"Galaxy S25 5G"}
                  price={17.0}
                  imgSrcFirst={PhoneSeven}
                  imgAlt={"Galaxy S25 5G"}
                  badgeText={"New"}
                  badgeClassName={"bg-neutral-200"}
                />
              </div>
              <div key="6" className="px-2">
                <HomeProduct
                  title={"Galaxy A56 5G"}
                  price={49.0}
                  imgSrcFirst={PhoneEight}
                  imgAlt={"Galaxy A56 5G"}
                  badgeText={"10%"}
                  badgeClassName={"bg-green-300"}
                />
              </div>
              <div key="7" className="px-2">
                <HomeProduct
                  title={"Galaxy A36 5G"}
                  price={49.0}
                  imgSrcFirst={PhoneNine}
                  imgAlt={"Galaxy A36 5G"}
                  badgeText={"10%"}
                  badgeClassName={"bg-green-300"}
                />
              </div>
              <div key="8" className="px-2">
                <HomeProduct
                  title={"iPhone 16e"}
                  price={49.0}
                  imgSrcFirst={PhoneTen}
                  imgAlt={"iPhone 16e"}
                  badgeText={"10%"}
                  badgeClassName={"bg-green-300"}
                />
              </div>
            </Slider>
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-6">
            <Link to="/shop">
              <button className="relative px-0 py-2 text-black text-sm md:text-base font-medium group cursor-pointer">
                <span className="group-hover:text-black transition-colors duration-300">
                  SEE MORE
                </span>
                <span
                  className="absolute left-0 bottom-0 h-0.5 bg-black 
                w-1/3 group-hover:w-full transition-all duration-300 ease-in-out"
                ></span>
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;