const Order = (props) => {
  return (
    <div className='order'>
      <div className='order-items'>
        <div className='order-img'>
          <img width={83} height={120} src='./img/order.png' alt='order' />
        </div>

        <div className='order__info'>
          <h3 className='order-title'>Заказ оформлен!</h3>
          <span className='order-text'>
            {`Ваш заказ #${props.orderId} скоро будет передан курьерской доставке`}
          </span>
        </div>
        <button onClick={props.removeRightSide} className='return-button'>
          <img src='/img/left-arrow.svg' alt='arrow' />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default Order;
