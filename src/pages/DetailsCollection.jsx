import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import ObjectCard from '../components/ObjectCard/ObjectCard';
import { Button } from '@mui/material';
import DetailsCard from '../components/DetailsCard/DetailsCard';


const API_URL = "http://localhost:5005";

const DetailsCollection = () => {

  const [collection, setCollection] = useState(null);
  const { id } = useParams()
  const navigate = useNavigate();

  //http://localhost:5005/collections/details/id

  const getCollection = () => {        
    // <== ADD A NEW FUNCTION
    axios
      .get(`http://localhost:5005/collections/details/${id}`)
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
    <div >
      <h1>Detalles</h1>
      {collection && (
        <>
          
          
          <DetailsCard {...collection}/>
          
        </>
      )}

      <Link to="/myCollection">
        <Button>Regresar a colecciones</Button>
      </Link>
      <Link to={`/myCollection/edit/${collection?._id}`}>
        <Button>Editar</Button>
      </Link>
      <Link to="/myCollection">
        <Button 
          onClick={deleteCollection}
        >
          Borrar
        </Button>
      </Link>
    </div>
  )
}

export default DetailsCollection