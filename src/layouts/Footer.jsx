import {
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiBitcoincash } from "react-icons/si";
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
              <span className={styles.logoText}>CryptoDash</span>
            </div>
            <p className={styles.tagline}>
              پلتفرم پیشرفته معاملات ارز دیجیتال با امنیت بالا و کارمزد کم
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={`${styles.socialLink} ${styles.blueBg}`} aria-label="Telegram">
                <FaTelegram />
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.lightBlueBg}`} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.pinkBg}`} aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.redBg}`} aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.lightBlueBg}`} aria-label="LinkedIn">
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
                  <a href="#" className={styles.linkItem}>
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    تیم ما
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    مشتریان
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    وبلاگ
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>خدمات</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="#" className={styles.linkItem}>
                    خرید و فروش
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    کیف پول
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    تبدیل ارز
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    استیکینگ
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>پشتیبانی</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="#" className={styles.linkItem}>
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    راهنما
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.linkItem}>
                    قوانین
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* بخش پایینی فوتر */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} CryptoDash. تمام حقوق محفوظ است.
          </div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              حریم خصوصی
            </a>
            <a href="#" className={styles.legalLink}>
              قوانین و مقررات
            </a>
            <a href="#" className={styles.legalLink}>
              حریم شخصی
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
