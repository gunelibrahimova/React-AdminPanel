import { LOGIN_USER } from "../Constants/LoginConstants";

export const LoginReducer = (state = { userInfo: [] }, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
           return state
    }
}