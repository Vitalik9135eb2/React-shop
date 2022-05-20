import React from "react";

import s from './_Catalog.module.scss';
import BlockInfo from "./../../components/blockInfo/BlockInfo";
import BlockFilter from "./../../components/blokFilter/BlockFilter";
import CardCatalog from "./cardCatalog/CardCatalog";
import Pagination from "./pagination/Pagination";
import * as axios from "axios";


import img11 from "./../../assets/image/cardCatalog/img11.svg";
import img12 from "./../../assets/image/cardCatalog/img12.svg";


class Catalog extends React.Component{


    componentDidMount(){
        axios.get('http://localhost:3000/node').then(response => {
        this.props.setUsers(response.data)

    })
    }

    render(){
        
        let cardCAtalogItem = this.props.state.cardCAtalogData.cardCAtalogData.map(item => {
            return (
                <CardCatalog title={`${item.nameProduct} ${item.brand} ${item.modal}`} img={img11} cost={item.price.first + "₽"} type={item.type} />
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
    }
    

    
}

export default Catalog;
