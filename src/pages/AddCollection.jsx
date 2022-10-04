import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const AddCollection = (props) => {
  
  const [form, setForm] = useState({
    title: '',
    description: '',
    pickLocation: '',
    pickSchedule: '',
    postUntil: '',
  });

  const { title, description, pickLocation, pickSchedule, postUntil } = form;



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
      postUntil,
    }
     console.log(data)

     setForm({
      title: '',
      description: '',
      pickLocation: '',
      pickSchedule: '',
      postUntil: '',
    })
     return
     axios
      .post(`http://localhost:5005/collection`, data)
          .then((response) => {
            //Reset the state
            setForm({
              title: '',
              description: '',
              pickLocation: '',
              pickSchedule: '',
              postUntil: '',
            })
            props.refreshCollection();
          })
  };

// -----     options    -------
const options = [
  {
    value: 1,
    label: '1 semana',
  },
  {
    value: 2,
    label: '2 semanas',
  },
  {
    value: 3,
    label: '3 semanas',
  },
  {
    value: 4,
    label: '4 semanas',
  },
  
];
// -----     options    -------


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
            
              <Grid 
                item
                container 
                xs={11} 
                component={Paper} 
                elevation={5} 
                sx={{ m: 1, padding: 1 }}
                alignItems='center'
              >
                <Grid item xs={3}>
                  <Box width={30} height={30} border={1}>
                    
                  </Box>
                </Grid>
                
                <Grid item xs="auto">
                  <Button>Agrega imagen del objeto</Button>
                  
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
                      placeholder='ej. bicicleta rodada 25 en buen estado'
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
                    placeholder='ej. Fines de semana de 11-12am'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-select-postUntil"
                    select
                    label="Select"
                    type='number'
                    name='postUntil'
                    value={postUntil}
                    onChange={handleInputChange}
                    helperText="Días que estará visible este artículo"
                    fullWidth
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

              </Grid>

            <Button 
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
                    Enviar
            </Button>
          </Box>
        
        
      </Grid>
    </Grid>
  )
}

export default AddCollection