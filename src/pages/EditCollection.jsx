import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CollectionForm from "../components/CollectionForm/CollectionForm";

const API_URL = "http://localhost:5005";

function EditCollection() {

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
    }

  //        update collection     ----------------

    axios
      .put(`${API_URL}/collections/details/${id}`, requestBody)
      .then((response) => {
        navigate(`/myCollection/${id}`); // check <------ready, return to details
      });
  };

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

  // -----     options for collecType   -------
const optionsCollec = [
  {
    value: 'V',
    label: 'Vender',
  },
  {
    value: 'I',
    label: 'Intercambiar',
  },
  {
    value: 'D',
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
          {...form}
          options1={optionsCollec}
          options2={options}
        />
      </div>
    </div>
  );
}

export default EditCollection;