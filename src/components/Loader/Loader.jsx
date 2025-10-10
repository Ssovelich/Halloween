"use client";

import Image from "next/image";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.imageWrap}>
        <Image
          src="/images/scary.png"
          alt="Halloween loading"
          width={120}
          height={120}
          priority
          className={styles.scaryImage}
        />
      </div>
    </div>
  );
};

export default Loader;
