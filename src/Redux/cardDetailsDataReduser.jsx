
import img1 from './../assets/image/cardDetails/img1.svg';
import img2 from './../assets/image/cardDetails/img2.svg';
import img3 from './../assets/image/cardDetails/img3.svg';
import img4 from './../assets/image/cardDetails/img4.svg';
import img5 from './../assets/image/cardDetails/img5.svg';
import img6 from './../assets/image/cardDetails/img6.png';



let initialState = {
    cardDetailsData:[
        {id: 1, title: "Квадроциклы", img: img1, link: './../catalog'},
        {id:2, title: "Гидроциклы", img: img2, link: "./../catalog"},
        {id:3, title: "Катера", img: img3, link: './../catalog'},
        {id:4, title: "Снегоходы", img: img4, link: './../catalog'},
        {id:5, title: "Вездеходы", img: img5, link: './../catalog'},
        {id:6, title: "Двигатели", img: img6, link: './../catalog'}
    ]
}

let CardDetailsDataReduser = (state = initialState, action) => {

    return state

}

export default CardDetailsDataReduser