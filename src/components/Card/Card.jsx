import styles from './Сard.module.scss';
import React, { useState } from 'react';

const Card = ({ img, title, price, onPlus }) => {
  const [isAdded, setIsAdded] = useState(true);

  const addSneakers = () => {
    setIsAdded(!isAdded);
    onPlus({ img, title, price });
  };

  const [isLiked, setIsLiked] = useState(true);

  const likeSneakers = () => {
    setIsLiked(!isLiked);
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
