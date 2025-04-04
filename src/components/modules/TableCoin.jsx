import ChartUp from "../../assets/chart-up.svg";
import ChartDown from "../../assets/chart-down.svg";

function Tablecoin({ coins }) {
  console.log(coins);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
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
    <tr>
      <td>
        <div>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td> {name} </td>
      <td> ${current_price.toLocaleString()} </td>
      <td> {price_24h.toFixed(2)}% </td>
      <td> {total_volume.toLocaleString()} </td>
      <td>
        {" "}
        <img src={price_24h > 0 ? ChartUp : ChartDown} />{" "}
      </td>
    </tr>
  );
};
