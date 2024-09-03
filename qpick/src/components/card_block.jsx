import React from "react";
import styles from "./card_style.module.css"; // Use lowercase "s" for consistency

import imageSrc1 from "../assets/cardimage/pods3.png";

function Cards() {

  return (
    <div className={styles.gridItem}>
      <div className={styles.cardTop}>
        <img src={imageSrc1} alt="Apple EarPods" />
      </div>
      <div className={styles.cardBody}>
        <h3>Apple EarPods</h3>
        <p className={styles.price}>2327 Р</p>
        <div className={styles.rating}>
          <span>★ {4.6}</span>
        </div>
        <button className={styles.buy}>Купить</button>
      </div>
    </div>
  );
}

export default Cards;