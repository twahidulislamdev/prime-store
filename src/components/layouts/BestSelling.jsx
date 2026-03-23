import React, { useRef } from "react";
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
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

const BestSelling = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full m-auto mt-5 overflow-hidden">
      <Container>
        {/* Top Label */}
        <div className="w-full flex space-x-2 px-2 lg:px-0 pb-3">
          <div className="w-3 h-6 sm:w-4 sm:h-7 bg-mainColor rounded-sm"></div>
          <h6 className="text-sm sm:text-base text-mainColor font-semibold">
            This Month
          </h6>
        </div>

        {/* Heading + Navigation */}
        <div className="w-full flex items-center justify-between">
          <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold px-2 lg:px-0">
            Best Selling <span className="text-mainColor">Products</span>
          </h3>

          {/* Arrows only for lg+ */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition duration-300 shadow-sm"
            >
              <FiChevronLeft size={20} />
            </button>

            <button
              ref={nextRef}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition duration-300 shadow-sm"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="w-full mt-5 px-2">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={500}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            <SwiperSlide>
              <HomeProduct
                title="iPhone 16 Pro"
                price={29.0}
                imgSrcFirst={PhoneFive}
                imgAlt="iPhone 16 Pro"
                badgeText="New"
                badgeClassName="bg-neutral-200"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="Galaxy S25 Ultra 5G"
                price={1400}
                imgSrcFirst={PhoneOne}
                imgAlt="Galaxy S25 Ultra 5G"
                badgeText="New"
                badgeClassName="bg-neutral-200"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="iPhone 16 Pro"
                price={29.0}
                imgSrcFirst={PhoneSix}
                imgAlt="iPhone 16 Pro"
                badgeText="New"
                badgeClassName="bg-green-300"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="Galaxy S25 Ultra 5G"
                price={49.0}
                imgSrcFirst={PhoneTwo}
                imgAlt="Galaxy S25 Ultra 5G"
                badgeText="10%"
                badgeClassName="bg-green-300"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="Galaxy S25 5G"
                price={17.0}
                imgSrcFirst={PhoneSeven}
                imgAlt="Galaxy S25 5G"
                badgeText="New"
                badgeClassName="bg-neutral-200"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="Galaxy A56 5G"
                price={49.0}
                imgSrcFirst={PhoneEight}
                imgAlt="Galaxy A56 5G"
                badgeText="10%"
                badgeClassName="bg-green-300"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="Galaxy A36 5G"
                price={49.0}
                imgSrcFirst={PhoneNine}
                imgAlt="Galaxy A36 5G"
                badgeText="10%"
                badgeClassName="bg-green-300"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HomeProduct
                title="iPhone 16e"
                price={49.0}
                imgSrcFirst={PhoneTen}
                imgAlt="iPhone 16e"
                badgeText="10%"
                badgeClassName="bg-green-300"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* See More */}
        <div className="flex justify-center mt-5 ">
          <Link to="/shop">
            <button className="relative text-sm md:text-base font-medium group cursor-pointer px-5 py-2 bg-mainColor text-white rounded">
              <span className="transition-colors duration-300">View All</span>
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BestSelling;
