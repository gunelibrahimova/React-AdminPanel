import { BASE_URL } from "../../api/Config"
import { LOGIN_USER } from "../Constants/LoginConstants"

export const loginUserAction = (email,password) => async (dispatch, getState)=>{
    var user = await fetch(`${BASE_URL}Auth/login`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                email: email,
                password:password
            }
        )
    }).then(response => response.json())
    if (user.status === 200) {
        localStorage.setItem("userInfo",JSON.stringify(user.message))
    }
    dispatch({
        type: LOGIN_USER,
        payload: user
    })
}