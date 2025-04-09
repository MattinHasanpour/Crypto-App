import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiMail,
  FiPhone,
  FiMessageSquare,
} from "react-icons/fi";
import styles from "./FAQPage.module.css";
import Layouts from "../layouts/Layouts";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "چگونه می‌توانم حساب کاربری ایجاد کنم؟",
      answer:
        "برای ایجاد حساب کاربری، روی دکمه 'ثبت نام' در صفحه اصلی کلیک کنید و اطلاعات خواسته شده شامل نام، ایمیل و رمز عبور را وارد نمایید. سپس ایمیل تایید برای شما ارسال خواهد شد.",
    },
    {
      question: "رمز عبور خود را فراموش کرده‌ام، چه کار کنم؟",
      answer:
        "در صفحه ورود، روی گزینه 'فراموشی رمز عبور' کلیک کنید. ایمیل خود را وارد نمایید تا لینک بازنشانی رمز عبور برای شما ارسال شود.",
    },
    {
      question: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
      answer:
        "پس از ورود به حساب کاربری، به بخش 'سفارشات من' مراجعه کنید. در این بخش می‌توانید وضعیت تمام سفارشات خود را مشاهده نمایید.",
    },
    {
      question: "سیاست بازگشت کالا چگونه است؟",
      answer:
        "شما تا ۷ روز پس از دریافت کالا می‌توانید درخواست بازگشت دهید. کالا باید در شرایط اولیه و بدون استفاده باشد. برای شروع فرآیند بازگشت به بخش 'پیگیری سفارشات' مراجعه کنید.",
    },
    {
      question: "چه روش‌های پرداختی پشتیبانی می‌شوند؟",
      answer:
        "ما پرداخت آنلاین با کارت‌های عضو شتاب، پرداخت در محل برای برخی محصولات، و انتقال بانکی را پشتیبانی می‌کنیم. امکان پرداخت با کیف پول الکترونیکی نیز وجود دارد.",
    },
  ];

  return (
    <Layouts>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <div className={styles.headerIcon}>
            <FiHelpCircle size={48} />
          </div>
          <h1>سوالات متداول</h1>
          <p>پاسخ پرسش‌های پرتکرار خود را اینجا پیدا کنید</p>
        </div>

        <div className={styles.faqContent}>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contactCard}>
            <h2>پاسخ خود را پیدا نکردید؟</h2>
            <p>ما همیشه آماده پاسخگویی به سوالات شما هستیم</p>

            <div className={styles.contactMethods}>
              <a href="tel:+982112345678" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <FiPhone size={24} />
                </div>
                <div>
                  <h3>تماس تلفنی</h3>
                  <p>09145510718</p>
                </div>
              </a>

              <a
                href="mailto:support@example.com"
                className={styles.contactMethod}
              >
                <div className={styles.methodIcon}>
                  <FiMail size={24} />
                </div>
                <div>
                  <h3>ایمیل پشتیبانی</h3>
                  <p>mattinhasanpour01@gmail.com</p>
                </div>
              </a>

              <a href="#" className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <FiMessageSquare size={24} />
                </div>
                <div>
                  <h3>چت آنلاین</h3>
                  <p>پاسخگویی 24 ساعته</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default FAQPage;
