import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Style from './storeBascket_page.module.css';
import imageSrc3 from '../assets/cardimage/headphonesline.png';
import { Link } from 'react-router-dom';
function StoreBasket() {
  return (
    <>
      <Header />
      <div className={Style.conteiner}>
        <div className={Style.content}>
          <div className={Style.items}>
            <div className={Style.grid_item}>
              <div className={Style.card_body}>
                <img src={imageSrc3} alt="Apple EarPods" />
                <h3>Apple EarPods</h3>
                <p className={Style.price}>2327 Р</p>
              </div>
            </div>
          </div>
          <div className={Style.cart__checkout}>
            <div className={Style.final_price}>
              <div className={Style.final_price_header}>
                <span>ИТОГ</span>
                <span>3231 Р</span>
              </div>
              <Link to='/' className={Style.buy}>Перейти к оформлению</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StoreBasket;
