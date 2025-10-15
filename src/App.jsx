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
import Demographics from './pages/Demographics';
import Camera from './pages/Camera';

function App() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [proceed, setProceed] = useState(false);
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();
  
  function changeProceed(){
    setProceed(true);
  }
  async function createUser() {
    setLoading(true);
    const postData = {
      "name": sessionStorage.getItem('name'),
      "location": sessionStorage.getItem('location')
    };
    const endpoint = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne';
    axios.post(endpoint, postData)
      .then((response) => {
        setAccount(response.data)
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
        setResults(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        navigate("/results");
      })
  }
  useEffect(() => {
    if (sessionStorage.getItem('location') != null){
      createUser();
    }
  }, [sessionStorage.getItem("location")]);
  useEffect(() => {
    if (sessionStorage.getItem('image')){
      uploadImage();
    }
  }, [sessionStorage.getItem('image')])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<Forms loading={loading} proceed={proceed} changeProceed={changeProceed} />} />
        <Route path='/image' element={<Pictures  loading={loading} uploadImage={uploadImage}/>} />
        <Route path='/results' element={<Results/>} />
        <Route path='/webcam' element={<Camera/>}/>
        <Route path='/demographics' element={<Demographics demographics={results} />} />
        {/* <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
