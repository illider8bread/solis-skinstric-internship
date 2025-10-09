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
  const [proceed, setProceed] = useState(false);
  const navigate = useNavigate();

  async function createUser() {
    setLoading(true);
    console.log('createUser has been called')
    const postData = {
      "name": sessionStorage.getItem('name'),
      "location": sessionStorage.getItem('location')
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


  async function uploadImage() {
    setLoading(true);
    const postData = {
      "image": sessionStorage.getItem('image')
    };
    const endpoint = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo';
    axios.post(endpoint, postData)
      .then((response) => {
        console.log(response.data)
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
    if (sessionStorage.getItem('name') != null){
      console.log(sessionStorage.getItem('name'))
    }
    if (sessionStorage.getItem('location') != null){
      console.log(sessionStorage.getItem('location'))
      createUser();
    }
  }, [sessionStorage.getItem("name"), sessionStorage.getItem("location")]);


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<Forms loading={loading} proceed={proceed} />} />
        <Route path='/image' element={<Pictures  loading={loading} uploadImage={uploadImage}/>} />
        <Route path='/results' element={<Results results={results} />} />
        {/* <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
