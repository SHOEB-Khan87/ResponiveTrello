import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import logo1 from "../Assets/logo.gif"
import Toolbar from '@mui/material/Toolbar';
import logo from "../Assets/trello-logos.jpeg"
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import AdbIcon from '@mui/icons-material/Adb';


function Navbar() {
 

  return (

    <AppBar style={{background:"#1d2125"}} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
         <img src={logo1}  style={{height:"20px",width:"100px"}} alt='logo'/>
          </Typography>

         
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={logo1} style={{height:"20px",width:"100px"}} alt='logo'/>
          </Typography>
         

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;