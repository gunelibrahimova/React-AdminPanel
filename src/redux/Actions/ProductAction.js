import { BASE_URL } from "../../api/Config"
import { GET_PRODUCT } from "../Constants/ProductConstants"

export const getProductsAction = () => async (dispatch, getState) =>{
    let products = await (await fetch(`${BASE_URL}Product/productlist`)).json()

    dispatch({
        type: GET_PRODUCT,
        payload: products.message
    })
} 