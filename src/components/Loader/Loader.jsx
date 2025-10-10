"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Loader.module.scss";

const Loader = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname, mounted]);

  if (!mounted || !loading) return null;

  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.imageWrap}>
        <Image
          src="/images/scary.png"
          alt="Halloween loading"
          width={200}
          height={200}
          priority
          className={styles.scaryImage}
        />
      </div>
    </div>
  );
};

export default Loader;
