import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

// ---------- template signup mui--------------------

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import theme from "../myTheme";

// ---------- template signup mui--------------------

// ----------  input adornment   --------------------

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



// ----------  input adornment   --------------------

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    lastName: "",
    showPassword: false,
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate("/location");//PATHS.HOMEPAGE
    });
  }

    // For Input Adornmet in password
    const handleClickShowPassword = () => {
      setForm({
        ...form,
        showPassword: !form.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    // For Input Adornmet in password

  return (
      <ThemeProvider theme={theme}>
        <Grid container direction="row-reverse" component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(../venta.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <InsertEmoticonIcon color="secondary" sx={{ fontSize: 55, m: 1 }}/>
              <Typography component="h1" variant="h5">
                Bienvenido a VIDAR
              </Typography>
              {/* starts form */}
              <Box component="form" noValidate onSubmit={handleFormSubmission} sx={{ mt: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                      <TextField
                      label="Email"

                      id="email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      required

                      margin="normal"                  
                      fullWidth                                                 
                      autoFocus
                      variant="filled"
                      color="secondary"
                      />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ mt: 1, display: 'block' }} variant="filled" color="secondary">
                        <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
                          <FilledInput
                            id="filled-adornment-password"
                            type={form.showPassword ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {form.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Contraseña"
                            required
                            minLength="8"
                            
                            fullWidth
                          />
                      </FormControl>
                  </Grid>

                </Grid>
                
                {error && (
                  <Box component='div' sx={{textAlign: 'center'}}>
                    <Typography variant="body1" color="initial">
                      <p>There was an error submiting the form:</p>
                      <p>{error.message}</p>
                    </Typography>
                  </Box>
                )}
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Iniciar sesión
                </Button>

                <Grid container>

                  <Grid item xs>
                    <Box component='div' sx={{textAlign: 'center'}}>
                      <Link to={"/auth/signup"}>
                        {"No tienes una cuenta? Regístrate"}
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {/* ends form */}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}
