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
import { color } from '@mui/system';




const linkStyle = {
    textDecoration: 'none',
    color: 'white'
}

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
            <Box component='div'>
                <Link to={PATHS.HOMEPAGE} style={linkStyle}>
                    <Grid container spacing={1} alignItems='center'>
                      
                      <Grid item={6}>
                        <Typography variant="h5" >
                            {CONSTS.CAPITALIZED_APP.toUpperCase()}
                        </Typography>
                      </Grid>
                      <Grid item={6}>
                        <img src="../hoja.png" width="30vw"/>
                      </Grid>

                    </Grid>
                    {/* <Typography variant="h6" component="div">
                    {CONSTS.CAPITALIZED_APP.toUpperCase()}
                    
                    </Typography> */}
                </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }}>

            </Box>
            <Box>
                    
                    {props.user ? (
                    <>
                        <Grid container spacing={1} alignItems='center'>
                       
                            <Grid item>
                                <Link to={"/location"} style={linkStyle}>
                                    <Button color="secondary" variant='outlined'  >
                                        Ubicación
                                    </Button>    
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={"/add"} style={linkStyle}>
                                    <Button color="secondary" variant='outlined'  >
                                        Agregar una colección
                                    </Button>    
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={"/myCollection"} style={linkStyle}>
                                    <Button color="secondary" variant='outlined' >
                                        Mi coleccion
                                    </Button>    
                                </Link>
                            </Grid>
                            <Grid item>
                                
                                {(`Bienvenidx ${props.user.name}`).toUpperCase()}
                                
                            </Grid>
                            <Grid item>
                                <Link to={"/"} style={linkStyle}>
                                    <Button color="secondary" variant='outlined'  onClick={props.handleLogout}>
                                        Logout
                                    </Button>    
                                </Link>
                            </Grid>
                        </Grid>
                        
                    </>
                    ) : (
                    <>
                        {/* Este es el menu que se muestra cuando un user inicio sesion */}
                        
                        <Grid container spacing={1}>
                          <Grid item>
                            <Link to={"/auth/signup"} style={linkStyle}>
                                <Button color="secondary" variant='outlined'>Registrate</Button>
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link to={"/auth/login"} style={linkStyle}>
                                <Button color="secondary" variant='outlined'>Iniciar Sesión</Button>
                            </Link>
                          </Grid>
                        </Grid>

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