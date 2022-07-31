import styles from './NullCart.module.scss';

const NullCart = (props) => {
  return (
    <div className={styles.nullCart}>
      <div className={styles.nullCartItems}>
        <div className={styles.nullImg}>
          <img
            width={120}
            height={120}
            src='img/null-cart.png'
            alt='null-cart'
          />
        </div>

        <div className={styles.nullCartInfo}>
          <h3 className={styles.infoTitle}>Корзина пустая</h3>
          <span className={styles.infoText}>
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
          </span>
        </div>
        <button onClick={props.removeRightSide} className={styles.returnButton}>
          <img src='img/left-arrow.svg' alt='arrow' />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default NullCart;
