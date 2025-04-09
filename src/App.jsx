import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/modules/Home/Home";
import MarketPage from "./components/modules/market/MarketPage";
import CoinDetailPage from "./components/modules/coin/CoinDetailPage ";
import ExchangePage from "./components/modules/exchange/ExchangePage";
import WalletPage from "./components/modules/wallet/WalletPage";
import ProfilePage from "./components/modules/profile/ProfilePage";
import SupportPage from "./components/modules/support/SupportPage";
import About from "./components/modules/about/About";
import NotFoundPage from "./components/modules/error/ErrorPage";
import FAQPage from "./FAQ/FAQPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:coinId" element={<CoinDetailPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
