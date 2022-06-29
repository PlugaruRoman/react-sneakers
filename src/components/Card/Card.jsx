import styles from './Сard.module.scss';
import React, { useState } from 'react';

const Card = ({
  id,
  img,
  title,
  price,
  onPlus,
  onFavorite,
  added = false,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = useState(added);
  const [isLiked, setIsLiked] = useState(favorited);

  const addSneakers = () => {
    onPlus({ id, img, title, price });
    setIsAdded(!isAdded);
  };

  const likeSneakers = () => {
    onFavorite({ id, img, title, price });
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.containerContentCard}>
      <div onClick={likeSneakers} className={styles.favorite}>
        <img
          src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'}
          alt='unliked'
        />
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
          <img
            src={isAdded ? './img/checked.svg' : './img/addsneakers.svg'}
            alt='addSneakers'
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
