import React from "react";

import s from './_cardProduct.module.scss';
import CardProductImg from "./../../assets/image/cardProduct/product.svg";
import Health from "./../../assets/image/cardProduct/Group.svg";
import Vector from "./../../assets/image/cardProduct/Vector.svg";
import Star from "./../../assets/image/cardProduct/Star.svg";
import DescString from "./DescString";
import FilterLink from "./../blokFilter/blockFilterComponents/filterLink/FilterLink";
import Btn from "../btn/Btn";
import * as axios from "axios";

import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles({
  root: {
    color: "#1C62CD",
  }
})




class CardProduct extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/node').then(response => {
      
      this.props.setProduct(response.data)

    })
  }
  
  render() {

// const classes = style ()

  let productState = this.props.state.cardProductData.cardProductData[5]
  // let productItem = productState[5]
  
  
    return (


      <div className={s.cardProductContener} >

        <div className={s.cardProductLeftWrap}>

          <div className={s.cardProduct}>

            {/* <span className={s.SpanTop}>{productItem.type}</span> */}

            <img className={s.cardProductImg} src={CardProductImg} alt="#" />

            {/* <span className={s.SpanDiscount}>{productItem.price.first}₽</span>
            <span className={s.SpanPrice}>{productItem.price.after} ₽</span> */}

            <span className={s.cardProductSpan}>Нашли дешевле? Снизим цену!</span>

          </div>


        </div>

        <div className={s.cardProductRightWrap}>

          <div className={s.cardProductInfo}>

            {/* <h4 className={s.ProductName}>{`${productItem.nameProduct} ${productItem.brand} ${productItem.modal}`}</h4> */}

            <span className={s.Subtitle}>Код товара: 	366666-2 </span>

            <div className={s.InfoImg}>

              <img className={s.imgVector} src={Vector} alt="#" />

              <img className={s.imgHealth} src={Health} alt="#" />

              <div className={s.rating}>
                {/* <Rating className={classes.root} defaultValue={1} /> */}
              </div>


            </div>


            <div className={s.ProductDescription}>

              <div className={s.InfoLinkWrap}>

                <a className={s.InfoLink} href="#">Характеристики</a>

                <a className={s.InfoLink} href="#">Наличие в магазине</a>

              </div>

              <div className={s.DescStringWrap}>
                <DescString text1="Производитель" text2="Канада" />
                <DescString text1="Количество мест, шт: " text2="3" />
                <DescString text1="Мощность, л.с." text2="155" />
                <DescString text1="Тип двигателя" text2="Бензиновый" />
                <DescString text1="Год выпуска" text2="2018" />

                <FilterLink style={{ margin: "25px 0 0 0", color: "#1C62CD" }} />
              </div>

            </div>


          </div>


        </div>

        <button className={s.cardProductBtn}>Купить</button>

      </div>



    );
  }


}

export default CardProduct;
