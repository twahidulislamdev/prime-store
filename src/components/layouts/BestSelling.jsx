import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import HomeProduct from "../HomeProduct";
import PhoneOne from "../../assets/phoneOne.jpg";
import PhoneTwo from "../../assets/phoneTwo.jpg";
import PhoneThree from "../../assets/phoneThree.jpg";
import PhoneFour from "../../assets/phoneFour.jpg";
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
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 1500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 3500,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // large devices (lg)
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 768, // medium devices (md)
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 640, // small devices (sm)
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: true,
  //         centerMode: true,
  //         centerPadding: "0px",
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className="w-full m-auto lg:px-0 mt-5 lg:mt-0">
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
            <div className="flex justify-between flex-wrap">
              {/* <Slider className="pb-5" {...settings}> */}
                <div>
                  <HomeProduct
                    title={"iPhone 16 Pro"}
                    price={29.0}
                    imgSrcFirst={PhoneFive}
                    imgAlt={"Arive Five"}
                    badgeText={"New"}
                    badgeClassName={"bg-neutral-200"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"Galaxy S25 Ultra 5G"}
                    price={1400}
                    imgSrcFirst={PhoneOne}
                    imgAlt={"Arive One"}
                    badgeText={"New"}
                    badgeClassName={"bg-neutral-200"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"iPhone 16 Pro"}
                    price={29.0}
                    imgSrcFirst={PhoneSix}
                    imgAlt={"Arive Five"}
                    badgeText={"New"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"Galaxy S25 Ultra 5G"}
                    price={49.0}
                    imgSrcFirst={PhoneTwo}
                    imgAlt="Arive Two"
                    badgeText={"10%"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"Galaxy S25 5G"}
                    price={17.0}
                    imgSrcFirst={PhoneSeven}
                    imgAlt={"Arive Seven"}
                    badgeText={"New"}
                    productColor={"White"}
                    badgeClassName={"bg-neutral-200"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"Galaxy A56 5G"}
                    price={49.0}
                    imgSrcFirst={PhoneEight}
                    imgAlt={"Arive Eight"}
                    badgeText={"10%"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"Galaxy A36 5G"}
                    price={49.0}
                    imgSrcFirst={PhoneNine}
                    imgAlt={"Arive Nine"}
                    badgeText={"10%"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"iPhone 16e"}
                    price={49.0}
                    imgSrcFirst={PhoneTen}
                    imgAlt={"Arive Ten"}
                    badgeText={"10%"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"iPhone 16"}
                    price={49.0}
                    imgSrcFirst={PhoneEleven}
                    imgAlt={"Arive Eleven"}
                    badgeText={"10%"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
                <div>
                  <HomeProduct
                    title={"Pixel 9 Pro XL"}
                    price={49.0}
                    imgSrcFirst={PhoneTwelve}
                    imgAlt={"Arive Twelve"}
                    badgeText={"10%"}
                    productColor={"Black"}
                    badgeClassName={"bg-green-300"}
                  />
                </div>
              {/* </Slider> */}
            </div>
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
