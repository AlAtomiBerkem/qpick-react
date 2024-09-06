import React from 'react';
import Styles from './main_page.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Cards from '../components/Cards';

import items from '../db.json';
import wireless from '../wirelessDB.json';

function MainPage() {
  console.log(items);
  return (
    <>
      <Header />
      <div className={Styles.conteiner}>
        <div className={Styles.sortname1}>Наушники</div>
        <div className={Styles.cardConteiner}>
          {items.map((obj, i) => (
            <Cards
              key={i}
              title={obj.title}
              image={obj.img}
              rating={obj.rate}
              price={obj.price}
            />
          ))}
        </div>
        <div className={Styles.sortname2}>Беспроводные наушники</div>
        <div className={Styles.wireless_headphones}>
          {wireless.map((obj, i) => (
            <Cards
              key={i}
              title={obj.title}
              image={obj.img}
              rating={obj.rate}
              price={obj.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
