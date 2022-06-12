const RightSide = () => {
  return (
    <div style={{ display: 'none' }} className='overlay'>
      <div className='right-side'>
        <div className='cart-items'>
          <h2>
            Корзина{' '}
            <img
              className='close-cart'
              width={32}
              height={32}
              src='img/close-cart.svg'
              alt='closeCart'
            />
          </h2>
          <div className='cart-item'>
            <img
              width={70}
              height={70}
              src='/img/sneakers2.jpg'
              alt='sneakers'
            />
            <div className='cart-item__info'>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className='close-cart'
              width={32}
              height={32}
              src='img/close-cart.svg'
              alt='closeCart'
            />
          </div>
          <div className='cart-item'>
            <img
              width={70}
              height={70}
              src='/img/sneakers4.jpg'
              alt='sneakers'
            />
            <div className='cart-item__info'>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className='close-cart'
              width={32}
              height={32}
              src='img/close-cart.svg'
              alt='closeCart'
            />
          </div>
        </div>
        <div className='total'>
          <div className='total-info'>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </div>
          <button className='green-button'>
            Оформить заказ
            <img src='/img/right-arrow.svg' alt='arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
