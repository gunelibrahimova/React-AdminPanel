import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../components/Login/Login'
import { loginUserAction } from '../redux/Actions/LoginAction'
import Dashboard from './Dashboard'

const Auth = () => {
  const {userInfo} = useSelector((state) => state.user)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(loginUserAction())
  },[])

  console.log("Hello");
  if (userInfo.length !==0 ) {
    return (
      <div>
          <Dashboard />
      </div>
    )
  }else{
    return (
      <div>
          {/* <Login /> */}
      </div>
    )
  }
}

export default Auth