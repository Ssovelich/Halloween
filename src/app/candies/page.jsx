'use client';

import { useTranslation } from "react-i18next";
import styles from "./candies.module.scss";
import useCart from "@/hooks/useCart";
import toast, { Toaster } from "react-hot-toast";

const candies = [
  { id: 1, key: "candy1", price: 5, image: "/images/toffee.png" },
  { id: 2, key: "candy2", price: 8, image: "/images/bone.png" },
  { id: 3, key: "candy3", price: 6, image: "/images/scarecrow.png" },
  { id: 4, key: "candy4", price: 3, image: "/images/candy-cane.png" },
  { id: 5, key: "candy5", price: 7, image: "/images/pumpkin.png" },
  { id: 6, key: "candy6", price: 4, image: "/images/ghost.png" },
];

const Candies = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const handleAddToCart = (candy) => {
    addToCart(candy);
    toast.success(`${t(`candies.items.${candy.key}`)} ${t("candies.added")}`);
  };

  return (
    <main className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className={styles.title}>{t("candies.title")}</h1>

      <div className={styles.grid}>
        {candies.map((candy) => (
          <div key={candy.id} className={styles.card}>
            <img src={candy.image} alt={t(`candies.items.${candy.key}`)} />
            <h3>{t(`candies.items.${candy.key}`)}</h3>
            <p className={styles.price}>${candy.price}</p>

            <button
              className={styles.cartButton}
              onClick={() => handleAddToCart(candy)}
              aria-label={t("candies.addToCart")}
            >
              <img
                src="/images/shopping.png"
                alt="Shopping icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Candies;
