import { GET_PRODUCT } from "../Constants/ProductConstants";


export const ProductReducer = ( state = {products: []}, action) =>{
    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state,
                products : action.payload
            }
    
        default:
            return state;
    }
}