import styles from './CartItem.module.scss';

const CartItem = ({ title, price, img, id, onRemoveItem }) => {
  return (
    <div className={styles.cartItem}>
      <img width={70} height={70} src={img} alt='sneakers' />
      <div className={styles.cartItemInfo}>
        <p>{title}</p>
        <b>{price}руб.</b>
      </div>
      <img
        onClick={() => onRemoveItem(id)}
        className={styles.closeCart}
        width={32}
        height={32}
        src='img/close-cart.svg'
        alt='closeCart'
      />
    </div>
  );
};

export default CartItem;
