import image1 from "../../../assets/images/man1.png";
import image2 from "../../../assets/images/man2.png";
import image3 from "../../../assets/images/woman3.png";
import image4 from "../../../assets/images/matin.jpg";
import styles from "./AboutPage.module.css";
import Layouts from "../../../layouts/Layouts";

const AboutPage = () => {
  return (
    <Layouts>
      <div className={styles.supportContainer}>
        <div className={styles.supportHeader}>
          <h1>درباره ما</h1>
          <p>تیم حرفه‌ای ما با سال‌ها تجربه در خدمت شماست</p>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.aboutSection}>
            <div className={styles.aboutText}>
              <h2>داستان ما</h2>
              <p>
                ما در سال ۱۳۹۵ با یک ایده ساده شروع کردیم: ایجاد تجربه‌های
                دیجیتال منحصر به فرد. امروز با تیمی متشکل از ۵۰ متخصص خلاق، به
                یکی از پیشروهای صنعت تبدیل شده‌ایم.
              </p>
              <p>
                ماموریت ما ارائه راهکارهای نوآورانه با بالاترین کیفیت است. ما به
                هر پروژه مانند اثر هنری خود نگاه می‌کنیم و تمام تلاشمان را برای
                خلق بهترین نتیجه به کار می‌گیریم.
              </p>
            </div>
          </section>

          <section className={styles.valuesSection}>
            <h2>ارزش‌های ما</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>💡</div>
                <h3>نوآوری</h3>
                <p>
                  همیشه در جستجوی راه‌های جدید و خلاقانه برای حل مسائل هستیم
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🤝</div>
                <h3>اعتماد</h3>
                <p>شفافیت و صداقت پایه‌های رابطه ما با مشتریان است</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🎯</div>
                <h3>تخصص</h3>
                <p>
                  با دانش عمیق و مهارت‌های به‌روز بهترین نتایج را ارائه می‌دهیم
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>❤️</div>
                <h3>اشتیاق</h3>
                <p>با عشق و علاقه کار می‌کنیم و این در نتایج مشهود است</p>
              </div>
            </div>
          </section>

          <section id="tem" className={styles.teamSection}>
            <h2>تیم ما</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <img src={image3} alt="image3" />
                </div>
                <h3>سارا محمدی</h3>
                <p>مدیرعامل </p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <img src={image1} alt="image1" />
                </div>
                <h3>علی رضایی</h3>
                <p>مدیر فنی</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <img src={image2} alt="image2" />
                </div>
                <h3>آرمان حسینی</h3>
                <p>طراح ارشد UX/UI</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <img src={image4} alt="matin" />
                </div>
                <h3>متین حسن پور</h3>
                <p>توسعه‌دهنده ارشد</p>
                <p>بنیانگذار مجموعه</p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>آماده همکاری با ما هستید؟</h2>
            <p>
              ما همیشه به دنبال استعدادهای جدید و پروژه‌های چالش‌برانگیز هستیم
            </p>
            <button className={styles.ctaButton}>تماس با ما</button>
          </section>
        </div>
      </div>
    </Layouts>
  );
};

export default AboutPage;
