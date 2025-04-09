import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiCalendar,
  FiPhone,
  FiEdit,
  FiSave,
  FiUpload,
} from "react-icons/fi";
import styles from "./UserProfile.module.css";
import Layouts from "../../../layouts/Layouts";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null); // State برای مدیریت تصویر کاربر
  const [userData, setUserData] = useState({
    name: "متین حسن پور",
    email: "Mattinhasanpour@gmail.com",
    phone: "09145510718",
    birthDate: "1382/03/31",
    password: "••••••••",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // در اینجا می‌توانید اطلاعات را به سرور ارسال کنید
    console.log("اطلاعات ذخیره شد:", { ...userData, image });
  };

  return (
    <Layouts>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <h2>پروفایل کاربری</h2>
          <p>مدیریت اطلاعات حساب کاربری</p>
        </div>

        <div className={styles.profileContent}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              {image ? (
                <img
                  src={image}
                  alt="تصویر پروفایل"
                  className={styles.avatarImage}
                />
              ) : (
                <FiUser className={styles.avatarIcon} />
              )}
            </div>
            {isEditing && (
              <div className={styles.uploadContainer}>
                <label htmlFor="avatarUpload" className={styles.uploadBtn}>
                  <FiUpload /> تغییر تصویر
                </label>
                <input
                  id="avatarUpload"
                  type="file"
                  accept="image/*"
                  className={styles.fileInput}
                  onChange={handleImageUpload}
                />
              </div>
            )}
            <h3>{userData.name}</h3>
            <p>عضویت از: 1404/01/16</p>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <FiUser className={styles.infoIcon} />
                <div>
                  <label>نام کامل</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className={styles.editInput}
                    />
                  ) : (
                    <p>{userData.name}</p>
                  )}
                </div>
              </div>

              <div className={styles.infoItem}>
                <FiMail className={styles.infoIcon} />
                <div>
                  <label>آدرس ایمیل</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className={styles.editInput}
                    />
                  ) : (
                    <p>{userData.email}</p>
                  )}
                </div>
              </div>

              <div className={styles.infoItem}>
                <FiPhone className={styles.infoIcon} />
                <div>
                  <label>شماره تلفن</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputChange}
                      className={styles.editInput}
                    />
                  ) : (
                    <p>{userData.phone}</p>
                  )}
                </div>
              </div>

              <div className={styles.infoItem}>
                <FiCalendar className={styles.infoIcon} />
                <div>
                  <label>تاریخ تولد</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="birthDate"
                      value={userData.birthDate}
                      onChange={handleInputChange}
                      className={styles.editInput}
                    />
                  ) : (
                    <p>{userData.birthDate}</p>
                  )}
                </div>
              </div>

              <div className={styles.infoItem}>
                <FiLock className={styles.infoIcon} />
                <div>
                  <label>رمز عبور</label>
                  {isEditing ? (
                    <input
                      type="password"
                      name="password"
                      value={userData.password}
                      onChange={handleInputChange}
                      className={styles.editInput}
                      placeholder="رمز جدید"
                    />
                  ) : (
                    <p>{userData.password}</p>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.actionButtons}>
              {isEditing ? (
                <button onClick={handleSave} className={styles.saveBtn}>
                  <FiSave /> ذخیره تغییرات
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className={styles.editBtn}
                >
                  <FiEdit /> ویرایش پروفایل
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Profile;
