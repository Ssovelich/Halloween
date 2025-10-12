"use client";

import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import useCart from "@/hooks/useCart";
import { toastOptions } from "@/styles/toastStyles";
import styles from "./ProductList.module.scss";

const ProductList = ({ title, translationKey, items }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    const translatedName = t(`${translationKey}.items.${item.key}`);

    addToCart({
      ...item,
      category: translationKey,
      name: translatedName,
    });

    toast.success(`"${translatedName}" ${t(`${translationKey}.added`)}`);
  };

  return (
    <main className="container">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={toastOptions}
      />
      <h1 className={styles.title}>{t(`${translationKey}.title`, title)}</h1>

      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <img
              src={item.image}
              alt={t(`${translationKey}.items.${item.key}`)}
            />
            <div className={styles.info}>
              <h3>{t(`${translationKey}.items.${item.key}`)}</h3>
              <p className={styles.price}>${item.price}</p>
            </div>

            <button
              className={styles.cartButton}
              onClick={() => handleAddToCart(item)}
              aria-label={t(`${translationKey}.addToCart`)}
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

export default ProductList;
