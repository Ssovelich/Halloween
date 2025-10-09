"use client";

import { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const [hiddenLeft, setHiddenLeft] = useState(false);
  const [hiddenRight, setHiddenRight] = useState(false);

  const handleHoverLeft = () => {
    setHiddenLeft(true);
    setTimeout(() => setHiddenLeft(false), 3000);
  };

  const handleHoverRight = () => {
    setHiddenRight(true);
    setTimeout(() => setHiddenRight(false), 3000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerImages}>
        <img
          src="/images/footer2.png"
          alt="Footer decoration 2"
          className={`${styles.leftImage} ${hiddenLeft ? styles.hidden : ""}`}
          onMouseEnter={handleHoverLeft}
        />

        <p>© 2025 Halloween Store. All rights reserved.</p>

        <img
          src="/images/footer1.png"
          alt="Footer decoration 1"
          className={`${styles.rightImage} ${hiddenRight ? styles.hidden : ""}`}
          onMouseEnter={handleHoverRight}
        />
      </div>
    </footer>
  );
};

export default Footer;
