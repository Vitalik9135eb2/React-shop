import HeaderMenuContainer from "./mainMenu/HeaderMenuContainer";
import Nav from "./nav/Nav";
import s from './_header.module.scss';



function Header(props) {

  

  return (
    <header className={s.header}>
      <Nav />
      
      <HeaderMenuContainer/>

    </header>
  );
}

export default Header
