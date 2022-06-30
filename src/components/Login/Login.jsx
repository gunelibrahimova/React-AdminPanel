import { FormControl, TextField, Button, Avatar } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 m-auto ">
                        <Avatar className='m-auto'>H</Avatar>
                        <FormControl className="my-2" fullWidth>
                            <TextField id="outlined-basic" label="Email" variant="outlined" />
                        </FormControl>
                        <FormControl className="my-2" fullWidth>
                            <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
                        </FormControl>
                        <Button fullWidth variant="contained" color="primary">
                            Success
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login