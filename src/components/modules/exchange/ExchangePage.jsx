import React, { useState, useEffect } from "react";
import { FiRepeat, FiInfo } from "react-icons/fi";
import styles from "./Exchange.module.css";
import Layouts from "../../../layouts/Layouts";

const Exchange = () => {
  const [cryptos, setCryptos] = useState([
    { id: "bitcoin", symbol: "BTC", name: "بیت‌کوین" },
    { id: "ethereum", symbol: "ETH", name: "اتریوم" },
    { id: "tether", symbol: "USDT", name: "تتر" },
    { id: "cardano", symbol: "ADA", name: "کاردانو" },
  ]);

  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);
  const [rate, setRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getCryptoId = (symbol) => {
    const crypto = cryptos.find((c) => c.symbol === symbol);
    return crypto?.id;
  };

  // گرفتن نرخ تبدیل با واسطه دلار
  useEffect(() => {
    const fetchRates = async () => {
      if (!fromCurrency || !toCurrency) return;
      setIsLoading(true);

      const fromId = getCryptoId(fromCurrency);
      const toId = getCryptoId(toCurrency);

      try {
        const ids = [fromId, toId].join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&x_cg_demo_api_key=CG-6hhEmRauMnVFvpb4aciXosRH`
        );
        const data = await res.json();

        const fromPriceInUsd = data[fromId]?.usd;
        const toPriceInUsd = data[toId]?.usd;

        if (fromPriceInUsd && toPriceInUsd) {
          const newRate = fromPriceInUsd / toPriceInUsd;
          setRate(newRate);
        } else {
          setRate(0);
        }
      } catch (err) {
        console.error("خطا در دریافت نرخ تبدیل:", err);
        setRate(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (amount && rate) {
      setResult(amount * rate);
    } else {
      setResult(0);
    }
  }, [amount, rate]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `درخواست مبادله ${amount} ${fromCurrency} به ${result.toFixed(
        6
      )} ${toCurrency} ثبت شد`
    );
  };

  return (
    <Layouts>
      <div className={styles.exchangeContainer}>
        <div className={styles.exchangeHeader}>
          <h2>مبادله ارز دیجیتال</h2>
          <p>تبدیل سریع و امن ارزهای دیجیتال</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.exchangeForm}>
          <div className={styles.currencyInput}>
            <div className={styles.inputGroup}>
              <label>از:</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className={styles.currencySelect}
              >
                {cryptos.map((crypto) => (
                  <option key={`from-${crypto.symbol}`} value={crypto.symbol}>
                    {crypto.name} ({crypto.symbol})
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>مقدار:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className={styles.amountInput}
                min="0"
                step="any"
              />
            </div>
          </div>

          <div className={styles.swapButton} onClick={handleSwap}>
            <FiRepeat />
          </div>

          <div className={styles.currencyInput}>
            <div className={styles.inputGroup}>
              <label>به:</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className={styles.currencySelect}
              >
                {cryptos.map((crypto) => (
                  <option key={`to-${crypto.symbol}`} value={crypto.symbol}>
                    {crypto.name} ({crypto.symbol})
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label>دریافت می‌کنید:</label>
              <div className={styles.resultInput}>
                {isLoading ? "در حال محاسبه..." : result.toFixed(6)}
              </div>
            </div>
          </div>

          <div className={styles.rateInfo}>
            <FiInfo />
            <span>
              نرخ تبدیل: 1 {fromCurrency} ={" "}
              {isLoading ? "..." : rate.toFixed(6)} {toCurrency}
            </span>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!amount || isLoading}
          >
            تایید و ادامه مبادله
          </button>
        </form>
      </div>
    </Layouts>
  );
};

export default Exchange;
