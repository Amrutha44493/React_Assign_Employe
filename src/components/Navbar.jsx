import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'olive' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E M P - D A S H
          </Typography>
          <Button className="nav-button" style={{ transition: 'background-color 0.3s ease', padding: '8px 16px' }}>
              <Link to={'/'} style={{ color: "white", textDecoration: 'none' }}>Home</Link>
            </Button>
            <Button className="nav-button" style={{ transition: 'background-color 0.3s ease', padding: '8px 16px' }}>
              <Link to={'/employee'} style={{ color: "white", textDecoration: 'none' }}>Employee</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
