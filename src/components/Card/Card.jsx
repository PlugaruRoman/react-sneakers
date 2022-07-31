import ContentLoader from 'react-content-loader';
import appContext from '../../context';
import { useContext } from 'react';
import styles from './Сard.module.scss';

const Card = ({
  id,
  img,
  title,
  price,
  onPlus,
  onFavorite,
  loading = false,
}) => {
  const { isItemLiked } = useContext(appContext);
  const { isItemAdded } = useContext(appContext);
  const obj = { id, parentId: id, img, title, price };

  const addSneakers = () => {
    onPlus(obj);
  };

  const likeSneakers = () => {
    onFavorite(obj);
  };

  return (
    <div className={styles.containerContentCard}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox='0 0 150 240'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='0' y='211' rx='8' ry='8' width='80' height='24' />
          <rect x='0' y='172' rx='3' ry='3' width='93' height='15' />
          <rect x='0' y='151' rx='3' ry='3' width='150' height='15' />
          <rect x='115' y='202' rx='8' ry='8' width='32' height='32' />
          <rect x='0' y='50' rx='8' ry='8' width='150' height='91' />
        </ContentLoader>
      ) : (
        <div>
          <div onClick={likeSneakers} className={styles.favorite}>
            {onFavorite && (
              <img
                src={isItemLiked(id) ? 'img/liked.svg' : 'img/unliked.svg'}
                alt='unliked'
              />
            )}
          </div>
          <img
            width={140}
            height={115}
            src={img}
            alt='sneakers
            '
          />
          <h5>{title}</h5>
          <div className={styles.cardInfo}>
            <div>
              <span>Цена:</span>
              <p>{price} руб.</p>
            </div>
            <div className={styles.plusButton} onClick={addSneakers}>
              {onPlus && (
                <img
                  src={
                    isItemAdded(id) ? 'img/checked.svg' : 'img/addsneakers.svg'
                  }
                  alt='addSneakers'
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
