import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CollectionForm from "../components/CollectionForm/CollectionForm";
import service from "../api/service";

const API_URL = `${process.env.REACT_APP_SERVER_MY_URL}`;

function EditCollection() {

  const [imageUrl, setImageUrl] = useState("")

  const [form, setForm] = useState({
    title: '',
    description: '',
    pickLocation: '',
    pickSchedule: '',
    postUntil: '',
    collecType: '',
    price: '',
  });

  const { 
    title, 
    description, 
    pickLocation, 
    pickSchedule, 
    postUntil,
    collecType, 
    price,
  } = form;

  function handleInputChange(event) {
    const { name, value } = event.target
    return setForm({ ...form, [name]: value});
  };

  //---------------------------------------

  const { id } = useParams();
  const navigate = useNavigate();

  //        retrieve collection     ----------------

  useEffect(() => {
    axios
      .get(`${API_URL}/collections/details/${id}`)
      .then((response) => {
        const oneCollection = response.data;
        setForm(oneCollection);
        setImageUrl(oneCollection.imageUrl)
      })
      .catch((error) => console.log(error));
  }, [id]);



  //        Handle form submit   ----------------

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const requestBody = { 
      title,
      description,
      pickLocation,
      pickSchedule,
      postUntil,
      collecType,
      imageUrl,
      price,
    }

  //        update collection     ----------------

    axios
      .put(`${API_URL}/collections/details/${id}`, requestBody)
      .then((response) => {
        navigate(`/myCollection/${id}`); // check <------ready, return to details
      });
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
    <div >
      <h3>Editar Colección</h3>
      <br></br>

      <div>
        <CollectionForm 
          handleFormSubmission={handleFormSubmission}
          handleInputChange={handleInputChange}
          handleFileUpload={handleFileUpload}
          {...form}
          options1={optionsCollec}
          options2={options}
          imageUrl={imageUrl}
          
        />
      </div>
    </div>
  );
}

export default EditCollection;