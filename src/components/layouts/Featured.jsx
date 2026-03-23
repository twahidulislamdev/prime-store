import { useState } from "react";
import Container from "../Container";
import PlayStation from "../../assets/playStation.png";
import SoundBox from "../../assets/soundBox.png";

const banners = [
  {
    id: 1,
    title: "PlayStation 5",
    subtitle: "Black and White version of the PS5 coming out on sale.",
    cta: "Shop Now",
    size: "large",
    img: PlayStation,
    accent: "#0044CC",
  },
  {
    id: 2,
    title: "MacBook Pro",
    subtitle: "Latest M3 chip. Supercharged for pros.",
    cta: "Shop Now",
    size: "wide",
    img: "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/tile/Apple-MacBook-Pro-2up-231030.jpg.landing-big_2x.jpg",
    accent: "#6E6E73",
  },
  {
    id: 3,
    title: "Speakers",
    subtitle: "Amazon wireless speakers",
    cta: "Shop Now",
    size: "small",
    img: SoundBox,
    accent: "#00A0E9",
  },
  {
    id: 4,
    title: "iPhone 16 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    cta: "Shop Now",
    size: "small",
    img: "https://m-cdn.phonearena.com/images/reviews/261748-image/iPhone-16-Pro-Max-natural.webp",
    accent: "#B5AEA2",
  },
];

function BannerCard({ banner, className = "" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ backgroundColor: "#000" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${banner.img})`,
          backgroundSize: "65%",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          filter: "brightness(0.85)",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.25) 70%, transparent 100%)",
        }}
      />

      {/* Accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-out"
        style={{
          width: hovered ? "100%" : "0%",
          backgroundColor: banner.accent,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-5 lg:p-6">
        <h2
          className="font-bold text-white mb-1 leading-tight transition-transform duration-300"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize:
              banner.size === "large"
                ? "clamp(1.4rem, 2vw, 2rem)"
                : banner.size === "wide"
                  ? "clamp(1.1rem, 1.6vw, 1.5rem)"
                  : "clamp(1rem, 1.3vw, 1.2rem)",
            transform: hovered ? "translateY(-3px)" : "translateY(0)",
          }}
        >
          {banner.title}
        </h2>

        <p
          className="text-gray-300 mb-4 leading-snug"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: banner.size === "large" ? "0.875rem" : "0.78rem",
            maxWidth: "260px",
            opacity: hovered ? 1 : 0.85,
            transition: "opacity 0.3s ease",
          }}
        >
          {banner.subtitle}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 w-fit">
          <span
            className="text-white font-semibold uppercase text-xs"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            {banner.cta}
          </span>
          <div
            className="h-px transition-all duration-300"
            style={{
              width: hovered ? "36px" : "24px",
              backgroundColor: banner.accent,
            }}
          />
        </div>
      </div>
    </div>
  );
}

const Featured = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      <div className="mt-10">
        <Container>
          {/* Top small Heading */}
          <div className="w-full flex space-x-2 pb-3 px-3 lg:px-0">
            <div className="w-3 h-6 sm:w-4 sm:h-7 bg-mainColor rounded-sm"></div>
            <h6 className="text-sm sm:text-base text-mainColor font-semibold">
              Featured
            </h6>
          </div>

          {/* Section Title */}
          <h3 className="text-xl md:text-2xl lg:text-4xl font-semibold px-3 lg:px-0 mb-6">
            New <span className="text-mainColor">Arrival</span>
          </h3>

          {/* Banner Grid */}
          <div className="px-3 lg:px-0">
            {/* Mobile: stack all */}
            <div className="flex flex-col gap-3 sm:hidden">
              {banners.map((banner) => (
                <div key={banner.id} style={{ height: "220px" }}>
                  <BannerCard banner={banner} className="h-full" />
                </div>
              ))}
            </div>

            {/* Tablet: 2 columns */}
            <div
              className="hidden sm:grid lg:hidden gap-3"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gridTemplateAreas: `
                  "large wide"
                  "large bottom"
                `,
                height: "460px",
              }}
            >
              <div style={{ gridArea: "large" }}>
                <BannerCard banner={banners[0]} className="h-full" />
              </div>
              <div style={{ gridArea: "wide" }}>
                <BannerCard banner={banners[1]} className="h-full" />
              </div>
              <div
                style={{
                  gridArea: "bottom",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <BannerCard banner={banners[2]} className="h-full" />
                <BannerCard banner={banners[3]} className="h-full" />
              </div>
            </div>

            {/* Desktop: full layout */}
            <div
              className="hidden lg:grid gap-3"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gridTemplateAreas: `
                  "large wide"
                  "large bottom"
                `,
                height: "560px",
              }}
            >
              <div style={{ gridArea: "large" }}>
                <BannerCard banner={banners[0]} className="h-full" />
              </div>
              <div style={{ gridArea: "wide" }}>
                <BannerCard banner={banners[1]} className="h-full" />
              </div>
              <div
                style={{
                  gridArea: "bottom",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <BannerCard banner={banners[2]} className="h-full" />
                <BannerCard banner={banners[3]} className="h-full" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Featured;
