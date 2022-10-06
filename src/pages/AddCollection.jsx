import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import CollectionForm from '../components/CollectionForm/CollectionForm';
import { useNavigate } from 'react-router-dom';
// import the service file since we need it to send/get the data to/from the server
import service from '../api/service';

const AddCollection = (props) => {
  
  const [imageUrl, setImageUrl] = useState("")

  const [form, setForm] = useState({
    title: '',
    description: '',
    pickLocation: '',
    pickSchedule: '',
    postUntil: '',
    collecType: '',
    
  });

  const { 
    title, 
    description, 
    pickLocation, 
    pickSchedule, 
    postUntil,
    collecType, 
    
  } = form;

  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target
    return setForm({ ...form, [name]: value});
  };

  // -----------  handleFormSubmission ------------

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const data = {
      title,
      description,
      pickLocation,
      pickSchedule,
      postUntil,
      collecType,
      imageUrl,
    }
     console.log(data)
     
     axios
      .post(
        // `${process.env.REACT_APP_SERVER_MY_URL}/collections/addnew`,
        `${process.env.REACT_APP_SERVER_MY_URL}/collections/addnew`,
        data
        ) 
          .then((response) => {
            //Reset the state
            setForm({
              title: '',
              description: '',
              pickLocation: '',
              pickSchedule: '',
              postUntil: '',
              collecType: '',
              
            });
            
            setImageUrl("")

            // navigate to another page
            navigate("/myCollection");

          })
          .catch((error) => console.log(error))
  };

// -----------  handleFormSubmission ------------

  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
        console.log(response)
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

// -----     options for collecType   -------
const optionsCollec = [
  {
    value: 'Venta',
    label: 'Vender',
  },
  {
    value: 'Intercambio',
    label: 'Intercambio',
  },
  {
    value: 'Donación',
    label: 'Donar',
  },
  
];
// -----     options for collecType   -------

// -----     options for postUntil   -------
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
// -----     options for postUntil   -------

  return (
    <CollectionForm 
      handleFormSubmission={handleFormSubmission}
      handleInputChange={handleInputChange}
      handleFileUpload={handleFileUpload}
      {...form}
      options1={optionsCollec}
      options2={options}
      imageUrl={imageUrl}
    />
  )
}

export default AddCollection