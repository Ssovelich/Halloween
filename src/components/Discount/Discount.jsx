"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import styles from "./Discount.module.scss";

const Discount = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.discount} ${visible ? styles.visible : ""}`}
    >
      <div className={`${styles.imageWrap} ${styles.fromLeft}`}>
        <img src="/images/discount.png" alt={t("home.discount.alt")} />
      </div>
      <div className={`${styles.textWrap} ${styles.fromRight}`}>
        <h2>{t("home.discount.text")}</h2>
      </div>
    </section>
  );
};

export default Discount;
