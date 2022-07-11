import axios from 'axios';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Header from './components/Header/Header';
import RightSide from './components/RightSide/RightSide';
import Favorites from './components/pages/Favorites/Favorites';
import appContext from './context';

function App(props) {
  const [rightSide, setRightSide] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const addRightSide = () => {
    setRightSide(!rightSide);
  };

  const removeRightSide = () => {
    setRightSide(!rightSide);
  };

  const onFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://62acc3c99fa81d00a7b936b6.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
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

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://62acc3c99fa81d00a7b936b6.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post('https://62acc3c99fa81d00a7b936b6.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('не удалось добавить в карзину');
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62acc3c99fa81d00a7b936b6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        'https://62acc3c99fa81d00a7b936b6.mockapi.io/cart'
      );

      const favoritesResponse = await axios.get(
        'https://62acc3c99fa81d00a7b936b6.mockapi.io/favorites'
      );

      const itemsResponse = await axios.get(
        'https://62acc3c99fa81d00a7b936b6.mockapi.io/items'
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  const isItemLiked = (id) => {
    return favorites.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <appContext.Provider
      value={{ items, cartItems, favorites, isItemAdded, isItemLiked }}
    >
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
                cartItems={cartItems}
                onFavorite={onFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </div>
    </appContext.Provider>
  );
}

export default App;
