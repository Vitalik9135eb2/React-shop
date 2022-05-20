import React from "react";
import { connect } from "react-redux";
import Catalog from "./Catalog";
import { setUsersAC} from "../../Redux/cardCAtalogDataReduser";



let mapStateToProps = (state) => {
    return{
        state: state
    }
}

let mapDispatchToProps = (dispatch) =>{
    

    return{
        setUsers: (cardCAtalogData) => {
            dispatch(setUsersAC(cardCAtalogData))
        }

    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog)



export default CatalogContainer;
