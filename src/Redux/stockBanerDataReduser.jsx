import stockImgItem from "./../assets/image/stock/stock-img-item.svg";




let initialState = {
    stockBanerData:{
        id: 1,
        img: stockImgItem,
        priceBefore: "250 000",
        price: "180 000",
        itemName: 'Лодочный мотор Suzuki DF9.9BRS',
        stockData: '20.03.2021'
    }
}

let StockBanerDataReduser = (state = initialState, action) => {

    return state

}

export default StockBanerDataReduser