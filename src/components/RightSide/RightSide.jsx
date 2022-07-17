import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import appContext from '../../context';
import CartItem from './CartItem';
import NullCart from './NullCart';
import Order from './Order';
import styles from './RightSide.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RightSide = ({ removeRightSide, onRemoveItem, items = [], opened }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { cartItems, setCartItems } = useContext(appContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sumPrice = cartItems.reduce((sum, obj) => +obj.price + +sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://62acc3c99fa81d00a7b936b6.mockapi.io/orders',
        { items: cartItems }
      );
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://62acc3c99fa81d00a7b936b6.mockapi.io/cart/' + item.id
        );
        await delay(1000);
      }
      setOrderId(data.id);
      setCartItems([]);
      setIsOrderComplete(true);
    } catch (error) {
      alert('order is failed');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.section}>
        <div className={styles.rightSide}>
          <div className={styles.cartItems}>
            <h2>
              Корзина
              <div onClick={removeRightSide} className={styles.closeCartMenu}>
                <img
                  className={styles.closeCart}
                  width={32}
                  height={32}
                  src='img/close-cart.svg'
                  alt='closeCart'
                />
              </div>
            </h2>
            {items.length > 0 ? (
              <div className={styles.selectedCart}>
                <div className={styles.items}>
                  {items.map((obj, index) => (
                    <CartItem
                      key={index}
                      title={obj.title}
                      price={obj.price}
                      img={obj.img}
                      onRemoveItem={onRemoveItem}
                      id={obj.id}
                    />
                  ))}
                </div>
                <div className={styles.total}>
                  <div className={styles.totalInfo}>
                    <span>Итого:</span>
                    <div></div>
                    <b>{sumPrice} руб.</b>
                  </div>
                  <button
                    disabled={isLoading}
                    onClick={onClickOrder}
                    className={styles.greenButton}
                  >
                    Оформить заказ
                    <img src='/img/right-arrow.svg' alt='arrow' />
                  </button>
                </div>
              </div>
            ) : isOrderComplete ? (
              <Order orderId={orderId} removeRightSide={removeRightSide} />
            ) : (
              <NullCart removeRightSide={removeRightSide} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
