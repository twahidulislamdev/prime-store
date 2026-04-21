import React from "react";
import Container from "../Container";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= MAIN FOOTER ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-12 lg:py-14">

            {/* Brand */}
            <div className="lg:col-span-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-black">Prime </span>
                <span className="text-red-600">Store</span>
              </h2>

              <p className="text-gray-500 mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                Your trusted destination for quality products and modern shopping
                experience. Fast delivery, best prices, and reliable service.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center sm:justify-start gap-4">
                {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 hover:bg-red-600 transition-all duration-300 rounded-full flex items-center justify-center text-gray-600 hover:text-white active:scale-95"
                    >
                      <Icon size={15} />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Sections (Mobile Grid Better Layout) */}
            {[
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Contact"],
              },
              {
                title: "Shop",
                links: ["All Products", "New Arrivals", "Best Sellers", "Deals"],
              },
              {
                title: "Support",
                links: ["Help Center", "Order Tracking", "Returns", "FAQ"],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="lg:col-span-2 text-center sm:text-left"
              >
                <h3 className="text-gray-900 font-semibold mb-3 text-base">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-red-600 transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="lg:col-span-2 text-center sm:text-left">
              <h3 className="text-gray-900 font-semibold mb-3 text-base">
                Newsletter
              </h3>

              <p className="text-sm text-gray-500 mb-4">
                Subscribe for updates & offers.
              </p>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-100 border border-gray-300 focus:border-red-500 outline-none rounded-lg px-3 py-2 text-sm"
                />
                <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg text-sm font-medium active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* ================= BOTTOM BAR ================= */}
          <div className="border-t border-gray-200 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Prime Store. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 justify-center text-gray-500 text-sm">
              {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-red-600 transition"
                >
                  {item}
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-center md:text-right text-xs sm:text-sm">
              Made with ❤️ using React
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;