import React from 'react';


/**Page 1 block nav with picture */
import img1 from './../assets/image/cardDetails/img1.svg';
import img2 from './../assets/image/cardDetails/img2.svg';
import img3 from './../assets/image/cardDetails/img3.svg';
import img4 from './../assets/image/cardDetails/img4.svg';
import img5 from './../assets/image/cardDetails/img5.svg';
import img6 from './../assets/image/cardDetails/img6.png';

/**Page 1 block baner right */
import stockImgItem from "./../assets/image/stock/stock-img-item.svg";
/**Page Catalog All Card */
import img11 from "./../assets/image/cardCatalog/img11.svg";
import img12 from "./../assets/image/cardCatalog/img12.svg";
import img13 from "./../assets/image/cardCatalog/img13.svg";
import img21 from "./../assets/image/cardCatalog/img21.svg";
import img22 from "./../assets/image/cardCatalog/img22.svg";
import img23 from "./../assets/image/cardCatalog/img23.svg";
import img31 from "./../assets/image/cardCatalog/img31.svg";
import img32 from "./../assets/image/cardCatalog/img32.svg";
import img33 from "./../assets/image/cardCatalog/img33.svg";
import img41 from "./../assets/image/cardCatalog/img41.svg";
import img42 from "./../assets/image/cardCatalog/img42.svg";





let state = { 
    
    /** Nav header */
    headerNavData:[
        {id:1, path: "./../catalog", text: "Квадроциклы"},
        {id:2, path: "./../catalog", text: "Катера"},
        {id:3, path: "./../catalog", text: "Гидроциклы"},
        {id:4, path: "./../catalog", text: "Лодки"},
        {id:5, path: "./../catalog", text: "Вездеходы"},
        {id:6, path: "./../catalog", text: "Снегоходы"},
        {id:7, path: "./../catalog", text: "Двигатели"},
        {id:8, path: "./../catalog", text: "Запчасти"},
    ],

    /**Page 1 block nav with picture */
    cardDetailsData:[
        {id: 1, title: "Квадроциклы", img: img1, link: './../catalog'},
        {id:2, title: "Гидроциклы", img: img2, link: "./../catalog"},
        {id:3, title: "Катера", img: img3, link: './../catalog'},
        {id:4, title: "Снегоходы", img: img4, link: './../catalog'},
        {id:5, title: "Вездеходы", img: img5, link: './../catalog'},
        {id:6, title: "Двигатели", img: img6, link: './../catalog'}
    ],

    /**Page 1 block baner right */
    stockBanerData:{
        id: 1,
        img: stockImgItem,
        priceBefore: "250 000",
        price: "180 000",
        itemName: 'Лодочный мотор Suzuki DF9.9BRS',
        stockData: '20.03.2021'
    },

    /**Page Catalog All Card */     
    cardCAtalogData:[
        {id: 1, title: "Гидроцикл BRP SeaDoo GTI 130hp SE Black Mango", img: img11, cost: "1 049 500 ₽"},
      
        {id: 2, title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic", img: img12, cost: "1 100 475 ₽"},
      
        {id: 3, title: "Гидроцикл BRP SeaDoo GTR 230hp X California green", img: img13, cost: "1 323 700 ₽"},
      
        {id: 4, title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream", img: img21, cost: "нет в наличии"},
      
        {id: 5, title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal", img: img22, cost: "1 543 000 ₽"},
      
        {id: 6, title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal", img: img22, cost: "1 543 000 ₽"},
      
        {id: 7, title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up", img: img23, cost: "732 345 ₽"},
      
        {id: 8, title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental", img: img31, cost: "857 666 ₽"},
      
        {id: 9, title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue", img: img32, cost: "1 229 711 ₽"},
      
        {id: 10, title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper", img: img33, cost: "587 440 ₽"},
      
        {id: 11, title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple", img: img41, cost: "587 440 ₽"},
      
        {id: 12, title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla", img: img42, cost: "нет в наличии"},
    ],


    global:[
        // {
        //     id:1,
        //     popular: 1,
        //     nameProduct: "Гидроцикл",
        //     brand: "BPP",
        //     modal: "Sea doo GTI 155ph SE Long Blue Metallic",
        //     country: "Canada",
        //     maxSpeed: "100",
        //     power: "155",
        //     availability: true,
        //     engineType: "petrol",
        //     releaseYear: "2018",
        //     type: "new",
        //     price: {
        //         first: "1 200 476",
        //         after: "1 110 475"
        //     }
        
        // }
    ]



}

export default state