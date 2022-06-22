const CartItem = ({ title, price, img, id, onRemoveItem }) => {
  return (
    <div className='cart-item'>
      <img width={70} height={70} src={img} alt='sneakers' />
      <div className='cart-item__info'>
        <p>{title}</p>
        <b>{price}руб.</b>
      </div>
      <img
        onClick={() => onRemoveItem(id)}
        className='close-cart'
        width={32}
        height={32}
        src='img/close-cart.svg'
        alt='closeCart'
      />
    </div>
  );
};

export default CartItem;
