import s from './_nav.module.scss';
import React, {useState} from 'react'
import heart from "./../../assets/image/icons/heart.svg";
import person from "./../../assets/image/icons/person.svg";
import buy from "./../../assets/image/icons/buy.svg";
import Logo from '../logo/Logo';



function Nav(props) {

   const [isActive, setActive] = useState(false);

   const toggleClass = () => {setActive(!isActive);}


   return (
      <> 

      
       <div onClick={ toggleClass} className={s.burgerMenu}>
         <div  className={isActive ? s.burgerInnerActive : s.burgerInner}>
            <span></span>
         </div>
      </div>

      <nav className={isActive ? s.navigationActive : s.navigation}>
         <div  className={s.navigationLeft }>
            <ul className={s.list}>
               <li className={s.listItem}>
                  <a className={s.navigationLeftLink} href="#">Магазины</a>
               </li>
               <li className={s.listItem}>
                  <a className={s.navigationLeftLink} href="#" >Акции</a>
               </li>
               <li className={s.listItem}>
                  <a className={s.listLink} href="#" >Доставка и оплата</a>
               </li>
            </ul>
         </div>
         <div className={s.navigationRight}>
            <div className={s.adress}>
               <a className={s.adressLink} href="#" >Москва,  ул. Науки  25</a>
            </div>
         </div>
         <ul className={s.icons}>
            <li className={s.icon}>
               <a className={s.iconLink} activeClassname={s.active} href="#"><img className={s.iconImg} src={heart} alt="heart-icon" /></a>
            </li>
            <li className={s.icon}>
               <a className={s.iconLink} href="#"><img className={s.iconImg} src={person} alt="person-icon" /></a>
            </li>
            <li className={s.icon}>
               <a className={s.iconLink} href="#"><img className={s.iconImg} src={buy} alt="buy-icon" /></a>
            </li>
         </ul>
         <Logo />
         
      </nav>

      <Logo />
      </>
   );
}

export default Nav;
