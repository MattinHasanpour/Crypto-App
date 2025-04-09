import styles from "./layouts.module.css";


import Header from "./header/Header";
import Footer from "./footer/Footer";
import Services from "../components/modules/servicesPage/Services";

const Layouts = ({ children }) => {
  return (
    <div className={`${styles.container} ${styles.darkMode}`}>
      {/* هدر */}
      <Header className={styles.headerContent} />

      {/* محتوای اصلی */}
      <main className={styles.main}>
        <div className={styles.dynamicContent}>{children}</div>

      </main>

      <Footer />
    </div>
  );
};
export default Layouts;
