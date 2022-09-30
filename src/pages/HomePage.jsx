import logo from "../logo.svg";
import "../App.css";
import { Button, Card } from "@mui/material";
import CardComp from "../components/CardComp/CardComp";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// ---------- template signup mui--------------------
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

// ---------- template signup mui--------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,       
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (
    <div className="App">
      <div>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
              backgroundImage: 'url(../vecinosHome.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              
              <Typography component="h1" variant="h5">
                Bienvenido a VIDAR
              </Typography>
              {/* starts form */}
              <Box component="form" noValidate sx={{ mt: 1 }}>
                {/* <TextField
                  label="input-username"

                  

                  margin="normal"                  
                  fullWidth                                                 
                  autoFocus                                 
                />
                <TextField
                  margin="normal"
                  label="input-password"
                  
                  
                  
                  fullWidth                                                                     
                /> */}

                


                {/* <Grid container>

                  <Grid item xs>
                    <Link href="#" variant="body2">
                      {"No tienes una cuenta? Regístrate"}
                    </Link>
                  </Grid>
                </Grid> */}
              </Box>
              {/* ends form */}
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      </div>
    </div>
  );
}

export default HomePage;
