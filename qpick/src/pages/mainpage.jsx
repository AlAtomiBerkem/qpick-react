import React from 'react';
import Styles from './styles/main_page.module.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Cards from '../components/Cards';

import {data} from '../db';
import {data2} from '../wirelessDB';

function MainPage() {
  console.log(data);
  return (
    <>
      <Header />
      <div className={Styles.conteiner}>
        <div className={Styles.sortname1}>Наушники</div>
        <div className={Styles.cardConteiner}>
          {data.map((obj, i) => (
            <Cards
              key={i}
              title={obj.title}
              img={obj.img}
              alt={obj.alt}
              rating={obj.rate}
              price={obj.price}
            />
          ))}
        </div>
        <div className={Styles.sortname2}>Беспроводные наушники</div>
        <div className={Styles.wireless_headphones}>
          {data2.map((obj, i) => (
            <Cards
              key={i}
              title={obj.title}
              img={obj.img}
              alt={obj.alt}
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
