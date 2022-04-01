import MainMenu from "./mainMenu/MainMenu";
import Nav from "./nav/Nav";
import s from './_header.module.scss';



function Header(props) {

  let headerNavData =[
    {id:1, path: "./../catalog", text: "Квадроциклы"},
    {id:2, path: "./../catalog", text: "Катера"},
    {id:3, path: "./../catalog", text: "Гидроциклы"},
    {id:4, path: "./../catalog", text: "Лодки"},
    {id:5, path: "./../catalog", text: "Вездеходы"},
    {id:6, path: "./../catalog", text: "Снегоходы"},
    {id:7, path: "./../catalog", text: "Двигатели"},
    {id:8, path: "./../catalog", text: "Запчасти"},
  ]

  return (
    <header className={s.header}>
      <Nav />
      <MainMenu  headerNavData={ headerNavData} />

    </header>
  );
}

export default Header
