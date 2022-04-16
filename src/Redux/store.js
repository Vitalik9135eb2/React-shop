import {combineReducers, createStore} from "redux";
import CardCAtalogDataReduser from "./cardCAtalogDataReduser";
import CardDetailsDataReduser from "./cardDetailsDataReduser";
import HeaderNavReduser from "./headerNavDataReduser";
import StockBanerDataReduser from "./stockBanerDataReduser";


let redusers = combineReducers({
    headerNavData: HeaderNavReduser,
    stockBanerData: StockBanerDataReduser,
    cardDetailsData: CardDetailsDataReduser,
    cardCAtalogData: CardCAtalogDataReduser,
})

let store = createStore(redusers)



export default store