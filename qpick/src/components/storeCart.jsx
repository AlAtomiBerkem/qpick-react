import React from "react";
import Style from './storeCart.module.css';

const StoreCart = ({ img, alt, title, price }) => {
  return (
    <div className={Style.items}>
    <div className={Style.grid_item}>
      <div className={Style.card_body}>
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p className={Style.price}>{price} Р</p>
      </div>
    </div>
    </div>
  );
};


export default StoreCart;
