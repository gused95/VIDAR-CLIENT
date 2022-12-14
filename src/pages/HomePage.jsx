import "../App.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// ---------- template signup mui--------------------
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlusOneIcon from '@mui/icons-material/PlusOne';


const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,       
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// ---------- template signup mui--------------------



function HomePage() {
  return (
      <ThemeProvider theme={theme}>
        
        <Grid container direction="row-reverse" component="main" sx={{ height: '100vh' }}>
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
                    Tus Ch??charas | Cacharritos
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
                  ch??charas
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
                    Cambia la vida de alguien don??ndolas
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
