import React from "react";
import s from './CardCatalog.module.scss';
import favoritesImg from "./../../../assets/image/cardCatalog/favoritesImg.svg";
import saleImg from "./../../../assets/image/cardCatalog/saleImg.svg";
// import cartImgBuy from "./../../../assets/image/cardCatalog/cartImgBuy.png";
import {NavLink} from "react-router-dom";



function CardCatalog(props) {

    return (
        <div className={s.cardCatalog}>
            <img src={saleImg} alt="sale" />
            <button className={s.buttonFavorit}><img src={favoritesImg} alt="favorites " /></button>
            <div className={s.cardCatalogInner}>
                <img src={props.img} alt="item" />
                <h3 className={s.titleCardCatalog}>{props.title}</h3>
                <span className={s.costCardCatalog}>{props.cost}</span>
                {/*<a href="#">Сообщить о поступлении</a>*/}
                {/* <button className={s.buttonCart}><img src={cartImgBuy} alt="" /></button> */}
                <button className={s.showProduct}><NavLink to='/productCard'>посмотреть товар</NavLink></button>
            </div>
        </div>

    )
}

export default CardCatalog