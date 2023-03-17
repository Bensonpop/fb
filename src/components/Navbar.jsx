import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { color } from '@mui/system';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
  </IconButton>*/}
          <Typography align='center' variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Facebook
          </Typography>

          <Button color='inherit'><Link to='/login' style={{color:'white',textDecoration:'none'}}>Login</Link></Button>
          <Button color="inherit"><Link to='/signup' style={{color:'white',textDecoration:'none'}}>Signup</Link></Button>
          <Button color="inherit"><Link to='/home' style={{color:'white',textDecoration:'none'}}>Home</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default Navbar
