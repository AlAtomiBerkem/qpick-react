import React from 'react';
import styles from './card_style.module.css'; // Use lowercase "s" for consistency
// import img from '../assets/cardimage/Image-3.png'

function Cards({img, alt, title, price, rating }) {
  return (
    <div className={styles.grid_item}>
      <div className={styles.card_top}>
         <img 
         src={img} 
         alt={alt}/>
      </div>
      <div className={styles.card_body}>
        <h3>{title}</h3>
        <p className={styles.price}>{price} Р</p>
        <div className={styles.rating}>
          <span>★ {rating}</span>
        </div>
        <button className={styles.buy}>Купить</button>
      </div>
    </div>
  );
}


export default Cards;
