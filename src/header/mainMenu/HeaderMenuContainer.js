
import MainMenu from './MainMenu';


function HeaderMenuContainer (props) {

// let state = props.headerNavData.headerNavData
let state = props.store.getState().headerNavData.headerNavData

    return (
      
      <MainMenu state={state}/>
      
    );
}

export default HeaderMenuContainer;
