import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Style from "./notFound-style.module.css"
import photo from "../assets/empty-cart.png"

function NotFound () {
    return (
    <>
    <Header/>
    <div className={Style.image}>
        <img src={photo} alt="falsebascket" />
    </div>
    <div className={Style.NotFound_title}>
       <p>К сожалению данная страница не найдена</p>
    </div>
    <Footer/>
    </>
    )
}

export default NotFound;