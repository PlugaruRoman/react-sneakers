import axios from 'axios';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Header from './components/Header/Header';
import RightSide from './components/RightSide/RightSide';
import Favorites from './components/pages/Favorites/Favorites';

function App(props) {
  const [rightSide, setRightSide] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addRightSide = () => {
    setRightSide(!rightSide);
  };

  const removeRightSide = () => {
    setRightSide(!rightSide);
  };

  const onFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://62acc3c99fa81d00a7b936b6.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://62acc3c99fa81d00a7b936b6.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onAddToCart = (obj) => {
    axios.post('https://62acc3c99fa81d00a7b936b6.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62acc3c99fa81d00a7b936b6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
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

    axios
      .get('https://62acc3c99fa81d00a7b936b6.mockapi.io/favorites')
      .then((res) => {
        setFavorites(res.data);
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
      <Routes>
        <Route
          path='/favorites'
          element={
            <Favorites
              items={favorites}
              onFavorite={onFavorite}
              onAddToCart={onAddToCart}
              favorites={true}
            />
          }
        />
        <Route
          path='/'
          element={
            <HomePage
              onChangeSearchInput={onChangeSearchInput}
              searchValue={searchValue}
              items={items}
              onFavorite={onFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
