import { useState } from 'react'
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
  const navigate = useNavigate();

  async function createUser(name, location) {
        setLoading(true);
        const postData = {
            "name": name.toString(),
            "location": location.toString()
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


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/form' element={<Forms createUser={createUser}/>} />
        <Route path='/image' element={<Pictures uploadImage={uploadImage} loading={loading} />} />
        <Route path='/results' element={<Results results={results} />} />
        {/* <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
