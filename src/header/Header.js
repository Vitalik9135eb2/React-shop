import MainMenu from "./mainMenu/MainMenu";
import Nav from "./nav/Nav";
import s from './_header.module.scss';



function Header(props) {

  

  return (
    <header className={s.header}>
      <Nav />
      <MainMenu  headerNavData={ props.headerNavData} />

    </header>
  );
}

export default Header
