import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Paper from '@mui/material/Paper';

const AddCollection = () => {
  
  const [form, setForm] = useState({
    title: '',
    description: '',
    pickLocation: '',
    pickSchedule: '',
  });

  const { title, description, pickLocation, pickSchedule } = form;



  function handleInputChange(event) {
    const { name, value } = event.target
    return setForm({ ...form, [name]: value});
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
      pickLocation,
      pickSchedule,
    }
     console.log(data)
     return
  };

  return (
    <Grid 
      container component="main" 
      sx={{ height: '100vh' }} 
      justifyContent='center'
      alignItems='center'
    >
      <Grid  
        item 
        container 
        xs={12} 
        sm={8} 
        md={5} 
        component={Paper} 
        elevation={6} 
        square
        justifyContent='center'
      >
        
        <Box component="form" onSubmit={handleFormSubmission}
          sx={{
            my: 1,
            mx: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            
              <Grid item xs={11} component={Paper} elevation={5} sx={{ m: 1 }}>
                Foto
              </Grid>

              <Grid 
                item 
                container 
                xs={11} 
                component={Paper} 
                elevation={5} 
                sx={{ m: 1, padding: 1 }}
                justifyContent='center'
                alignContent='center'
                rowSpacing={2}

                
              >
                  <Grid item xs={12}>
                    <TextField
                      id="title"
                      label="Título"
                      type='text'
                      name='title'
                      value={title}
                      onChange={handleInputChange}
                      variant="filled"
                      fullWidth
                      autoFocus
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      id="description"
                      label="Descripción"
                      type='text'
                      name='description'
                      value={description}
                      onChange={handleInputChange}
                      multiline
                      maxRows={4}
                      variant="filled"
                      fullWidth
                    />
                  </Grid>
                    
              </Grid>

              <Grid 
                item 
                container 
                xs={11} 
                component={Paper} 
                elevation={5} 
                sx={{ m: 1, padding: 1 }}
                justifyContent='center'
                alignContent='center'
                rowSpacing={2}
              >
                <Grid item xs={12}>
                  <TextField
                    id="pickLocation"
                    label="Ubicación aproximada de recolección"
                    type='text'
                    name='pickLocation'
                    value={pickLocation}
                    onChange={handleInputChange}
                    variant="filled"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="pickSchedule"
                    label="Horarios de recolección"
                    type='text'
                    name='pickSchedule'
                    value={pickSchedule}
                    onChange={handleInputChange}
                    variant="filled"
                    fullWidth
                    placeholder='p.e. Fines de semana'
                  />
                </Grid>

              </Grid>

            <Button variant='contained' sx={{ mt: 1 }}>Enviar</Button>
          </Box>
        
        
      </Grid>
    </Grid>
  )
}

export default AddCollection