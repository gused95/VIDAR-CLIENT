import React, { useEffect, useState } from 'react'

// reaponsive grid --------------------------
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Margin } from '@mui/icons-material';
import MediaCard from '../components/MediaCard/MediaCard';
import CardComp from '../components/CardComp/CardComp';
import ObjectCard from '../components/ObjectCard/ObjectCard';
import AddCollection from './AddCollection';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
// reaponsive grid --------------------------

const MyCollection = () => {

    const [collection, setCollection] = useState([])
    
    const API_URL = "http://localhost:5005"

    const getAllCollection = () => {
        axios
            .get(`${API_URL}/celulares/getcol`)
                .then((response) => setCollection(response.data))
                .catch((error) => console.log(error))
    }

    // We set this effect will run only once, after the init. render
    // by setting the empty dependency array - []

    useEffect(() => {
        getAllCollection();
    }, [])

  return (
    <div>
            {/* just for test: */}
    <Box component='div' sx={{ height: '100vh' }}>
        <AddCollection refreshCollection={getAllCollection} />
    </Box>        
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
            sm={10} 
            md={10} 
            component={Paper} 
            elevation={8} 
            square
            justifyContent='center'
            alignItems='center'
            sx={{ padding: 3 }}
        >
            
            
            <Box 
                sx={{ 
                    flexGrow: 1, 
                    backgroundColor: 'pink', 
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center,'
                }}
            >
                <Grid 
                    item
                    container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns=
                        {{  xs: 4,
                            sm: 8, 
                            md: 12 
                        }}
                    
                    sx=
                        {{
                            // backgroundColor: 'green',
                            m:1, 
                            padding: 2,
                        }}
                    
                >
                    
                    {collection.map((object, index) => (
                    <Grid 
                        item xs={4} 
                        sm={8} 
                        md={4} 
                        key={index}
                    >
                        <ObjectCard info={object}/>
                        
                        

                    </Grid>
                    ))}
                </Grid>

            </Box>

        </Grid>
    </Grid>
    </div>
  )
}

export default MyCollection