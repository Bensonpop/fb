import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>Login Facebook</h3>
      <input type="text" placeholder="Email address or Phone number" /><br />
      <input type="text" placeholder="password" name="" id="" /><br />
      <input type="button" value="login" />
      <br />
      <br/>
      <Typography variant="h3" color='primary'>Login to Facebook</Typography>
      <TextField label="Email" variant='outlined'/><br /><br />
      <TextField label='Password' type={'password'} variant='outlined'/>

    </div>
  )
}

export default Login
