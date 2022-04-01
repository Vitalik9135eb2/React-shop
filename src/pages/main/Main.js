import React from "react";

import s from './_main.module.scss';
import CardBaner from "./cardBaner/CardBaner";

import BlockSearch from "../../components/blockSearch/BlockSearch";
import CardDetails from "./cardDetails/CardDetails";
import Goods from "../../components/goods/Goods";
import Banner from "./banner/Banner";



function Main(props) {


    let cardDetailsItem = props.cardDetailsData.map( item => {
        return(
            <CardDetails id={item.id} title={item.title} img={item.img} link={item.link} />
        )
    })

    return (

        <div className={s.main}>
            <Banner stockBanerData={props.stockBanerData} />
            <BlockSearch />
            <div className={s.cardDetailsInner}>
                {cardDetailsItem}
            </div>
            <Goods />
            <CardBaner />
            <Goods button=" " />
        </div>

    );
}

export default Main;
