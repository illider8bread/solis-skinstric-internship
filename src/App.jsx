import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router'
import axios from "axios";
import { useNavigate } from "react-router";
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Forms from './pages/Forms'
import Pictures from './pages/Pictures'
import Results from './pages/Results'

function App() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [encodedImage, setEncodedImage] = useState('');
  const navigate = useNavigate();

  async function createUser() {
    setLoading(true);
    console.log('createUser has been called')
    const postData = {
      "name": localStorage.getItem('name'),
      "location": localStorage.getItem('location')
    };
    const endpoint = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne';
    axios.post(endpoint, postData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        setProceed(true);
      })
  }


  async function uploadImage(image) {
    setLoading(true);
    const postData = {
      "image": image
    };
    const endpoint = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo';
    axios.post(endpoint, postData)
      .then((response) => {
        setResults(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        navigate("/results")
      })
  }

  useEffect(() => {
    if (localStorage.getItem('name').length > 0){
      console.log(localStorage.getItem('name'))
    }
    if (localStorage.getItem('location').length > 0){
      console.log(localStorage.getItem('location'))
      createUser();
    }
  }, [localStorage.getItem("name"), localStorage.getItem("location")]);


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<Forms loading={loading} />} />
        <Route path='/image' element={<Pictures uploadImage={uploadImage} loading={loading} />} />
        <Route path='/results' element={<Results results={results} />} />
        {/* <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
