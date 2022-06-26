import Card from '../../Card/Card';
import styles from './Favorites.module.scss';

const Favorites = ({ items = [], onFavorite, onAddToCart }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мои закладки</h2>
      <div className={styles.containerContent}>
        {items.map((item, index) => {
          return (
            <Card
              title={item.title}
              price={item.price}
              img={item.img}
              id={item.id}
              key={index}
              favorited={false}
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
