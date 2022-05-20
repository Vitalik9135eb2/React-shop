import React from "react";
import CardProduct from "./CardProduct";
import { setProductAC} from "../../Redux/cardProductReduser";
import { connect } from "react-redux";





let mapStateToProps = (state) => {
  return{
      state: state
  }
}


let mapDispatchToProps = (dispatch) =>{
    

    return{
      setProduct: (cardProductData) => {
            dispatch(setProductAC(cardProductData))
        }

    }
}

const CardProductContainer = connect(mapStateToProps, mapDispatchToProps)(CardProduct)





export default CardProductContainer;
