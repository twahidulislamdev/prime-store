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

          {/* Main Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14">
            
            {/* Brand */}
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-black">Prime </span>
                <span className="text-red-600">Store</span>
              </h2>

              <p className="text-gray-500 mb-6 max-w-md leading-relaxed">
                Your trusted destination for quality products and modern shopping
                experience. Fast delivery, best prices, and reliable service.
              </p>

              <div className="flex gap-4">
                {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 bg-gray-100 hover:bg-red-600 transition-all duration-300 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:scale-110"
                    >
                      <Icon size={16} />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Sections */}
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
                links: [
                  "Help Center",
                  "Order Tracking",
                  "Returns",
                  "FAQ",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="lg:col-span-2">
                <h3 className="text-gray-900 font-semibold mb-4 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-red-600 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="text-gray-900 font-semibold mb-4 text-lg">
                Newsletter
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Subscribe to get latest offers and updates.
              </p>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-100 border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none rounded-lg px-4 py-2 text-sm text-gray-800 placeholder-gray-500 transition"
                />
                <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-6 py-2 rounded-lg font-medium text-sm hover:shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Prime Store. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-gray-500">
              {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-red-600 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-center md:text-right">
              Made with ❤️ using React & Tailwind
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;