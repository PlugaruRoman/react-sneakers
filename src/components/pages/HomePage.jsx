import SearchBlock from '../SearchBlock/SearchBlock';
import Card from '../Card/Card';

const HomePage = ({
  onChangeSearchInput,
  searchValue,
  items,
  onFavorite,
  onAddToCart,
  cartItems,
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
    <div className='container'>
      <SearchBlock
        onChangeSearchInput={onChangeSearchInput}
        searchValue={searchValue}
      />
      <div className='container-content'>{renderItems()}</div>
    </div>
  );
};

export default HomePage;
