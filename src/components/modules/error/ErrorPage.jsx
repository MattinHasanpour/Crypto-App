import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import Layouts from "../../../layouts/Layouts";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Layouts>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.errorCode}>404</div>
          <h1 className={styles.title}>صفحه مورد نظر یافت نشد</h1>
          <p className={styles.message}>
            متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده
            باشد.
          </p>

          <div className={styles.animation}>
            <div className={styles.planet}>
              <div className={styles.crater}></div>
              <div className={styles.crater}></div>
              <div className={styles.crater}></div>
            </div>
            <div className={styles.rocket}>
              <div className={styles.window}></div>
              <div className={styles.fire}></div>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              onClick={() => navigate(-1)}
              className={styles.secondaryButton}
            >
              بازگشت به صفحه قبل
            </button>
            <button
              onClick={() => navigate("/")}
              className={styles.primaryButton}
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default NotFoundPage;
