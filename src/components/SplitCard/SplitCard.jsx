'use client';
import React from 'react';
import styles from './SplitCard.module.scss';

export default function SplitCard({ image, title, text, btn, reverse }) {
  return (
    <section
      className={`${styles.card} ${reverse ? styles.reverse : ''}`}
    >
      <div className={styles.imageWrap}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.textWrap}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className={styles.button}>{btn}</button>
      </div>
    </section>
  );
}
