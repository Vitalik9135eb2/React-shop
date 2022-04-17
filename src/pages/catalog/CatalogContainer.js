import React from "react";
import { connect } from "react-redux";
import Catalog from "./Catalog";


let mapStateToProps = (state) => {

    return{
        state: state
    }
}

const CatalogContainer = connect(mapStateToProps)(Catalog)



export default CatalogContainer;
