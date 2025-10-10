'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './cart.module.scss';

const CartPage = () => {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const changeQuantity = (id, delta) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleOrder = () => {
    if (cart.length === 0) return;
    toast.success(t('cart.orderSuccess'));
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <main className="container">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className={styles.title}>{t('cart.title')}</h1>

      {cart.length === 0 ? (
        <p className={styles.empty}>{t('cart.empty')}</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map((item) => (
              <li key={item.id} className={styles.item}>
                <img
                  src={item.image}
                  alt={item.key}
                  className={styles.image}
                  width={80}
                  height={80}
                />

                <span className={styles.name}>
                  {t(`candies.items.${item.key}`)}
                </span>

                <div className={styles.quantityControls}>
                  <button onClick={() => changeQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                </div>

                <span className={styles.price}>
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <p className={styles.total}>
              {t('cart.total')}: <strong>${total.toFixed(2)}</strong>
            </p>

            <button className={styles.orderButton} onClick={handleOrder}>
              {t('cart.checkout')}
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default CartPage;
