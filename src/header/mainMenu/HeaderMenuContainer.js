
import { connect } from 'react-redux';
import MainMenu from './MainMenu';



let mapStateToProps = (state) => {
  return{
    state: state.headerNavData.headerNavData,
  }
}


const HeaderMenuContainer = connect (mapStateToProps) (MainMenu)

export default HeaderMenuContainer;
