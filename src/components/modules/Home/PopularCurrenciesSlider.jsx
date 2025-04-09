import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaBitcoin, FaEthereum, FaDollarSign } from "react-icons/fa";
import { SiBinance, SiTether, SiRipple } from "react-icons/si";

// داده‌های ارزهای محبوب
const popularCurrencies = [
  {
    id: 1,
    symbol: "BTC",
    name: "Bitcoin",
    icon: <FaBitcoin size={24} color="#F7931A" />,
  },
  {
    id: 2,
    symbol: "ETH",
    name: "Ethereum",
    icon: <FaEthereum size={24} color="#627EEA" />,
  },
  {
    id: 3,
    symbol: "BNB",
    name: "Binance Coin",
    icon: <SiBinance size={24} color="#F3BA2F" />,
  },
  {
    id: 4,
    symbol: "USDT",
    name: "Tether",
    icon: <SiTether size={24} color="#26A17B" />,
  },
  {
    id: 5,
    symbol: "XRP",
    name: "Ripple",
    icon: <SiRipple size={24} color="#27A2DB" />,
  },
  {
    id: 6,
    symbol: "USD",
    name: "US Dollar",
    icon: <FaDollarSign size={24} color="#6BCC5A" />,
  },
];

export default function PopularCurrenciesSlider() {
  return (
    <div className="w-full border border-gray-800">
      <br />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
        ارزهای{" "}
        <span className="text-cyan-400">
          محبوب
        </span>
      </h2>{" "}
      <br />
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {popularCurrencies.map((currency) => (
          <SwiperSlide key={currency.id}>
            <div className="bg-gray-700 p-3 rounded-lg flex flex-col items-center hover:bg-gray-700 transition-all cursor-pointer">
              <div className="mb-2">{currency.icon}</div>
              <span className="text-white font-semibold">
                {currency.symbol}
              </span>
              <span className="text-gray-400 text-sm">{currency.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
    </div>
  );
}
