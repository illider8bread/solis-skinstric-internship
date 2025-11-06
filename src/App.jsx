import './App.css'
import Header from "./components/Header.jsx"
import axios from 'axios'
import Landing from './pages/Landing.jsx';
import Introduction from './pages/Introduction.jsx';

function App() {
  
  async function createUser() {
    const endpoint = "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne";
    const postData = {
      "name": placeholder,
      "location":  placeholder
    };
        try {
        const response = await axios.post(endpoint, postData);
        console.log('User created:', response.data); 
    } catch (error) {
        console.error('Error creating User:', error); 
    } finally {
        console.log('Request completed');
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
      <Introduction />
    </>
  )
}

export default App
