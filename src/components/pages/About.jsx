import React from "react";
import Container from "../Container";

const features = [
  {
    num: "01",
    title: "100% Authentic",
    desc: "All products are genuine and come with official manufacturer warranty.",
  },
  {
    num: "02",
    title: "Fast Delivery",
    desc: "Quick and reliable delivery right to your doorstep, every time.",
  },
  {
    num: "03",
    title: "Best Prices",
    desc: "Competitive pricing without ever compromising on quality.",
  },
];

const stats = [
  { value: "5K+", label: "Happy Customers" },
  { value: "1K+", label: "Products" },
  { value: "3+",  label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <div className="bg-white font-sans text-gray-900">

      {/* Hero */}
      <section className="py-20 border-b border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400 border border-gray-200 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Now shipping nationwide
              </span>
              <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
                Prime Tech Store
              </p>
              <h1 className="text-5xl font-serif font-bold leading-[1.1] mb-5">
                Powering your{" "}
                <em className="italic text-red-500">digital life</em>
              </h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8 font-light max-w-md">
                The latest smartphones, laptops, and smart gadgets — designed to
                keep you connected, productive, and ahead of the curve.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition">
                  Explore Products
                </button>
                <button className="px-6 py-2.5 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 transition">
                  Learn more
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=900&auto=format&fit=crop&q=80"
                alt="Premium Tech Gadgets"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 border-b border-gray-100">
        <Container>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            Why choose us
          </p>
          <h2 className="text-3xl font-serif font-bold mb-10 max-w-xs leading-tight">
            Built on trust, designed for you
          </h2>

          <div className="grid md:grid-cols-3 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {features.map((f) => (
              <div key={f.num} className="p-8 bg-white hover:bg-gray-50 transition">
                <p className="text-xs font-semibold text-red-500 mb-3">{f.num}</p>
                <h4 className="text-sm font-semibold mb-2">{f.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 border-b border-gray-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div className="bg-gray-50 rounded-2xl aspect-[5/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=80"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
                Our journey
              </p>
              <h2 className="text-3xl font-serif font-bold mb-5 leading-tight">
                A story of trust &amp; simplicity
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4 font-light">
                Prime Tech Store started with a mission to simplify technology
                shopping. We noticed people struggled to find reliable and
                affordable gadgets — so we built a platform focused on trust,
                transparency, and quality.
              </p>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                Today, we proudly serve thousands of customers with the latest
                devices and a seamless shopping experience.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-gray-100">
        <Container>
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6">
            By the numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="py-10 text-center bg-gray-50">
                <p className="text-4xl font-serif font-bold mb-1">{s.value}</p>
                <p className="text-xs text-gray-400 tracking-wide font-light">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Container>
          <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
            Ready to upgrade?
          </p>
          <h2 className="text-4xl font-serif font-bold mb-4 leading-tight">
            Find your next{" "}
            <em className="italic text-red-500">favorite gadget</em>
          </h2>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto font-light text-base">
            Explore the latest devices and find exactly what suits your needs
            and budget.
          </p>
          <button className="px-8 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition text-sm">
            Shop Now
          </button>
        </Container>
      </section>

    </div>
  );
};

export default About;