import { Truck, Headphones, ShieldCheck } from "lucide-react";
import Container from "../Container";

const features = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: ShieldCheck,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function Policy() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <Container>
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-0 sm:divide-x sm:divide-gray-200">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col justify-between items-center text-center px-10 gap-4"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
                <div className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center">
                  <Icon className="text-white w-5 h-5" strokeWidth={1.8} />
                </div>
              </div>

              {/* Title */}
              <p className="text-sm font-extrabold tracking-wide text-gray-900 uppercase">
                {title}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
