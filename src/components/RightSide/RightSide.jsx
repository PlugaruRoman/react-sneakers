import CartItem from './CartItem';
import NullCart from './NullCart';

const RightSide = ({ removeRightSide, onRemoveItem, items = [] }) => {
  return (
    <div className='overlay'>
      <div className='section'>
        <div className='right-side'>
          <div className='cart-items'>
            <h2>
              Корзина
              <div onClick={removeRightSide} className='close-cart__menu'>
                <img
                  className='close-cart'
                  width={32}
                  height={32}
                  src='img/close-cart.svg'
                  alt='closeCart'
                />
              </div>
            </h2>
            {items.length > 0 ? (
              <div className='selected-cart'>
                <div className='items'>
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
