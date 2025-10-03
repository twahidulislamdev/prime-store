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
// import axios from "axios";

const BestSelling = () => {
  // const [myProduct, setMyProduct] = useState([]);

  // useEffect(() => {
  //   async function allDatas() {
  //     let data = await axios.get(
  //       "https://twahidulislamdev.github.io/product-aip/data/products/index.json"
  //     );
  //     setMyProduct(data.data.products);
  //   }
  //   allDatas();
  // }, []);

  return (
    <>
     <div className="w-[96%] m-auto flex justify-center  px-0 lg:px-0 mt-5 lg:mt-0  py-10 lg:py-16 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Trending
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mt-5">
            {["ALL", "WOMEN", "MAN", "KIDS"].map((item, idx) => (
              <li
                key={idx}
                className="relative group px-2 py-1 text-sm md:text-base font-medium text-seconderyColor hover:text-mainColor cursor-pointer"
              >
                {item}
                <span
                  className="absolute left-0 bottom-0 h-0.5 bg-black w-0 
                  group-hover:w-full transition-all duration-300 ease-in-out"
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Slider */}
        <div className="mt-10 flex justify-center items-center gap-6 lg:gap-4 flex-wrap">
          {/* <Slider className="pb-5" {...settings}> */}
            <div>
              <HomeProduct
                imgSrcFirst={PhoneOne}
                imgAlt={"Arive One"}
                badgeText={"New"}
                title={"Cropped Faux Leather Jacket"}
                price={29.00}
                productColor={"Gray"}
                badgeClassName={"bg-neutral-200"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneTwo}
                imgAlt="Arive Two"
                badgeText={"10%"}
                title={"Calvin Shorts"}
                price={49.00}
                productColor={"White"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneThree}
                imgAlt="Arive Three"
                badgeText={"New"}
                title={"Kirby T-Shirt"}
                price={17.00}
                productColor={"Black"}
                badgeClassName={"bg-neutral-200"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneFour}
                imgAlt="Arive Four"
                badgeText={"10%"}
                title={"Cableknit Shawl"}
                price={99.00}
                productColor={"White"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneFive}
                imgAlt="Arive Five"
                badgeText={"New"}
                title={"Colorful Jacket"}
                price={29.00}
                productColor={"Black"}
                badgeClassName={"bg-neutral-200"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneSix}
                imgAlt="Arive Six"
                badgeText={"10%"}
                title={"Shirt In Botanical Cheetah "}
                price={52.00}
                productColor={"White"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneSeven}
                imgAlt="Arive Seven"
                badgeText={"New"}
                title={"Cotton Jersey T-Shirt"}
                price={17.00}
                productColor={"White"}
                badgeClassName={"bg-neutral-200"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneEight}
                imgAlt="Arive Eight"
                badgeText={"10%"}
                title={"Zessi Dresses"}
                price={49.00}
                productColor={"Black"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneNine}
                imgAlt="Arive Nine"
                badgeText={"10%"}
                title={"Zessi Dresses"}
                price={49.00}
                productColor={"Black"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneTen}
                imgAlt="Arive Ten"
                badgeText={"10%"}
                title={"Zessi Dresses"}
                price={49.00}
                productColor={"Black"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneEleven}
                imgAlt="Arive Eleven"
                badgeText={"10%"}
                title={"Zessi Dresses"}
                price={49.00}
                productColor={"Black"}
                badgeClassName={"bg-green-300"}
              />
            </div>
            <div>
              <HomeProduct
                imgSrcFirst={PhoneTwelve}
                imgAlt="Arive Twelve"
                badgeText={"10%"}
                title={"Zessi Dresses"}
                price={49.00}
                productColor={"Black"}
                badgeClassName={"bg-green-300"}
              />
            </div>
          {/* </Slider> */}
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
