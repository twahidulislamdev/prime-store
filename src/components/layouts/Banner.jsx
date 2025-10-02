import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import BannerOne from "/src/assets/bannerOne.png";
import BannerTwo from "/src/assets/bannerTwo.png";
import BannerThree from "/src/assets/bannerThree.png";
import BannerWatch from "/src/assets/bannerWatch.png";
import BannerAirpods from "/src/assets/bannerAirPods.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
        }
      }
    ]
  };

  return (
    <section className="py-5 md:py-8 lg:py-10 overflow-hidden flex justify-center m-auto">
  <Container>
    <Flex className="flex-col md:flex-col lg:flex-row lg:gap-6 ml-1.5">
      {/* Left Slider */}
      <div className="w-[400px] md:w-full lg:w-[65%] slider-container rounded-lg overflow-hidden">
        <Slider {...settings}>
          <div className="w-[380px] md:w-full flex justify-center items-center m-auto rounded-lg">
            <Image
              imgClassName="w-full h-[280px] md:h-[350px] lg:h-[500px] object-cover rounded-lg"
              imgSrc={BannerOne}
            />
          </div>
          <div className="w-full rounded-lg">
            <Image
              imgClassName="w-full h-[280px] md:h-[350px] lg:h-[500px] object-cover rounded-lg"
              imgSrc={BannerTwo}
            />
          </div>
          <div className="w-full rounded-lg">
            <Image
              imgClassName="w-full h-[280px] md:h-[350px] lg:h-[500px] object-cover rounded-lg"
              imgSrc={BannerThree}
            />
          </div>
        </Slider>
      </div>

      {/* Right Static Banners */}
      <div className="w-[400px] md:w-full lg:w-[35%] h-auto lg:h-[500px] flex flex-row lg:flex-col gap-2 md:mt-3 lg:mt-0">
        <div className="w-1/2 lg:w-full h-[120px] md:h-[200px] lg:h-[49%]">
          <Image
            imgClassName="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            imgSrc={BannerWatch}
          />
        </div>
        <div className="w-1/2 lg:w-full h-[120px] md:h-[200px] lg:h-[49%]">
          <Image
            imgClassName="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            imgSrc={BannerAirpods}
          />
        </div>
      </div>
    </Flex>
  </Container>
</section>

  );
};

export default Banner;