import React from "react";
import Main from "./Main";



function MainContainer(props) {

    let state = props.store.getState()


    return (

        <Main state={state}/>

    );
}

export default MainContainer;
