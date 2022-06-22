const NullCart = (props) => {
  return (
    <div className='null-cart'>
      <div className='null-cart-items'>
        <div className='null-img'>
          <img
            width={120}
            height={120}
            src='./img/null-cart.png'
            alt='null-cart'
          />
        </div>

        <div className='null-cart__info'>
          <h3 className='info-title'>Корзина пустая</h3>
          <span className='info-text'>
            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
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

export default NullCart;
