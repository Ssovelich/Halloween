'use client';

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./SplitCard.module.scss";

const SplitCard = ({ image, title, text, extraText, reverse, index }) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  const toggleExpand = () => setExpanded(!expanded);

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

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={cardRef}
      className={`${styles.card} ${reverse ? styles.reverse : ""} container ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
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

export default SplitCard;
