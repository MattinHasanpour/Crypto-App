import React from "react";
import FeatureCard from "./FeatureCard";
import styles from "./FeaturesSection.module.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaPercentage,
  FaMobileAlt,
  FaClock,
  FaExchangeAlt,
  FaWallet,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
const FeaturesSection = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
      title: "امنیت پیشرفته",
      description: "حفاظت چندلایه با استانداردهای جهانی رمزنگاری",
    },
    {
      icon: <FaChartLine className="text-green-500 text-2xl" />,
      title: "تحلیل بازار",
      description: "ابزارهای تحلیلی حرفه‌ای با دقت بالا",
    },
    {
      icon: <FaPercentage className="text-purple-500 text-2xl" />,
      title: "کارمزد ویژه",
      description: "معاملات با کمترین کارمزد در سطح منطقه",
    },
    {
      icon: <FaMobileAlt className="text-red-500 text-2xl" />,
      title: "معاملات موبایلی",
      description: "امکان معامله از طریق اپلیکیشن اختصاصی",
    },
    {
      icon: <FaClock className="text-yellow-500 text-2xl" />,
      title: "پشتیبانی دائمی",
      description: "پاسخگویی 24 ساعته حتی در تعطیلات",
    },
    {
      icon: <FaExchangeAlt className="text-indigo-500 text-2xl" />,
      title: "نقدشوندگی",
      description: "تبادل سریع با بالاترین نقدشوندگی",
    },
    {
      icon: <FaWallet className="text-pink-500 text-2xl" />,
      title: "کیف پول امن",
      description: "مدیریت چندارزی با امنیت بالا",
    },
    {
      icon: <FaGlobe className="text-teal-500 text-2xl" />,
      title: "پوشش جهانی",
      description: "پشتیبانی از تمام ارزهای دیجیتال مطرح",
    },
    {
      icon: <FaRocket className="text-orange-500 text-2xl" />,
      title: "معاملات سریع",
      description: "اجرای آنی سفارشات در کسری از ثانیه",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
