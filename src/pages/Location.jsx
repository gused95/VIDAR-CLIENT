import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import MediaCard from '../components/MediaCard/MediaCard'

const Location = () => {
  return (
    <Grid 
        container xs={12} 
        component='main' 
        sx={{ height: '100vh' }} 
        justifyContent='center'
        alignItems='center'
    >
        <Grid item>
        <MediaCard />    
        </Grid>
    </Grid>
  )
}

export default Location