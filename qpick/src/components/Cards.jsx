// components/Cards.js
import React from 'react';
import styles from './card_style.module.css';
import { useDispatch } from 'react-redux';
import { incrementItemCount } from '../redux/cardSlice.js';

function Cards({ img, alt, title, price, rating }) {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(incrementItemCount());
  };

  return (
    <div className={styles.grid_item}>
      <div className={styles.card_top}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.card_body}>
        <h3>{title}</h3>
        <p className={styles.price}>{price} Р</p>
        <div className={styles.rating}>
          <span>★ {rating}</span>
        </div>
        <button className={styles.buy} onClick={handleBuyClick}>
          Купить
        </button>
      </div>
    </div>
  );
}

export default Cards;
