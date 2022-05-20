

const setProduct = "Set__Product";


let initialState = {
    cardProductData:[

    ],
}

let cardProductDataReduser = (state = initialState, action) => {
    switch(action.type){


        case setProduct:
            return{
                ...state,
                cardProductData: [...state.cardProductData, ...action.cardProductData]
            }

        default:
            return state

    }


}

export const setProductAC = (cardProductData) =>{
    return{
        type: setProduct,
        cardProductData
    }
}

export default cardProductDataReduser