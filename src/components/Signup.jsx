import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h1>Welcome </h1>
      <h3>Create a New Account</h3>
      <input type="text" placeholder='firstname' /><br />
      <input type="text" placeholder='surname' /><br />
      <input type="text" placeholder='new email' name="" id="" /><br />
      <input type="password"  placeholder='new password'/><br />
      <input type="password" placeholder='conform password'/><br />
      <button type='submit'>login</button>
      <br />
      <br />
      <Typography variant='h3' color='primary'>Login to Facebook</Typography>
      <TextField label='Email' variant='filled'></TextField><br /><br />
      <TextField label="Password" type="password" variant='filled'></TextField><br />
      <Button type='submit' color='primary' variant='outlined'>Sign Up</Button>
      
    </div>
  )
}

export default Signup
