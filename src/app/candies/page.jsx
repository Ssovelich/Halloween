'use client';

import { useTranslation } from "react-i18next";
import Link from "next/link";
import styles from "./candies.module.scss";

const candies = [
  { id: 1, key: "candy1", price: "$5", image: "/images/toffee.png" },
  { id: 2, key: "candy2", price: "$8", image: "/images/toffee.png" },
  { id: 3, key: "candy3", price: "$6", image: "/images/toffee.png" },
  { id: 4, key: "candy4", price: "$3", image: "/images/toffee.png" },
  { id: 5, key: "candy5", price: "$6", image: "/images/toffee.png" },
  { id: 6, key: "candy6", price: "$3", image: "/images/toffee.png" },
];

export default function Candies() {
  const { t } = useTranslation();

  return (
    <main className="container">
      <h1 className={styles.title}>{t("candies.title")}</h1>

      <div className={styles.grid}>
        {candies.map((candy) => (
          <div key={candy.id} className={styles.card}>
            <img src={candy.image} alt={t(`candies.items.${candy.key}`)} />
            <h3>{t(`candies.items.${candy.key}`)}</h3>
            <p className={styles.price}>{candy.price}</p>

            <Link href="/cart" className={styles.cartButton}>
              <img
                src="/images/shopping.png"
                alt="Shopping icon"
                width={30}
                height={30}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
