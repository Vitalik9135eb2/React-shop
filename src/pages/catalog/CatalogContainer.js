import React from "react";
import Catalog from "./Catalog";



function CatalogContainer(props) {

    let state = props.store.getState()

    return (

    <Catalog state={state}/>

    )
        
}

export default CatalogContainer;
