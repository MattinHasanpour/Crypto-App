import React from "react";
import { FaHome, FaWallet, FaUser, FaCoins } from "react-icons/fa";
import { BsGraphUp, BsCurrencyExchange } from "react-icons/bs";
import styles from "./Header.module.css";
import { SiBitcoincash } from "react-icons/si";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* لوگو و نام برند */}
        <div className={styles.logo}>
          <SiBitcoincash className={styles.logoIcon} />
          <span className={styles.logoText}>CryptoDash</span>
        </div>

        {/* منوی ناوبری */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navLink}>
                <FaHome className={styles.navIcon} />
                <span>خانه</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                <BsGraphUp className={styles.navIcon} />
                <span>بازار</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                <BsCurrencyExchange className={styles.navIcon} />
                <span>مبادله</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                <FaWallet className={styles.navIcon} />
                <span>کیف پول</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* اقدامات کاربر */}
        <div className={styles.userActions}>
          <button className={styles.userButton}>
            <FaUser className="text-base" />
          </button>
          <button className={styles.menuButton}>☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
