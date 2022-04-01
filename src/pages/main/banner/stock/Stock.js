import React from "react";
import s from './_Stock.module.scss';
import { NavLink } from "react-router-dom";



function Stock(props) {


    return (
        <NavLink to="#" className={s.stock} id={props.stockBanerData.id}>
            <span className={s.stockInfo}>Акция</span>
            <div className={s.stockPriceNormalWrapper}>
                <span className={s.stockPrice}>{props.stockBanerData.price}</span>
                <span className={s.stockPriceNormal}>{props.stockBanerData.priceBefore}</span>
            </div>
            <div className={s.stockImgItemWrapper}>
                <img className={s.stockImgItem} src={props.stockBanerData.img} alt="item" />
                <h2>{props.stockBanerData.itemName}</h2>
            </div>
            <div className={s.stockTimeAction}>
                <span>Акция действует до</span>
                <span className={s.stockDate}>{props.stockBanerData.stockData}</span>
            </div>
        </NavLink>
    );
}

export default Stock;