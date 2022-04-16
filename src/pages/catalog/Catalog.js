import React from "react";

import s from './_Catalog.module.scss';
import BlockInfo from "./../../components/blockInfo/BlockInfo";
import BlockFilter from "./../../components/blokFilter/BlockFilter";
import CardCatalog from "./cardCatalog/CardCatalog";
import Pagination from "./pagination/Pagination";



function Catalog(props) {

    let cardCAtalogItem = props.state.cardCAtalogData.cardCAtalogData.map( item => {
        return(
            <CardCatalog title={item.title} img={item.img} cost={item.cost} />
        )
    })

    return (
        <div>

            <BlockInfo title="Гидроциклы" />

            <div className={s.CatalogContainer}>
                <BlockFilter />
                <div >
                    <div className={s.cardCatalogContainer}>
                        {cardCAtalogItem}
                    </div>
                    <div className={s.cardCatalogPaginationInner}>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default Catalog;
