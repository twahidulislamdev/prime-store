import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";

import BannerOne from "/src/assets/bannerOne.png";
import BannerTwo from "/src/assets/bannerTwo.png";
import BannerThree from "/src/assets/bannerThree.png";
import BannerWatch from "/src/assets/bannerWatch.png";
import BannerAirpods from "/src/assets/bannerAirPods.png";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // for dots

const Banner = () => {
  return (
    <section className="w-full py-5 md:py-5 lg:py-5 px-3 overflow-hidden">
      <Container>
        <Flex className="flex-col md:flex-col lg:flex-row lg:gap-5">
          {/* Left Slider – now using Swiper */}
          <div className="w-full md:w-full lg:w-[65%] rounded-lg overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true} // = infinite
              autoplay={{
                delay: 3500,
                disableOnInteraction: false, // keep playing even after user swipe
              }}
              pagination={{
                clickable: true,
              }}
              speed={500}
              className="mySwiper" // optional – for custom styling if needed
            >
              <SwiperSlide>
                <Image
                  imgClassName="w-full h-[280px] md:h-[350px] lg:h-[500px] object-cover rounded-lg"
                  imgSrc={BannerOne}
                  alt="Banner One"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  imgClassName="w-full h-[280px] md:h-[350px] lg:h-[500px] object-cover rounded-lg"
                  imgSrc={BannerTwo}
                  alt="Banner Two"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Image
                  imgClassName="w-full h-[280px] md:h-[350px] lg:h-[500px] object-cover rounded-lg"
                  imgSrc={BannerThree}
                  alt="Banner Three"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right Static Banners – unchanged */}
          <div className="w-full md:w-full lg:w-[35%] h-auto lg:h-[500px] flex justify-between lg:flex-col items-center mt-2 md:mt-3 lg:mt-0 gap-y-5 ">
            <div className="w-[49%] lg:w-full h-[110px] md:h-[200px] lg:h-[48%] ">
              <Image
                imgClassName="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                imgSrc={BannerWatch}
                alt="Watch Promotion"
              />
            </div>
            <div className="w-[49%] lg:w-full h-[110px] md:h-[200px] lg:h-[48%]">
              <Image
                imgClassName="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                imgSrc={BannerAirpods}
                alt="AirPods Promotion"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
