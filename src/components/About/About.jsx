'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

export default function About() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(prev => !prev);

  return (
    <section className={styles.about}>
      <div className={styles.textWrap}>
        <h2>{t('home.about.title')}</h2>
        <p>{t('home.about.text')}</p>

        {expanded && <p className={styles.extraText}>{t('home.about.extraText')}</p>}

        <button className={styles.toggleBtn} onClick={toggleExpand}>
         {expanded ? t("button.hide") : t("button.knowMore")}
        </button>
      </div>

      <div className={styles.imageWrap}>
        <img src="/images/about.png" alt={t('home.about.title')} />
      </div>
    </section>
  );
}
