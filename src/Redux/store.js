import {combineReducers, createStore} from "redux";
import CardCAtalogDataReduser from "./cardCAtalogDataReduser";
import CardDetailsDataReduser from "./cardDetailsDataReduser";
import cardProductDataReduser from "./cardProductReduser";
import HeaderNavReduser from "./headerNavDataReduser";
import StockBanerDataReduser from "./stockBanerDataReduser";


let redusers = combineReducers({
    headerNavData: HeaderNavReduser,
    stockBanerData: StockBanerDataReduser,
    cardDetailsData: CardDetailsDataReduser,
    cardCAtalogData: CardCAtalogDataReduser,
    cardProductData: cardProductDataReduser 
})

let store = createStore(redusers)

window.store = store

export default store