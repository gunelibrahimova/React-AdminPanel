import { FormControl, TextField, Button, Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUserAction } from '../../redux/Actions/LoginAction'

const Login = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispach = useDispatch()

  const loginn = () => {
    dispach(loginUserAction(email, password))
    if (userInfo.message) {
      console.log("Login olundu");
    }else{
      navigate("/dashboard")

    }
  }
  useEffect(() => {
  }, [userInfo])




  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-lg-4 m-auto">
          <Avatar className='m-auto'>H</Avatar>
          <FormControl fullWidth>
            <TextField onChange={(a) => setEmail(a.target.value)} className='my-2' id="outlined-basic" label="Email" variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <TextField onChange={(a) => setPassword(a.target.value)} className='my-2' id="outlined-basic" label="Password" type='password' variant="outlined" />
          </FormControl>
          <FormControl fullWidth>
            <Button onClick={() => loginn()} className='my-2' variant="contained" color="primary">
              Daxil ol
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default Login