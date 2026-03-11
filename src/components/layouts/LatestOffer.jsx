import { useEffect, useState } from "react";
import Container from "../Container";
import OfferSoundbox from "../../assets/offerSoundbox.png";

export default function LatestOffer() {
  // set target date only once
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  });

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeCircle = ({ value, label }) => (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex flex-col items-center justify-center text-black shadow-lg">
      <span className="text-lg font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );

  return (
    <section className="py-10 mx-3 lg:mx-0">
      <Container>
        <div className="w-full bg-gradient-to-r from-black via-zinc-900 to-black rounded-xl py-16 px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left">
              <p className="text-green-400 font-semibold mb-3 tracking-wide">
                Categories
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
                Enhance Your <br /> Music Experience
              </h1>

              {/* COUNTDOWN */}
              <div className="flex justify-center lg:justify-start gap-4 mb-8 flex-wrap">
                <TimeCircle value={timeLeft.days} label="Days" />
                <TimeCircle value={timeLeft.hours} label="Hours" />
                <TimeCircle value={timeLeft.minutes} label="Minutes" />
                <TimeCircle value={timeLeft.seconds} label="Seconds" />
              </div>

              {/* BUTTON */}
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300 shadow-lg hover:scale-105 mx-auto lg:mx-0 block">
                Buy Now
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <img
                src={OfferSoundbox}
                alt="speaker"
                className="w-[300px] sm:w-[350px] lg:w-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
