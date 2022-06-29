import SearchBlock from '../SearchBlock/SearchBlock';
import Card from '../Card/Card';

const HomePage = ({
  onChangeSearchInput,
  searchValue,
  items,
  onFavorite,
  onAddToCart,
  cartItems,
}) => {
  return (
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
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                key={index}
                favorited={false}
                added={cartItems.some(
                  (obj) => Number(obj.id) === Number(item.id)
                )}
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

export default HomePage;
