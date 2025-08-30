import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import BannerOne from "/src/assets/bannerOne.jpg";
import BannerTwo from "/src/assets/bannerTwo.jpg";
import BannerThree from "/src/assets/bannerThree.jpg";
import BannerRedme from "/src/assets/bannerRedmi.jpg";
import BannerWatch from "/src/assets/bannerWatch.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <>
      <div className="py-5">
        <Container>
          <Flex className={"justify-between "}>
            {/* Left Part Start  */}
            <div className="w-[65%]  slider-container rounded-lg">
              <Slider {...settings}>
                <div className="rounded-lg">
                  <Image imgClassName={"h-[500px] w-full"} imgSrc={BannerOne} />
                </div>
                <div className="rounded-lg">
                  <Image imgClassName={"h-[500px] w-full"} imgSrc={BannerTwo} />
                </div>
                <div className="rounded-lg">
                  <Image imgClassName={"h-[500px] w-full"} imgSrc={BannerThree} />
                </div>
              </Slider>
            </div>
            {/* Left Part End  */}

            {/* Right Part Start  */}
            <div className="w-[34%] space-y-2">
              <div className="">
                <Image imgClassName={"h-[245px]"} imgSrc={BannerRedme} />
              </div>
              <div className="">
                <Image imgClassName={"h-[245px]"} imgSrc={BannerWatch} />
              </div>
            </div>
            {/* Right Part End  */}
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
