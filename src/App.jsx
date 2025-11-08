import './App.css'
import Header from "./components/Header.jsx"
import axios from 'axios'
import Landing from './pages/Landing.jsx';
import Introduction from './pages/Introduction.jsx';
import { useState } from 'react';
import Image from './pages/Image.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  
  async function createUser(name, location) {
    setLoading(true);
    const endpoint = "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne";
    const postData = {
      "name": name,
      "location":  location
    };
        try {
        const response = await axios.post(endpoint, postData);
        console.log('User created:', response.data); 
    } catch (error) {
        console.error('Error creating User:', error); 
    } finally {
        console.log('Request completed');
        setLoading(false);
        setUserCreated(true);
    }
  }

async function createPrediction() {
    const endpoint = "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo";
    const postData = {
        "image": placeholder 
    };

    try {
        const response = await axios.post(endpoint, postData);
        console.log('Prediction created:', response.data); 
    } catch (error) {
        console.error('Error creating prediction:', error); 
    } finally {
        console.log('Request completed');
    }
}

  return (
    <>
      <Header />
      {/* <Landing /> */}
      {/* <Introduction createUser={createUser} loading={loading} created={userCreated} /> */}
      <Image createPrediction={createPrediction}/>
    </>
  )
}

export default App
