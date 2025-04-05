import styles from "./layouts.module.css";

import { FaExchangeAlt, FaWallet, FaChartLine, FaCheck } from 'react-icons/fa';

import Header from "./Header";
import Footer from "./Footer";
import Services from "./Services";

const Layouts = ({ children }) => {
  return (
    <div className={`${styles.container} ${styles.darkMode}`}>
      {/* هدر */}
      <header className={styles.header}>
        <Header className={styles.headerContent} />
      </header>

      {/* محتوای اصلی */}
      <main className={styles.main}>
        <div className={styles.dynamicContent}>{children}</div>

       <Services />
      </main>

      {/* فوتر */}
      <Footer />
    </div>
  );
};
export default Layouts;
