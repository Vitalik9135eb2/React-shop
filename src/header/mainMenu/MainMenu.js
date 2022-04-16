
import s from './_mainMenu.module.scss'
import { NavLink } from "react-router-dom";


function MainMenu(props) {

   let products = props.state.map(item => <li id={item.id} className={s.menuItem}><NavLink className={s.menuLink} to={item.path}>{item.text}</NavLink></li>)

   return (
      <div className={s.menu}>
         <ul className={s.list}>
            {products}
         </ul>
      </div>
   );
}

export default MainMenu;
