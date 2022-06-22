import Card from './components/Card/Card';
import Header from './components/Header/Header';
import RightSide from './components/RightSide/RightSide';
import SearchBlock from './components/SearchBlock';
import axios from 'axios';
import React, { useState } from 'react';

function App(props) {
  const [rightSide, setRightSide] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const addRightSide = () => {
    setRightSide(!rightSide);
  };

  const removeRightSide = () => {
    setRightSide(!rightSide);
  };

  const onAddToCart = (obj) => {
    axios.post('https://62acc3c99fa81d00a7b936b6.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62acc3c99fa81d00a7b936b6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  React.useEffect(() => {
    axios
      .get('https://62acc3c99fa81d00a7b936b6.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get('https://62acc3c99fa81d00a7b936b6.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  return (
    <div className='wrapper'>
      {rightSide ? (
        <RightSide
          items={cartItems}
          removeRightSide={removeRightSide}
          onRemoveItem={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={addRightSide} />
      <div className='container'>
        <SearchBlock
          onChangeSearchInput={onChangeSearchInput}
          searchValue={searchValue}
        />
        <div className='container-content'>
          {items
            .filter((item) =>
              item.title
                .toString()
                .toLowerCase()
                .includes(searchValue.toString().toLowerCase())
            )
            .map((item, index) => {
              return (
                <Card
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  key={index}
                  onPlus={(obj) => {
                    onAddToCart(obj);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
