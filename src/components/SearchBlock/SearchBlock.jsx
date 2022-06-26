const SearchBlock = ({ searchValue, onChangeSearchInput }) => {
  return (
    <div className='search-block'>
      <h1 className='title'>Все кроссовки</h1>
      <div className='search'>
        <img width={20} height={20} src='/img/search.svg' alt='search' />
        <input
          value={searchValue}
          onChange={onChangeSearchInput}
          type='search'
          placeholder='Поиск...'
        />
      </div>
    </div>
  );
};

export default SearchBlock;
