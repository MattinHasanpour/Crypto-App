import React, { useState } from "react";
import styles from "./SupportPage.module.css";
import Layouts from "../../../layouts/Layouts";

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("ticket");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // شبیه‌سازی ارسال فرم
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        priority: "medium",
        message: "",
      });
    }, 1500);
  };

  return (
    <Layouts>
      <div className={styles.supportContainer}>
        <div className={styles.supportHeader}>
          <h1>پشتیبانی فنی</h1>
          <p>ما آماده پاسخگویی به سوالات و مشکلات شما هستیم</p>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${
              activeTab === "ticket" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("ticket")}
          >
            ارسال تیکت جدید
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === "contact" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("contact")}
          >
            راه‌های ارتباطی
          </button>
        </div>

        {activeTab === "ticket" ? (
          submitted ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2>تیکت شما با موفقیت ثبت شد!</h2>
              <p>
                شماره پیگیری:{" "}
                <span>TK-{Math.floor(Math.random() * 10000)}</span>
              </p>
              <p>کارشناسان ما در اسرع وقت پاسخگوی شما خواهند بود.</p>
              <button
                className={styles.returnButton}
                onClick={() => setSubmitted(false)}
              >
                ارسال تیکت جدید
              </button>
            </div>
          ) : (
            <div className={styles.ticketFormContainer}>
              <form onSubmit={handleSubmit} className={styles.ticketForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">نام کامل *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="نام و نام خانوادگی"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">ایمیل *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@domain.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">موضوع *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="موضوع تیکت"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="priority">اولویت *</label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      required
                    >
                      <option value="low">کم</option>
                      <option value="medium">متوسط</option>
                      <option value="high">زیاد</option>
                      <option value="critical">بحرانی</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">شرح مشکل یا سوال *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="شرح کامل مشکل یا سوال خود را اینجا بنویسید..."
                  ></textarea>
                </div>

                <div className={styles.formFooter}>
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className={styles.spinner}></span>
                        در حال ارسال...
                      </>
                    ) : (
                      "ثبت تیکت"
                    )}
                  </button>
                  <p className={styles.requiredNote}>
                    فیلدهای ستاره‌دار الزامی هستند
                  </p>
                </div>
              </form>
            </div>
          )
        ) : (
          <div className={styles.contactTab}>
            <div className={styles.contactMethods}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 6L12 13L3 6"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>ایمیل پشتیبانی</h3>
                <p>برای موارد غیرفوری و پیگیری‌های طولانی‌مدت</p>
                <a
                  href="mailto:support@example.com"
                  className={styles.contactLink}
                >
                  mattinhasanpour01@gmail.com
                </a>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H16.92C16.3677 21 15.8479 20.7629 15.48 20.35L13.23 17.77C10.59 18.803 8.19697 16.41 9.22997 13.77L6.64997 11.52C6.23705 11.1521 5.99997 10.6323 5.99997 10.08V7C5.99997 6.46957 6.21068 5.96086 6.58575 5.58579C6.96082 5.21071 7.46953 5 7.99997 5H10.08C10.6323 5 11.1521 5.23705 11.52 5.64997L14.1 8.22997C15.133 5.58997 12.74 3.19697 10.1 4.22997L7.51997 1.64997C7.13209 1.26209 6.57893 1.04086 5.99997 1.04086C5.421 1.04086 4.86784 1.26209 4.47997 1.64997L2.63997 3.48997C2.06997 4.05997 1.84997 4.86997 2.05997 5.62997C2.85997 8.53997 4.70997 14.51 9.49997 19.29C14.29 24.08 20.45 25.93 23.37 26.73C24.13 26.94 24.94 26.73 25.51 26.15L27.35 24.31C27.7379 23.9222 27.9591 23.369 27.9591 22.7901C27.9591 22.2111 27.7379 21.6579 27.35 21.27L24.77 18.69C24.357 18.3221 23.8373 18.085 23.285 18.085C22.7327 18.085 22.213 18.3221 21.8 18.69L19.22 21.27C18.8021 21.6421 18.2773 21.875 17.72 21.87H17.67"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>تلفن پشتیبانی</h3>
                <p>پاسخگویی 24 ساعته در 7 روز هفته</p>
                <a href="tel:+982112345678" className={styles.contactLink}>
                  09145510718
                </a>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>دفتر مرکزی</h3>
                <p>شنبه تا چهارشنبه 8 صبح تا 5 بعدازظهر</p>
                <address className={styles.contactAddress}>
                  آذربایجان غربی, شهرستان پیرانشهر,خیابان محمد آوراز، کوچه محمد
                  آوراز، پلاک 123، طبقه 2
                </address>
              </div>
            </div>

            <div className={styles.faqSection}>
              <h3>سوالات متداول</h3>
              <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                  چگونه می‌توانم وضعیت تیکت خود را پیگیری کنم؟
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqAnswer}>
                  پس از ثبت تیکت، یک ایمیل حاوی شماره پیگیری برای شما ارسال
                  می‌شود. می‌توانید با وارد کردن این شماره در بخش پیگیری تیکت‌ها
                  در پنل کاربری، وضعیت تیکت خود را مشاهده کنید.
                </div>
              </div>

              <div className={styles.faqItem}>
                <button className={styles.faqQuestion}>
                  مدت زمان پاسخگویی به تیکت‌ها چقدر است؟
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqAnswer}>
                  زمان پاسخگویی بسته به اولویت تیکت متفاوت است:
                  <ul>
                    <li>تیکت‌های بحرانی: حداکثر 2 ساعت</li>
                    <li>تیکت‌های با اولویت زیاد: حداکثر 8 ساعت</li>
                    <li>تیکت‌های با اولویت متوسط: حداکثر 24 ساعت</li>
                    <li>تیکت‌های با اولویت کم: حداکثر 72 ساعت</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layouts>
  );
};

export default SupportPage;
