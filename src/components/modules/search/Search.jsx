import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiX, FiChevronDown } from "react-icons/fi";
import { FaYenSign, FaEuroSign, FaDollarSign } from "react-icons/fa";
import styles from "./Search.module.css";
import { searchCoin } from "../../../services/cryptoApi";
import { Mosaic } from "react-loading-indicators";

function Search({ currency, setCurrency }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const search = async () => {
      if (!searchTerm.trim()) {
        setCoins([]);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(searchCoin(searchTerm));
        const json = await res.json();
        setCoins(json.coins || []);
      } catch (error) {
        console.error("Error searching coins:", error);
        setCoins([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(search, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getCurrencyIcon = () => {
    const icons = {
      jpy: <FaYenSign className={styles.currencyIcon} />,
      eur: <FaEuroSign className={styles.currencyIcon} />,
      usd: <FaDollarSign className={styles.currencyIcon} />,
    };
    return icons[currency] || icons.usd;
  };

  return (
    <div className={styles.searchContainer}>
      {/* جعبه جستجو */}
      <div className={styles.searchWrapper}>
        <div
          className={`${styles.searchBox} ${
            isOpen ? styles.searchBoxActive : ""
          }`}
          onClick={() => setIsOpen(true)}
        >
          <FiSearch className={styles.searchIcon} />
          <span className={styles.searchPlaceholder}>
            نام ارز یا نماد را جستجو کنید...
          </span>
        </div>

        <div className={styles.currencySelectorWrapper}>
          <div className={styles.currencySelector}>
            {getCurrencyIcon()}
            <select
              className={styles.currencySelect}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="usd">دلار (USD)</option>
              <option value="eur">یورو (EUR)</option>
              <option value="jpy">ین ژاپن (JPY)</option>
            </select>
            <FiChevronDown className={styles.dropdownArrow} />
          </div>
        </div>
      </div>

      {/* مدال جستجو */}
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div ref={modalRef} className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>جستجوی پیشرفته</h3>
              <button
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
              >
                <FiX />
              </button>
            </div>

            <div className={styles.searchSection}>
              <div className={styles.searchInputContainer}>
                <FiSearch className={styles.inputSearchIcon} />
                <input
                  type="text"
                  autoFocus
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className={`${styles.searchInput} ${
                    isFocused ? styles.searchInputFocused : ""
                  }`}
                  placeholder="مثلا: Bitcoin یا BTC"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className={styles.clearButton}
                  >
                    <FiX />
                  </button>
                )}
              </div>
            </div>

            {/* بخش نتایج با اسکرولر سفارشی */}
            <div className={styles.searchResults}>
              {isLoading ? (
                <div className={styles.loadingState}>
                  <Mosaic color="#00dbde" size="small" text="" textColor="" />{" "}
                  <br />
                  <p>در حال جستجو...</p>
                </div>
              ) : searchTerm ? (
                coins.length > 0 ? (
                  <ul className={styles.coinsList}>
                    {coins.map((coin) => (
                      <li key={coin.id} className={styles.coinItem}>
                        <img
                          src={coin.thumb}
                          alt={coin.name}
                          className={styles.coinImage}
                        />
                        <div className={styles.coinInfo}>
                          <span className={styles.coinName}>{coin.name}</span>
                          <span className={styles.coinSymbol}>
                            {coin.symbol.toUpperCase()}
                          </span>
                        </div>
                        <span className={styles.coinRank}>
                          #{coin.market_cap_rank}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className={styles.noResults}>
                    <div className={styles.searchIllustration}>
                      <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <p>نتیجه‌ای برای "{searchTerm}" یافت نشد</p>
                  </div>
                )
              ) : (
                <div className={styles.initialState}>
                  <div className={styles.searchIllustration}>
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className={styles.initialTitle}>جستجوی ارزهای دیجیتال</h4>
                  <p className={styles.hintText}>
                    نام یا نماد ارز مورد نظر خود را وارد کنید
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
