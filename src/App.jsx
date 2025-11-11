import './App.css'
import Header from "./components/Header.jsx"
import axios from 'axios'
import Landing from './pages/Landing.jsx';
import Introduction from './pages/Introduction.jsx';
import { useEffect, useState } from 'react';
import Image from './pages/Image.jsx';
import Results from './pages/Results.jsx';
import { Routes, Route } from 'react-router';
import Demographics from './pages/Demographics.jsx';
import WebcamPage from './pages/Webcam.jsx';

function App() {
  const [loading, setLoading] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [predictionCreated, setPredictionCreated] = useState(false);
  const [predictions, setPredictions] = useState({});

  async function createUser(name, location) {
    setLoading(true);
    const endpoint = "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne";
    const postData = {
      "name": name,
      "location": location
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

  async function createPrediction(photo) {
    setLoading(true);
    const endpoint = "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo";
    const postData = {
      "image": photo
    };

    try {
      const response = await axios.post(endpoint, postData);
      console.log('Prediction created:', response.data);
      setPredictions(response.data.data)
    } catch (error) {
      console.error('Error creating prediction:', error);
    } finally {
      setLoading(false)
      setPredictionCreated(true)
      console.log('Request completed');
    }
  }
  function forceRetry(bool) {
    setPredictionCreated(bool)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Landing />} />
        <Route
          path="/introduction"
          element={<Introduction createUser={createUser} loading={loading} created={userCreated} />} />
        <Route
          path="/image"
          element={<Image createPrediction={createPrediction} loading={loading} created={predictionCreated} setCreated={forceRetry} />} />
        <Route
          path="/results"
          element={<Results />} />
        <Route
          path="/demographics"
          element={<Demographics createPrediction={createPrediction} predictions={predictions} />} />
          {/* remove createPrediction above */}
        <Route 
          path="/webcam"
          element={<WebcamPage />} />
      </Routes>
    </>
  )
}

export default App
