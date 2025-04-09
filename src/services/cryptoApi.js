const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-6hhEmRauMnVFvpb4aciXosRH";

const getCoinList = (page, currency, coinId) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=CG-6hhEmRauMnVFvpb4aciXosRH`;

const searchCoin = (query) =>
  `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

const getCoinChart = async (coinId) => {
  const response = await fetch(
    `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch chart data");
  }
  return await response.json();
};
const getCoinDetails = async (coinId) => {
  const response = await fetch(
    `${BASE_URL}/coins/${coinId}&x_cg_demo_api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coin details");
  }
  return await response.json();
};

export { getCoinList, searchCoin, getCoinChart, getCoinDetails };
