"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const audio = new Audio("/sounds/to-top.mp3");
    audio.play();
  };

  return (
    <button
      className={`${styles.scrollButton} ${visible ? styles.visible : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <img src="/images/arrow.png" alt="Scroll to top" />
      <img src="/images/arrow.png" alt="Scroll to top" />
      <img src="/images/arrow.png" alt="Scroll to top" />
    </button>
  );
};

export default ScrollToTop;
