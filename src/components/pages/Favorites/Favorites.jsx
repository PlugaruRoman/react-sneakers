import { useContext } from 'react';
import Card from '../../Card/Card';
import styles from './Favorites.module.scss';
import appContext from '../../../context';

const Favorites = ({ onFavorite, onAddToCart }) => {
  const { favorites } = useContext(appContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мои закладки</h2>
      <div className={styles.containerContent}>
        {favorites.map((item, index) => {
          return (
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
              id={item.id}
              key={index}
              favorited={true}
              onFavorite={(obj) => {
                onFavorite(obj);
              }}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
