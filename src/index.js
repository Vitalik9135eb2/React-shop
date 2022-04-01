import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import img1 from './assets/image/cardDetails/img1.svg';
import img2 from './assets/image/cardDetails/img2.svg';
import img3 from './assets/image/cardDetails/img3.svg';
import img4 from './assets/image/cardDetails/img4.svg';
import img5 from './assets/image/cardDetails/img5.svg';
import img6 from './assets/image/cardDetails/img6.png';

import stockImgItem from "./assets/image/stock/stock-img-item.svg";



let cardDetailsData = [
  {id: 1, title: "Квадроциклы", img: img1, link: './../catalog'},
  {id:2, title: "Гидроциклы", img: img2, link: "./../catalog"},
  {id:3, title: "Катера", img: img3, link: './../catalog'},
  {id:4, title: "Снегоходы", img: img4, link: './../catalog'},
  {id:5, title: "Вездеходы", img: img5, link: './../catalog'},
  {id:6, title: "Двигатели", img: img6, link: './../catalog'}
  
]

let stockBanerData ={
  id: 1,
  img: stockImgItem,
  priceBefore: "250 000",
  price: "180 000",
  itemName: 'Лодочный мотор Suzuki DF9.9BRS',
  stockData: '20.03.2021'
}




ReactDOM.render(
  <React.StrictMode>
    <App  cardDetailsData={cardDetailsData}
          stockBanerData={stockBanerData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
