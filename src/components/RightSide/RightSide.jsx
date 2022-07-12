import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import appContext from '../../context';
import CartItem from './CartItem';
import NullCart from './NullCart';
import Order from './Order';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RightSide = ({ removeRightSide, onRemoveItem, items = [] }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { cartItems, setCartItems } = useContext(appContext);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
                  <button
                    disabled={isLoading}
                    onClick={onClickOrder}
                    className='green-button'
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
