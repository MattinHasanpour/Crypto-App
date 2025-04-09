import {
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiBitcoincash } from "react-icons/si";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* بخش بالایی فوتر */}
        <div className={styles.footerTop}>
          <div className={`${styles.brandSection} text-center`}>
            <div className={`${styles.logo} flex text-center`}>
              <SiBitcoincash className={styles.logoIcon} />
              <span className={styles.logoText}>CryptoTest</span>
            </div>
            <div className={styles.leftSection}></div>
            <p className={styles.tagline}>
              پلتفرم پیشرفته معاملات ارز دیجیتال با امنیت بالا و کارمزد کم
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://t.me/mattinhasanpour"
                className={`${styles.socialLink} ${styles.blueBg}`}
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="#"
                className={`${styles.socialLink} ${styles.lightBlueBg}`}
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/mattinhasanpour_"
                className={`${styles.socialLink} ${styles.pinkBg}`}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/MattinHasanpour"
                className={`${styles.socialLink} ${styles.redBg}`}
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className={`${styles.socialLink} ${styles.lightBlueBg}`}
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* لینک‌های فوتر */}
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>معرفی</h3>
              <ul className={styles.linkList}>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${styles.linkItem} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    درباره ما
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>خدمات</h3>
              <ul className={styles.linkList}>
                <li>
                  <NavLink
                    to="/wallet"
                    className={({ isActive }) =>
                      `${styles.linkItem} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    کیف پول
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/exchange"
                    className={({ isActive }) =>
                      `${styles.linkItem} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    تبدیل ارز
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>پشتیبانی</h3>
              <ul className={styles.linkList}>
                <li>
                  <NavLink
                    to="/support"
                    className={({ isActive }) =>
                      `${styles.linkItem} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    تماس با ما
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className={({ isActive }) =>
                      `${styles.linkItem} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    سوالات متداول
                  </NavLink>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>

        {/* بخش پایینی فوتر */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} CryptoTest. تمام حقوق محفوظ است.
          </div>
          <div className={styles.legalLinks}>
            <NavLink
              to="/harem"
              className={({ isActive }) =>
                `${styles.legalLink} ${isActive ? styles.activeLink : ""}`
              }
            >
              حریم خصوصی
            </NavLink>
            <NavLink
              to="/harem"
              className={({ isActive }) =>
                `${styles.legalLink} ${isActive ? styles.activeLink : ""}`
              }
            >
              قوانین و مقررات
            </NavLink>
            <NavLink
              to="/harem"
              className={({ isActive }) =>
                `${styles.legalLink} ${isActive ? styles.activeLink : ""}`
              }
            >
              حریم شخصی
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
