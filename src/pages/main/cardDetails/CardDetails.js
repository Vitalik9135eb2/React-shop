import React from "react";
import s from './_cardDetails.module.scss';
import { NavLink } from "react-router-dom";


function CardDetails(props) {
    return (

        <div className={s.cardDetails}>
            <h3 >{props.title}</h3>
            <img src={props.img} alt="#" />
            <div className={s.cardDetailsLink}><NavLink to={props.link}>Подробнее</NavLink></div>
        </div>

    )
}

export default CardDetails;