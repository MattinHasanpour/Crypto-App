import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { format } from "date-fns";
import { faIR } from "date-fns/locale";
import styles from "./CoinAnalyticsModule.module.css";
import { FiChevronUp, FiChevronDown, FiX } from "react-icons/fi";
import { Mosaic } from "react-loading-indicators";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale
);

const API_BASE_URL = "https://api.coingecko.com/api/v3";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

const getTimeRangeLabel = (range) => {
  switch (range) {
    case "1":
      return "24 ساعت";
    case "7":
      return "7 روز";
    case "30":
      return "1 ماه";
    case "90":
      return "3 ماه";
    case "365":
      return "1 سال";
    default:
      return "";
  }
};

const CoinAnalyticsModule = ({ coinId, coinName, onClose }) => {
  const [activeTab, setActiveTab] = useState("prices");
  const [timeRange, setTimeRange] = useState("7");
  const [chartData, setChartData] = useState(null);
  const [coinDetails, setCoinDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);
  const dataCache = useRef({});

  const chartColors = {
    prices: { border: "#00dbde", background: "rgba(0, 219, 222, 0.1)" },
    market_caps: { border: "#fc00ff", background: "rgba(252, 0, 255, 0.1)" },
    total_volumes: { border: "#00ffbd", background: "rgba(0, 255, 189, 0.1)" },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const cacheKey = `${coinId}-${timeRange}`;
        const cachedData = dataCache.current[cacheKey];

        if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
          setCoinDetails(cachedData.details);
          processChartData(cachedData.chart);
          setIsLoading(false);
          return;
        }

        const [chartResponse, detailsResponse] = await Promise.all([
          fetchChartData(coinId, timeRange),
          fetchCoinDetails(coinId),
        ]);

        // Update cache
        dataCache.current[cacheKey] = {
          chart: chartResponse,
          details: detailsResponse,
          timestamp: Date.now(),
        };

        setCoinDetails(detailsResponse);
        processChartData(chartResponse);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("خطا در دریافت داده‌ها. لطفاً دوباره تلاش کنید.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [coinId, timeRange, activeTab]);

  const fetchChartData = async (coinId, days) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&x_cg_demo_api_key=CG-6hhEmRauMnVFvpb4aciXosRH`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch chart data");
      }

      const data = await response.json();
      return {
        prices: data.prices,
        market_caps: data.market_caps,
        total_volumes: data.total_volumes,
      };
    } catch (error) {
      console.error("Error fetching chart data:", error);
      throw error;
    }
  };

  const fetchCoinDetails = async (coinId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false&x_cg_demo_api_key=CG-6hhEmRauMnVFvpb4aciXosRH`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch coin details");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching coin details:", error);
      throw error;
    }
  };

  const processChartData = (data) => {
    const currentData = data[activeTab];

    setChartData({
      labels: currentData.map((item) => item[0]),
      datasets: [
        {
          label: getChartLabel(),
          data: currentData.map((item) => item[1]),
          borderColor: chartColors[activeTab].border,
          backgroundColor: chartColors[activeTab].background,
          tension: 0.4,
          fill: true,
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    });
  };

  const getChartLabel = () => {
    switch (activeTab) {
      case "prices":
        return "قیمت (USD)";
      case "market_caps":
        return "حجم بازار (USD)";
      case "total_volumes":
        return "حجم معاملات (USD)";
      default:
        return "";
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        rtl: true,
        callbacks: {
          label: (ctx) =>
            `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("fa-IR")} USD`,
          title: (ctx) =>
            format(new Date(ctx[0].parsed.x), "PPpp", { locale: faIR }),
        },
      },
      title: {
        display: true,
        text: `نمودار ${coinName} - ${getTimeRangeLabel(timeRange)}`,
        font: {
          family: "IRANSans, Arial, sans-serif",
          size: 16,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: timeRange === "1" ? "hour" : "day",
          tooltipFormat: "PPpp",
          displayFormats: {
            hour: "HH:mm",
            day: "MMM d",
          },
        },
        adapters: {
          date: {
            locale: faIR,
          },
        },
        ticks: { font: { family: "IRANSans" } },
        grid: { display: false },
      },
      y: {
        ticks: {
          font: { family: "IRANSans" },
          callback: (value) => value.toLocaleString("fa-IR"),
        },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className={styles.loadingOverlay}>
        <Mosaic color="#00dbde" size="medium" text="" textColor="" />{" "}
        <p>در حال دریافت داده‌های {coinName}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorOverlay}>
        <div className={styles.errorContent}>
          <p>{error}</p>
          <button onClick={onClose} className={styles.closeButton}>
            بستن
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.modalBackdrop} onClick={onClose} />

      <div className={styles.analyticsContainer} ref={scrollRef}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            تحلیل {coinName} ({coinDetails?.symbol?.toUpperCase()})
          </h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FiX />
          </button>
        </div>

        <div className={styles.priceSummary}>
          <div className={styles.currentPrice}>
            $
            {coinDetails?.market_data?.current_price?.usd?.toLocaleString(
              "en-US",
              { maximumFractionDigits: 6 }
            )}
          </div>
          <div
            className={
              coinDetails?.market_data?.price_change_percentage_24h >= 0
                ? styles.priceUp
                : styles.priceDown
            }
          >
            {coinDetails?.market_data?.price_change_percentage_24h?.toFixed(2)}%
            {coinDetails?.market_data?.price_change_percentage_24h >= 0 ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </div>
        </div>

        <div className={styles.tabs}>
          {["prices", "market_caps", "total_volumes"].map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {getChartLabel(tab)}
            </button>
          ))}
        </div>

        <div className={styles.timeRangeSelector}>
          {["1", "7", "30", "90", "365"].map((range) => (
            <button
              key={range}
              className={`${styles.timeButton} ${
                timeRange === range ? styles.active : ""
              }`}
              onClick={() => setTimeRange(range)}
            >
              {getTimeRangeLabel(range)}
            </button>
          ))}
        </div>

        <div className={styles.chartWrapper}>
          {chartData && <Line data={chartData} options={chartOptions} />}
        </div>

        {coinDetails && (
          <div className={styles.coinStats}>
            <div className={styles.statCard}>
              <h3>تغییرات 24h</h3>
              <p
                className={
                  coinDetails.market_data.price_change_percentage_24h >= 0
                    ? styles.positive
                    : styles.negative
                }
              >
                {coinDetails.market_data.price_change_percentage_24h?.toFixed(
                  2
                )}
                %
              </p>
              <p>
                بالاترین: $
                {coinDetails.market_data.high_24h?.usd?.toLocaleString("en-US")}
              </p>
              <p>
                پایین‌ترین: $
                {coinDetails.market_data.low_24h?.usd?.toLocaleString("en-US")}
              </p>
            </div>

            <div className={styles.statCard}>
              <h3>رکورد قیمت</h3>
              <p className={styles.statValue}>
                ${coinDetails.market_data.ath?.usd?.toLocaleString("en-US")}
              </p>
              <p>
                ارزش بازار: $
                {coinDetails.market_data.market_cap?.usd?.toLocaleString(
                  "en-US"
                )}
              </p>
            </div>

            <div className={styles.statCard}>
              <h3>رتبه بازار</h3>
              <p className={styles.rank}>#{coinDetails.market_cap_rank}</p>
              <p>
                حجم معاملات 24h: $
                {coinDetails.market_data.total_volume?.usd?.toLocaleString(
                  "en-US"
                )}
              </p>
            </div>
          </div>
        )}

        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <FiChevronUp />
        </button>
      </div>
    </>
  );
};

export default CoinAnalyticsModule;
