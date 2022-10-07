import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { green } from '@mui/material/colors';

const CollectionForm = (props) => {

    const { 
        title, 
        description, 
        pickLocation, 
        pickSchedule, 
        postUntil,
        collecType,
        handleFormSubmission,
        handleInputChange,
        handleFileUpload,
        options1,
        options2,
        imageUrl,
      } = props;    
    
    

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
                

              >
                <Grid 
                  item 
                  xs={12}
                  
                  sx={{
                      my: 1,
                      mx: 1,
                    }}
                >
                    {imageUrl ? 
                    (
                    <>
                      <img src={imageUrl} alt="" width='100%' height='100%' object-fit='cover'/>
                    </>
                    ) : (
                    <>
                      <Avatar 
                        sx=
                        {{ 
                        bgcolor: green[500], 
                        width: '100%', 
                        height: '20vw'
                        }} 
                        variant="rounded"
                      >
                        <AddAPhotoIcon 
                          sx=
                          {{ 
                          bgcolor: green[500], 
                          width: '90%', 
                          height: '10vw'
                          }} 
                        />
                      </Avatar>
                    </>
                    )

                    
                    }
                    
                </Grid>
                
                <Grid 
                  item 
                  xs={12}
                  
                  sx={{
                    my: 1,
                    mx: 1,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <input type="file" onChange={handleFileUpload} />
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
                    id="select-collecType"
                    select
                    label="Select"
                    type='text'
                    name='collecType'
                    value={collecType}
                    onChange={handleInputChange}
                    helperText="¿Dónde quieres agregar este objeto?"
                    fullWidth
                    color='secondary'
                    variant='filled'
                  >
                    {options1.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
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
                    {options2.map((option) => (
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

export default CollectionForm