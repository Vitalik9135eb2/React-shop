import React from "react";
import { connect } from "react-redux";
import Main from "./Main";



// function MainContainer(props) {

//     let state = props.store.getState()


//     return (

//         <Main state={state}/>

//     );
// }

let mapStateToProps = (state) => {

    return{
        state: state
    }
}

const MainContainer = connect (mapStateToProps) (Main)

export default MainContainer;
