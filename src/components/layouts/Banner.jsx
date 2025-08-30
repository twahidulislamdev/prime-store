import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import BannerOne from "/src/assets/bannerOne.jpg";
import BannerTwo from "/src/assets/bannerTwo.jpg";
import BannerThree from "/src/assets/bannerThree.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhoneDropDown from "./PhoneDropDown";
import LaptopDropDown from "./LaptopDropDown";

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
            <div className="w-[20%]">
              <div className="space-y-4 pr-5">
                {/* First Item Start  */}
                <PhoneDropDown/>
                {/* First Item End  */}
                {/* First Item Start  */}
                <LaptopDropDown/>
                {/* First Item End  */}
                
                <li className="text-lg">Men’s Fashion</li>
                <li className="text-lg">Electronics</li>
                <li className="text-lg">Home & Lifestyle</li>
                <li className="text-lg">Medicine</li>
                <li className="text-lg">Sports & Outdoor</li>
                <li className="text-lg">Baby’s & Toys</li>
                <li className="text-lg">Groceries & Pets</li>
                <li className="text-lg">Health & Beauty</li>
                <li className="text-lg">Health & Beauty</li>
              </div>
            </div>
            {/* Left Part End  */}

            {/* Right Part Start  */}

            <div className="w-[80%] slider-container">
              <Slider {...settings}>
                <div className="">
                  <Image imgClassName={""} imgSrc={BannerOne} />
                </div>
                <div className="">
                  <Image imgClassName={""} imgSrc={BannerTwo} />
                </div>
                <div className="">
                  <Image imgClassName={""} imgSrc={BannerThree} />
                </div>
              </Slider>
            </div>

            {/* Right Part End  */}
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
