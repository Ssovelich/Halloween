'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "";
}, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src="/images/logo.png" alt="Logo" />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link href="/" className={pathname === "/" ? styles.active : ""} onClick={closeMenu}>
            {t("nav.home")}
          </Link>

          <Link href="/candies" className={pathname === "/candies" ? styles.active : ""} onClick={closeMenu}>
            {t("nav.candies")}
          </Link>

          <Link href="/decors" className={pathname === "/decors" ? styles.active : ""} onClick={closeMenu}>
            {t("nav.decors")}
          </Link>

          <button className={styles.langBtnMobile} onClick={toggleLang}>
            {i18n.language === "ua" ? "EN" : "UA"}
          </button>
        </nav>

        <button className={styles.langBtn} onClick={toggleLang}>
          {i18n.language === "ua" ? "EN" : "UA"}
        </button>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
