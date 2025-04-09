import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaBitcoin,
  FaEthereum,
  FaDollarSign,
  FaChartLine,
  FaChartBar,
  FaCoins,
  FaExchangeAlt,
  FaRedo,
  FaExclamationTriangle,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
  FaFileAlt,
  FaShieldAlt,
  FaRobot,
  FaCube,
  FaLink,
  FaFeatherAlt,
  FaGem,
  FaSpaceShuttle,
  FaLeaf,
  FaBrain,
  FaPuzzlePiece,
  FaBolt,
  FaCloud,
  FaServer,
  FaCode,
  FaStar,
  FaSun,
  FaMountain,
} from "react-icons/fa";
import styles from "./CryptoSlider.module.css";
import { Mosaic } from "react-loading-indicators";

const CryptoSlider = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCryptoIcon = (cryptoId) => {
    const icons = {
      bitcoin: (
        <FaBitcoin className={styles.icon} style={{ color: "#f7931a" }} />
      ),
      ethereum: (
        <FaEthereum className={styles.icon} style={{ color: "#627eea" }} />
      ),
      tether: (
        <FaDollarSign
          className={styles.icon}
          style={{
            color: "#26a17b",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
      ),
      binancecoin: (
        <FaStar className={styles.icon} style={{ color: "#f3ba2f" }} />
      ),
      solana: <FaSun className={styles.icon} style={{ color: "#00ffbd" }} />,
      ripple: <FaGlobe className={styles.icon} style={{ color: "#27a2db" }} />,
      "usd-coin": (
        <FaDollarSign
          className={styles.icon}
          style={{
            color: "#2775ca",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "5px",
          }}
        />
      ),
      cardano: <FaCube className={styles.icon} style={{ color: "#0033ad" }} />,
      dogecoin: (
        <FaFeatherAlt className={styles.icon} style={{ color: "#cb9800" }} />
      ),
      polkadot: (
        <FaPuzzlePiece className={styles.icon} style={{ color: "#e6007a" }} />
      ),
      tron: <FaBolt className={styles.icon} style={{ color: "#eb0029" }} />,
      chainlink: (
        <FaLink className={styles.icon} style={{ color: "#2a5ada" }} />
      ),
      polygon: <FaGem className={styles.icon} style={{ color: "#8247e5" }} />,
      litecoin: (
        <FaCoins className={styles.icon} style={{ color: "#345d9d" }} />
      ),
      stellar: (
        <FaSpaceShuttle className={styles.icon} style={{ color: "#08b5e5" }} />
      ),
      monero: (
        <FaShieldAlt className={styles.icon} style={{ color: "#ff6600" }} />
      ),
      eos: <FaRobot className={styles.icon} style={{ color: "#000000" }} />,
      algorand: (
        <FaBrain className={styles.icon} style={{ color: "#000000" }} />
      ),
      tezos: <FaLeaf className={styles.icon} style={{ color: "#2c7df7" }} />,
      aave: <FaCloud className={styles.icon} style={{ color: "#b6509e" }} />,
      avalanche: (
        <FaMountain className={styles.icon} style={{ color: "#e84142" }} />
      ),
      "wrapped-bitcoin": (
        <FaBitcoin className={styles.icon} style={{ color: "#5a5564" }} />
      ),
      "bitcoin-cash": (
        <FaBolt className={styles.icon} style={{ color: "#8dc351" }} />
      ),
      uniswap: (
        <FaExchangeAlt className={styles.icon} style={{ color: "#ff007a" }} />
      ),
      "internet-computer": (
        <FaServer className={styles.icon} style={{ color: "#29beee" }} />
      ),
      cosmos: <FaGlobe className={styles.icon} style={{ color: "#2e3148" }} />,
      vechain: <FaCode className={styles.icon} style={{ color: "#15bdff" }} />,
      "ethereum-classic": (
        <FaEthereum className={styles.icon} style={{ color: "#328332" }} />
      ),
      "the-graph": (
        <FaChartBar className={styles.icon} style={{ color: "#6747ed" }} />
      ),
      filecoin: (
        <FaFileAlt className={styles.icon} style={{ color: "#0090ff" }} />
      ),
    };

    return (
      icons[cryptoId] || (
        <FaCoins className={styles.icon} style={{ color: "#666666" }} />
      )
    );
  };

  const cryptoList = [
    "bitcoin",
    "ethereum",
    "tether",
    "binancecoin",
    "solana",
    "ripple",
    "usd-coin",
    "cardano",
    "dogecoin",
    "avalanche",
    "polkadot",
    "tron",
    "chainlink",
    "polygon",
    "wrapped-bitcoin",
    "bitcoin-cash",
    "uniswap",
    "litecoin",
    "internet-computer",
    "stellar",
    "filecoin",
    "cosmos",
    "ethereum-classic",
    "vechain",
    "the-graph",
    "monero",
    "eos",
    "aave",
    "algorand",
    "tezos",
  ];

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoList.join(
          ","
        )}&vs_currencies=usd&include_24hr_change=true&x_cg_demo_api_key=CG-6hhEmRauMnVFvpb4aciXosRH`;
        const response = await fetch(apiUrl, {
          headers: { Accept: "application/json" },
        });

        if (!response.ok)
          throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);

        const data = await response.json();
        if (!data || Object.keys(data).length === 0)
          throw new Error("داده‌ای دریافت نشد");

        const formattedData = cryptoList
          .map((crypto) => {
            if (!data[crypto]) return null;

            const formattedName = crypto
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return {
              id: crypto,
              name: formattedName,
              symbol:
                crypto === "internet-computer"
                  ? "ICP"
                  : crypto === "wrapped-bitcoin"
                  ? "WBTC"
                  : crypto === "usd-coin"
                  ? "USDC"
                  : crypto === "binancecoin"
                  ? "BNB"
                  : crypto === "bitcoin-cash"
                  ? "BCH"
                  : crypto.slice(0, 3).toUpperCase(),
              price: data[crypto]?.usd || 0,
              change24h: data[crypto]?.usd_24h_change || 0,
              icon: getCryptoIcon(crypto),
            };
          })
          .filter((item) => item !== null);

        setCryptoData(formattedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "خطا در دریافت اطلاعات از سرور");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(5, cryptoData.length),
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(4, cryptoData.length),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Math.min(3, cryptoData.length),
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, cryptoData.length),
          slidesToScroll: 1,
          slidesMargin: 10,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <Mosaic
          className="text-center"
          color="#00dbde"
          size="medium"
          text=""
          textColor=""
        />{" "}
        <p className="text-white block">در حال دریافت داده‌های..</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <FaExclamationTriangle className={styles.errorIcon} />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        <FaCoins className={styles.titleIcon} /> برترین رمزارزهای بازار
      </h2>

      {cryptoData.length > 0 ? (
        <Slider {...settings} className={styles.slider}>
          {cryptoData.map((crypto) => (
            <div key={crypto.id} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.iconContainer}>{crypto.icon}</div>
                <div className={styles.info}>
                  <span className={styles.symbol}>{crypto.symbol}</span>
                  <span className={styles.name}>{crypto.name}</span>
                </div>
              </div>
              <div className={styles.price}>
                $
                {crypto.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: crypto.price < 1 ? 6 : 2,
                })}
              </div>
              <div
                className={`${styles.change} ${
                  crypto.change24h >= 0 ? styles.positive : styles.negative
                }`}
              >
                {crypto.change24h >= 0 ? (
                  <FaChartLine className={styles.changeIcon} />
                ) : (
                  <FaChartBar className={styles.changeIcon} />
                )}
                {Math.abs(crypto.change24h).toFixed(2)}%
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className={styles.noData}>هیچ داده‌ای یافت نشد</p>
      )}
    </section>
  );
};

export default CryptoSlider;
