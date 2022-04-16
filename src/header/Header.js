import HeaderMenuContainer from "./mainMenu/HeaderMenuContainer";
import Nav from "./nav/Nav";
import s from './_header.module.scss';



function Header(props) {

  

  return (
    <header className={s.header}>
      <Nav />
      <HeaderMenuContainer store={ props.store}/>

    </header>
  );
}

export default Header
