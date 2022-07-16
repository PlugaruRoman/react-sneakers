import SearchBlock from '../SearchBlock/SearchBlock';
import Card from '../Card/Card';
import styles from './HomePage.module.scss';

const HomePage = ({
  onChangeSearchInput,
  searchValue,
  items,
  onFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title
        .toString()
        .toLowerCase()
        .includes(searchValue.toString().toLowerCase())
    );

    return (isLoading ? Array(12).fill({}) : filtredItems).map(
      (item, index) => (
        <Card
          loading={isLoading}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
          key={index}
          onFavorite={(obj) => {
            onFavorite(obj);
          }}
          onPlus={(obj) => {
            onAddToCart(obj);
          }}
        />
      )
    );
  };

  return (
    <div className={styles.container}>
      <SearchBlock
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
      />
      <div className={styles.containerContent}>{renderItems()}</div>
    </div>
  );
};

export default HomePage;
