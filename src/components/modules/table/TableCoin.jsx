import React, { useState } from "react";
import ChartUp from "../../../assets/chart-up.svg";
import ChartDown from "../../../assets/chart-down.svg";
import styles from "./tableCoin.module.css";
import { Mosaic } from "react-loading-indicators";
import { FaYenSign, FaEuroSign, FaDollarSign } from "react-icons/fa";
import CoinAnalyticsModule from "./CoinAnalyticsModule";

function Tablecoin({ coins, isLoading, currency }) {
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <div className={`${styles.container} min-h-[calc(100vh-64px-80px)]`}>
      <div className={styles.tableWrapper}>
        <div className={`${styles.scrollContainer} ${styles.scrollbar_custom}`}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className={styles.loaderContainer}>
                    <Mosaic
                      color="#00dbde"
                      size="medium"
                      text=""
                      textColor=""
                    />
                    <p>در حال دریافت داده‌های...</p>
                  </td>
                </tr>
              ) : (
                <tr>
                  <th className={styles.th}>Coin</th>
                  <th className={`${styles.th} hidden xl:block`}>Name</th>
                  <th className={styles.th}>24h</th>
                  <th className={styles.th}>Price</th>
                  <th className={`${styles.th} hidden md:block`}>
                    Total Volume
                  </th>
                  <th className={`${styles.th} ${styles.thHiddenXl}`}></th>
                </tr>
              )}
            </thead>
            <tbody>
              {coins.map((coin) => (
                <TableRow
                  key={coin.id}
                  coin={coin}
                  currency={currency}
                  setSelectedCoin={setSelectedCoin}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* نمایش ماژول آنالیز وقتی کوین انتخاب شده */}
      {selectedCoin && (
        <CoinAnalyticsModule
          coinId={selectedCoin.id}
          coinName={selectedCoin.name}
          onClose={() => setSelectedCoin(null)}
        />
      )}
    </div>
  );
}

const TableRow = ({
  coin: {
    id,
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h: price_24h,
    total_volume,
  },
  currency,
  setSelectedCoin,
}) => {
  const getCurrencySymbol = () => {
    switch (currency) {
      case "jpy":
        return <FaYenSign className="inline-block mr-1 text-[#00dbde]" />;
      case "eur":
        return <FaEuroSign className="inline-block mr-1 text-[#00dbde]" />;
      case "usd":
        return <FaDollarSign className="inline-block mr-1 text-[#00dbde]" />;
      default:
        return <FaDollarSign className="inline-block mr-1" />;
    }
  };

  return (
    <tr
      className="hover:bg-gradient-to-r from-gray-900 to-blue-900 cursor-pointer"
      onClick={() => setSelectedCoin({ id, name })}
    >
      <td className={styles.td}>
        <div className={styles.coinCell}>
          <img className={styles.coinImage} src={image} alt={symbol} />
          <span className={styles.coinSymbol}>{symbol}</span>
        </div>
      </td>
      <td className={`${styles.td} ${styles.hiddenSm} hidden xl:block`}>
        {name}
      </td>
      <td
        className={`${styles.td} ${
          price_24h > 0 ? styles.positiveChange : styles.negativeChange
        }`}
      >
        {price_24h.toFixed(2)}%
      </td>
      <td className={`${styles.td} ${styles.price}`}>
        {getCurrencySymbol()}
        {current_price.toLocaleString()}
      </td>
      <td className={`${styles.td} hidden md:block`}>
        {total_volume.toLocaleString()}
      </td>
      <td className={`${styles.td} ${styles.chartCell}`}>
        <img
          className={styles.chartIcon}
          src={price_24h > 0 ? ChartUp : ChartDown}
          alt="chart"
        />
      </td>
    </tr>
  );
};

export default Tablecoin;
