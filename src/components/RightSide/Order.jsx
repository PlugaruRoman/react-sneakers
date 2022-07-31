import styles from './Order.module.scss';

const Order = (props) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderItems}>
        <div className={styles.orderImg}>
          <img width={83} height={120} src='img/order.png' alt='order' />
        </div>

        <div className={styles.orderInfo}>
          <h3 className={styles.orderTitle}>Заказ оформлен!</h3>
          <span className={styles.orderText}>
            {`Ваш заказ #${props.orderId} скоро будет передан курьерской доставке`}
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

export default Order;
