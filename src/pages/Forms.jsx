import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import background from "../assets/form-bkg.png";
import btn from '../assets/buttin-icon-shrunk.png'
import FormPeice from '../components/FormPeice';


// Create bool for 'clicked?' 
// if false, display 'click to type' and the question in the placeholder
// if true, display question in the title and nothing in the placeholder
function Forms() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [proceed, setProceed] = useState(false);

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

    const renderContent = () => {
        if (!proceed && loading) {
            return (<div className="question">Processing Submission</div>); // Loading state
        } else if (proceed && !loading) {
            return (<div className="question">Thank you! <br/> Proceed for the next step</div>); // Continue page
        } else {
            return  (<FormPeice createUser={createUser} />) //Form
        }
    };

    return (
        <section className="body form">
            <h2 className="form__header">To Start Analysis</h2>
            <img className="form__bgk--img" src={background} alt="" />
            {renderContent()}
            <div className="landing__btn back" onClick={() => navigate("/")}>
                <img src={btn} alt="" className="left-arrow arrow" />
                Back
            </div>
            {proceed && (
                <div className="landing__btn proceed" onClick={() => navigate("/result")} >
                    Proceed
                    <img src={btn} alt="" className="right-arrow arrow" />
                </div>
            )}
        </section>
    );
}

export default Forms;