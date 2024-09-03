import React from "react";
import Styles from "./main_page.module.css"
import Header from '../components/header';
import Footer from '../components/footer'

import imageSrc1 from '../assets/cardimage/pods3.png';
import imageSrc2 from '../assets/cardimage/headphones.png';
import imageSrc3 from '../assets/cardimage/headphonesline.png';

import imageSrcw1 from '../assets/cardimage/Image-3.png';
import imageSrcw2 from '../assets/cardimage/airpodspro.png';
import imageSrcw3 from '../assets/cardimage/airpods2.png';


function MainPage () {


    return(
      <>
      <Header/>
         <div className={Styles.conteiner}>

            <div className={Styles.sortname1}>Наушники</div>


           <div className={Styles.cardConteiner}>
            

        <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrc1} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>
   


            <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrc2} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>
   

            <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrc3} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>

            <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrc1} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>


        <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrc2} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>



           <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrc3} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>

           </div>

           <div className={Styles.sortname2} >Беспроводные наушники</div>

           <div className={Styles.wireless_headphones}>

           <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrcw1} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>

            <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrcw2} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>        

            <div className={Styles.grid_item}>
            <div className={Styles.card_top} >
          <img src={imageSrcw3} alt="Apple EarPods"/>
            </div>
            <div className={Styles.card_body}>

            <h3>Apple EarPods</h3>
          <p className={Styles.price}>2327 Р</p>
          <div className={Styles.rating}>
            <span>★ {4.6}</span>
          </div>
          <button className={Styles.buy}>Купить</button>
        </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default MainPage;

