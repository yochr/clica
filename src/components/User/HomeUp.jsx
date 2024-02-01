import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BusinessDetails from '../BussnesData/BusinessDetails';
function ResponsiveAppBar() {

  return (
    <AppBar position="fixed"  sx={{ backgroundColor: '#424242'}}>
      <Container maxWidth="xl">
        <Toolbar>
        <Box height={80} sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <BusinessDetails/>
          </Box>
            <img src='img/logo.jpg'/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
