import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

// ---------- template signup mui--------------------
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

// ---------- template signup mui--------------------

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
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
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Bienvenido a VIDAR
              </Typography>
              {/* starts form */}
              <Box component="form" noValidate onSubmit={handleFormSubmission} sx={{ mt: 1 }}>
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
                />
                <TextField
                  margin="normal"
                  label="Contraseña"
                  
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                  minLength="8"
                  
                  fullWidth                                                                     
                />

                {error && (
                  <div className="error-block">
                    <p>There was an error submiting the form:</p>
                    <p>{error.message}</p>
                  </div>
                )}
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Iniciar sesión
                </Button>

                <Grid container>

                  <Grid item xs>
                    <Link to={"/auth/signup"}>
                      {"No tienes una cuenta? Regístrate"}
                    </Link>
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
