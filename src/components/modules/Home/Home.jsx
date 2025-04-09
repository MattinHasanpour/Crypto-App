import Layouts from "../../../layouts/Layouts";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";

import styles from "./Home.module.css";
import PopularCurrenciesSlider from "./PopularCurrenciesSlider";
import CryptoSlider from "./CryptoSlider";

function Home() {
  const navigate = useNavigate();

  return (
    <Layouts>
      <div className={`${styles.mobails} container`}>
        {/* هیرو بخش */}
        <section className={styles.hero_section}>
          <div className="mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className={styles.hero_title}>
                بازار ارز دیجیتال را با ما تجربه کنید
              </h1>
              <p className={styles.hero_desc}>
                خرید و فروش امن ارزهای دیجیتال با پیشرفته‌ترین پلتفرم معاملاتی
              </p>
              <div className={styles.hero_buttons}>
                <button
                  onClick={() => navigate("/market")}
                  className={styles.btn_primary}
                >
                  شروع معاملات
                </button>
                <button className={styles.btn_secondary}>آموزش رایگان</button>
              </div>
            </motion.div>
          </div>
        </section>
        <PopularCurrenciesSlider />
        <br />
        {/* نمودار بازار */}
        <CryptoSlider />

        {/* ویژگی‌های پلتفرم */}
        <FeaturesSection />
      </div>
    </Layouts>
  );
}

export default Home;
