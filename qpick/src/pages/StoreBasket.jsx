// pages/StoreBasket.jsx
import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import Style from './styles/storeBascket_page.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import minusIcon from '../assets/minus.svg'
import plusIcon from '../assets/plus.svg'

function StoreBasket() {
  const items = useSelector((state) => state.basket.items);
  const [value, setValue] = React.useState(1);


  return (
    <>
      <Header />
      <div className={Style.conteiner}>
        <div className={Style.content}>
          <div className={Style.items}>
            {items.map((item, index) => (
              <div key={index} className={Style.grid_item}>
                <div className={Style.card_body}>
                  <img src={item.img} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <div className={Style.counter}>{value}</div>

                  <img className={Style.plus} src={plusIcon} onClick={() => setValue(value + 1)} alt='plus'/>
                  <p className={Style.price}>{item.price} Р</p>
                  <img className={Style.minus} src={minusIcon}  onClick={() => setValue(value - 1)} alt='minus'/>
                </div>
              </div>
            ))}
          </div>
          <div className={Style.cart__checkout}>
            <div className={Style.final_price}>
              <div className={Style.final_price_header}>
                <span>ИТОГ</span>
                <span>{items.reduce((total, item) => total + item.price, 0)} Р</span>
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
