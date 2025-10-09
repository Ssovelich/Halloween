"use client";

import { useEffect, useState } from "react";
import styles from "./SpiderWebs.module.scss";

const SpiderWebs = () => {
  const [webs, setWebs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = 50 + Math.random() * 100;

      const newWeb = { id, x, y, size };
      setWebs((prev) => [...prev, newWeb]);

      setTimeout(() => {
        setWebs((prev) => prev.filter((w) => w.id !== id));
      }, 3000 + Math.random() * 2000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.websContainer}>
      {webs.map((web) => (
        <img
          key={web.id}
          src="/images/spider-web.png"
          alt="spider web"
          className={styles.web}
          style={{
            top: `${web.y}px`,
            left: `${web.x}px`,
            width: `${web.size}px`,
            height: `${web.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default SpiderWebs;
