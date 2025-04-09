import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCoinList } from "../../../services/cryptoApi";
import Layouts from "../../../layouts/Layouts";
import TableCoin from "../../modules/table/TableCoin";
import { Mosaic } from "react-loading-indicators";
import Pagination from "../Pagination/Pagination";
import Search from "../search/Search";

function MarketPage() {
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(getCoinList(page, currency));

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching coin data:", err);
        // Redirect to error page or show error message
        navigate("#", { state: { error: err.message } });
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoinData();

    // Optional: Set up refresh interval
    const interval = setInterval(fetchCoinData, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, [navigate, page, currency]);

  if (error) {
    return (
      <Layouts>
        <div className="text-red-500 text-center py-10">
          Error loading market data: {error}
        </div>
      </Layouts>
    );
  }

  return (
    <Layouts>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Mosaic color="#00dbde" size="medium" text="" textColor="" />
        </div>
      ) : (
        <>
          <section className="market-page">
            <h1 className="text-2xl font-bold mb-6 text-center text-white dark:text-white">
              بازار ارزهای دیجیتال
              <br />
              <Search currency={currency} setCurrency={setCurrency} />
              <br />
            </h1>
            <TableCoin
              currency={currency}
              coins={coins}
              isLoading={isLoading}
              onRowClick={(coinId) => navigate(`/coin/${coinId}`)}
            />
            <Pagination page={page} setPage={setPage} />
          </section>
        </>
      )}
    </Layouts>
  );
}

export default MarketPage;
