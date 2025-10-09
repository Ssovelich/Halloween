"use client";

import { useTranslation } from "react-i18next";
import styles from "./Discount.module.scss";

const Discount = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.discount}>
      <div className={styles.imageWrap}>
        <img src="/images/discount.png" alt={t("home.discount.alt")} />
      </div>
      <div className={styles.textWrap}>
        <h2>{t("home.discount.text")}</h2>
      </div>
    </section>
  );
}

export default Discount;
