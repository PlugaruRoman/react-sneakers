import styles from './Сard.module.scss';
import React, { useState } from 'react';

const Card = ({
  id,
  img,
  title,
  price,
  onPlus,
  onFavorite,
  favorited = true,
}) => {
  const [isAdded, setIsAdded] = useState(true);
  const [isLiked, setIsLiked] = useState(favorited);

  const addSneakers = () => {
    setIsAdded(!isAdded);
    onPlus({ id, img, title, price });
  };

  const likeSneakers = () => {
    setIsLiked(!isLiked);
    onFavorite({ id, img, title, price });
  };

  return (
    <div className={styles.containerContentCard}>
      <div onClick={likeSneakers} className={styles.favorite}>
        <img
          src={isLiked ? '/img/unliked.svg' : '/img/liked.svg'}
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
            src={isAdded ? './img/addsneakers.svg' : './img/checked.svg'}
            alt='addSneakers'
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
