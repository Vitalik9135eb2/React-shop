import MainMenu from "./mainMenu/MainMenu";
import Nav from "./nav/Nav";
import s from './_header.module.scss';



function Header() {
  return (
    <header className={s.header}>
      <Nav />
      <MainMenu />

    </header>
  );
}

export default Header
