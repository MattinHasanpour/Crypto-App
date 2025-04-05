import { FaExchangeAlt, FaWallet, FaChartLine, FaCheck } from "react-icons/fa";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services_section}>
      <div className={styles.services_container}>
        <div className={styles.services_header}>
          <h2 className={styles.services_title}>خدمات تخصصی ما</h2>
          <p className={styles.services_description}>
            با استفاده از دانش تخصصی و فناوری‌های پیشرفته، بهترین راهکارها را
            برای شما ارائه می‌دهیم
          </p>
        </div>

        <div className={styles.services_cards}>
          {/* کارت ۱ */}
          <div className={`${styles.service_card} ${styles.service_card_1}`}>
            <div className={styles.card_header}>
              <FaExchangeAlt className={styles.card_icon} />
            </div>
            <h3 className={styles.card_title}>معاملات ارز دیجیتال</h3>
            <p className={styles.card_description}>
              خرید و فروش امن و سریع ارزهای دیجیتال با بهترین قیمت بازار و
              کمترین کارمزد
            </p>
            <ul className={styles.card_features}>
              <li>
                <FaCheck className={styles.check_icon} />
                پشتیبانی از ۵۰+ ارز دیجیتال
              </li>
              <li>
                <FaCheck className={styles.check_icon} />
                اجرای سریع معاملات در کمتر از ۱ ثانیه
              </li>
              <li>
                <FaCheck className={styles.check_icon} />
                کارمزد رقابتی و شفاف
              </li>
            </ul>
            <a href="#" className={styles.card_button}>
              شروع معاملات
            </a>
          </div>

          {/* کارت ۲ */}
          <div className={`${styles.service_card} ${styles.service_card_2}`}>
            <div className={styles.card_header}>
              <FaWallet className={styles.card_icon} />
            </div>
            <h3 className={styles.card_title}>کیف پول امن</h3>
            <p className={styles.card_description}>
              مدیریت دارایی‌های دیجیتال شما با بالاترین سطح امنیتی و قابلیت‌های
              پیشرفته
            </p>
            <ul className={styles.card_features}>
              <li>
                <FaCheck className={styles.check_icon} />
                ذخیره سازی چند امضایی
              </li>
              <li>
                <FaCheck className={styles.check_icon} />
                پشتیبانی از تمام استانداردهای امنیتی
              </li>
              <li>
                <FaCheck className={styles.check_icon} />
                دسترسی آسان از تمام دستگاه‌ها
              </li>
            </ul>
            <a href="#" className={styles.card_button}>
              ایجاد کیف پول
            </a>
          </div>

          {/* کارت ۳ */}
          <div className={`${styles.service_card} ${styles.service_card_3}`}>
            <div className={styles.card_header}>
              <FaChartLine className={styles.card_icon} />
            </div>
            <h3 className={styles.card_title}>آموزش و تحلیل</h3>
            <p className={styles.card_description}>
              یادگیری تکنیک‌های معامله‌گری و تحلیل بازار با آموزش‌های تخصصی ما
            </p>
            <ul className={styles.card_features}>
              <li>
                <FaCheck className={styles.check_icon} />
                تحلیل روزانه بازار توسط متخصصان
              </li>
              <li>
                <FaCheck className={styles.check_icon} />
                دوره‌های آموزشی از مقدماتی تا پیشرفته
              </li>
              <li>
                <FaCheck className={styles.check_icon} />
                سیگنال‌های معاملاتی با دقت بالا
              </li>
            </ul>
            <a href="#" className={styles.card_button}>
              مشاهده دوره‌ها
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
