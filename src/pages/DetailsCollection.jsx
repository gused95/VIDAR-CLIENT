import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import DetailsCard from '../components/DetailsCard/DetailsCard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

const linkStyle = {
  textDecoration: 'none',
  color: 'white'
}

const DetailsCollection = () => {

  const [collection, setCollection] = useState(null);
  const { id } = useParams()
  const navigate = useNavigate();

  

  const getCollection = () => {        
    // <== ADD A NEW FUNCTION
    axios
      .get(`${API_URL}/collections/details/${id}`)
      .then((response) => {
        const oneCollection = response.data;
        setCollection(oneCollection);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCollection();
  }, []);

  //        delete collection     ----------------

  const deleteCollection = () => {
    // Make a DELETE request to delete the Collection
    axios
      .delete(`${API_URL}/collections/details/${id}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of Collections.
        navigate("/myCollection");
      })
      .catch((err) => console.log(err));
  };
 
  
  return (
    <Container >
      <h1>Detalles</h1>
      {collection && (
        <>
          <DetailsCard {...collection}/>          
        </>
      )}
      <Box sx={{ 
        maxWidth: 500,
        display: 'flex',
        justifyContent: 'space-around',
       }}>
      <Link to="/myCollection" style={linkStyle}>
        <Button variant='contained'>Regresar a colecciones</Button>
      </Link>
      <Link to={`/myCollection/edit/${collection?._id}`} style={linkStyle}>
        <Button variant='contained' color='secondary'>Editar</Button>
      </Link>
      <Link to="/myCollection" style={linkStyle} >
        <Button 
          variant='contained'
          onClick={deleteCollection}
          color='error'
        >
          Borrar
        </Button>
      </Link>
      </Box>
    </Container>
  )
}

export default DetailsCollection