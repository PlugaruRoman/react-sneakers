import styles from './SearchBlock.module.scss';

const SearchBlock = ({ searchValue, onChangeSearchInput }) => {
  return (
    <div className={styles.searchBlock}>
      <h1 className={styles.title}>Все кроссовки</h1>
      <div className={styles.search}>
        <img width={20} height={20} src='img/search.svg' alt='search' />
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
