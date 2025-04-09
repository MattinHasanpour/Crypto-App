import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaWallet, FaUser, FaTimes, FaBars } from "react-icons/fa";
import { BsGraphUp, BsCurrencyExchange } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import styles from "./Header.module.css";
import { BiSupport, BiUserPin } from "react-icons/bi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(`.${styles.mobileMenu}`) &&
        !event.target.closest(`.${styles.menuButton}`)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* لوگو و نام برند */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <SiBitcoincash className={styles.logoIcon} />
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles.logoText} ${isActive ? styles.activeLogo : ""}`
              }
            >
              CryptoTest
            </NavLink>
          </div>
        </div>

        {/* منوی ناوبری دسکتاپ */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
                }
              >
                <FaHome className={styles.navIcon} />
                <span>خانه</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/market"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
                }
              >
                <BsGraphUp className={styles.navIcon} />
                <span>بازار</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exchange"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
                }
              >
                <BsCurrencyExchange className={styles.navIcon} />
                <span>مبادله</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
                }
              >
                <FaWallet className={styles.navIcon} />
                <span>کیف پول</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.activeNavLink : ""}`
                }
              >
                <BiUserPin className={styles.navIcon} />
                <span>درباره ما</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* اقدامات کاربر */}
        <div className={styles.rightSection}>
          <div className={styles.userActions}>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                `${styles.userButton} ${
                  isActive ? styles.activeUserButton : ""
                }`
              }
            >
              <BiSupport className={styles.userIcon} />
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${styles.userButton} ${
                  isActive ? styles.activeUserButton : ""
                }`
              }
            >
              <FaUser className={styles.userIcon} />
            </NavLink>
            <button
              className={styles.menuButton}
              onClick={toggleMobileMenu}
              aria-label="منوی موبایل"
            >
              {isMobileMenuOpen ? (
                <FaTimes className={styles.menuIcon} />
              ) : (
                <FaBars className={styles.menuIcon} />
              )}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <ul className={styles.mobileNavList}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.activeNavLink : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <FaHome className={styles.navIcon} />
                <span>خانه</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/market"
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.activeNavLink : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <BsGraphUp className={styles.navIcon} />
                <span>بازار</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exchange"
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.activeNavLink : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <BsCurrencyExchange className={styles.navIcon} />
                <span>مبادله</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.activeNavLink : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <FaWallet className={styles.navIcon} />
                <span>کیف پول</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.activeNavLink : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <FaUser className={styles.navIcon} />
                <span>پروفایل</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${
                    isActive ? styles.activeNavLink : ""
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <BiSupport className={styles.navIcon} />
                <span>پشتیبانی</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
