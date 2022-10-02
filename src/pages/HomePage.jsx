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
import { palette } from '@mui/system';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlusOneIcon from '@mui/icons-material/PlusOne';


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
      <ThemeProvider theme={theme}>
        
        <Grid container direction="row-reverse" component="main" sx={{ height: '90vh' }}>
          <CssBaseline />
          {/* img */}
          <Grid item
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
          {/* img */}
          
          {/* text */}
          <Grid item  xs={12} sm={8} md={6} component={Paper} elevation={6} >
            
            <Grid item container direction="column" 
              justifyContent="space-evenly"  
              alignItems="center"
              sx={{ height: '100vh', textAlign: 'center' }}
            >

              <Grid item>
                  <Typography variant="h5" gutterBottom>
                    Vende | Intercambia | Dona
                  </Typography>                  
                  <Typography variant="h5" gutterBottom>
                    Tus Chácharas  
                  </Typography>                  
                  <Typography variant="h5" >
                    y Ayuda Reciclando en Comunidad                
                  </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6" >
                  Conectamos a vecinos para vender,
                </Typography>                  
                <Typography variant="h6" >
                  comprar, intercambiar o donar
                </Typography>                  
                <Typography variant="h6" >
                  chácharas
                </Typography>
              </Grid>

              <Grid item container spacing={1}>
                <Grid item xs={12}
                  sx={{display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        }}>
                  <PlusOneIcon color="success" sx={{ fontSize: 35, mr: 2 }}/>
                  <Typography variant="h6">
                    Dale otra vida a las cosas que ya no usas
                  </Typography>
                </Grid>

                <Grid item xs={12}
                  sx={{display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        }}>
                  <VolunteerActivismIcon sx={{ color: 'purple', fontSize: 35, mr: 2 }} />
                  <Typography variant="h6">
                    Cambia la vida de alguien donándolas
                  </Typography>
                </Grid>
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default HomePage;
