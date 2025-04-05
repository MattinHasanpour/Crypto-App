import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";
import styles from "./tableCoin.module.css";
import { Mosaic } from "react-loading-indicators";

function Tablecoin({ coins, isLoading }) {
  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <div className={`${styles.scrollContainer} ${styles.scrollbar_custom}`}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              {isLoading ? (
                <tr>
                  <td colSpan="6" className={styles.loaderContainer}>
                    <Mosaic
                      color="#4ade80"
                      size="medium"
                      text=""
                      textColor=""
                    />{" "}
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
                <TableRow coin={coin} key={coin.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tablecoin;

const TableRow = ({
  coin: {
    image,
    name,
    symbol,
    current_price,
    price_change_percentage_24h: price_24h,
    total_volume,
  },
}) => {
  return (
    <tr className="hover:bg-gradient-to-r from-gray-900 to-blue-900">
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
        ${current_price.toLocaleString()}
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
