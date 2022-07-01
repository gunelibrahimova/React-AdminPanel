import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { LoginReducer } from "./Reducers/LoginReducer";
import { ProductReducer } from "./Reducers/ProductReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    user: LoginReducer,
    products: ProductReducer
})


const loginInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo")) : []

const initialState ={
    user: {userInfo: loginInfoFromLocalStorage},
    products : []
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;