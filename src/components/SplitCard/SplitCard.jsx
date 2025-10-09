'use client';

import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SplitCard.module.scss";

export default function SplitCard({ image, title, text, extraText, reverse }) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <section className={`${styles.card} ${reverse ? styles.reverse : ""} container`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.textWrap}>
        <h2>{title}</h2>
        <p>{text}</p>

        {expanded && <p className={styles.extraText}>{extraText}</p>}

        <button className={styles.button} onClick={toggleExpand}>
          {expanded ? t("button.hide") : t("button.knowMore")}
        </button>
      </div>
    </section>
  );
}
