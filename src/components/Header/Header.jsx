"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const toggleLang = () => {
    const newLang = i18n.language === "ua" ? "en" : "ua";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) i18n.changeLanguage(savedLang);
  }, [i18n]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            {t("nav.home")}
            {pathname === "/" && <span className={styles.dot} />}
          </Link>

          <Link
            href="/candies"
            className={pathname === "/candies" ? styles.active : ""}
          >
            {t("nav.candies")}
            {pathname === "/candies" && <span className={styles.dot} />}
          </Link>

          <Link
            href="/decors"
            className={pathname === "/decors" ? styles.active : ""}
          >
            {t("nav.decors")}
            {pathname === "/decors" && <span className={styles.dot} />}
          </Link>
        </nav>
        <button className={styles.langBtn} onClick={toggleLang}>
          {i18n.language === "ua" ? "EN" : "UA"}
        </button>
      </div>
    </header>
  );
};

export default Header;
