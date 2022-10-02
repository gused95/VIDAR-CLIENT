import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as CONSTS from "../../utils/consts";
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@emotion/react';
import theme from '../../myTheme';

const Navbar2 = (props) => {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Box >
                <Link to={PATHS.HOMEPAGE} className="nav__projectName">
                    <Typography variant="h6" component="div">
                    {CONSTS.CAPITALIZED_APP.toUpperCase()}
                    <img src="../hoja.png" width="20vw"/>
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }}>

            </Box>
            <Box>
                    {/* Este es el menu que se muestra cuando un user inicio sesion */}
                    {props.user ? (
                    <>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item>
                                <Link to={PATHS.PROTECTEDPAGE} className="authLink">
                                Protected Page
                                </Link>  
                            </Grid>
                            <Grid item>
                                <Button color="secondary" variant='contained'  onClick={props.handleLogout}>
                                {props.user.name}
                                </Button>  
                            </Grid>
                            <Grid item>
                                <Button color="secondary" variant='contained'  onClick={props.handleLogout}>
                                Logout
                                </Button>    
                            </Grid>
                        </Grid>
                        
                    </>
                    ) : (
                    <>
                        <Link to={"/auth/signup"} className="authLink">
                        <Button color="secondary" variant='contained'>Registrate</Button>
                        </Link>
                        <Link to={"/auth/login"} className="authLink">
                        <Button color="secondary" variant='contained'>Iniciar Sesión</Button>
                        </Link>
                    </>
                    )}
            </Box>
            </Toolbar>
        </AppBar>
        </Box>
    </ThemeProvider>
  )
}

export default Navbar2