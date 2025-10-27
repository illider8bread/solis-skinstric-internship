import { useState } from 'react';
import { useNavigate } from "react-router";
import background from "../assets/form-bkg.png";
import btn from '../assets/buttin-icon-shrunk.png'
import FormPeice from '../components/FormPeice';


function Forms({ loading, proceed, changeProceed }) {
    const navigate = useNavigate();

    

    const renderContent = () => {
        if (!proceed && loading) {
            return (<div className="question">Processing Submission</div>); // Loading state
        } else if (proceed && !loading) {
            return (<div className="question">Thank you! <br/> Proceed for the next step</div>); // Continue page
        } else {
            return  (<FormPeice setProceed={ changeProceed } />) //Form
        }
    };

    return (
        <section className="body form">
            <h2 className="form__header">To Start Analysis</h2>
            <img className="form__bgk--img" src={background} alt="" />
            {renderContent()}
            <div className="back__btn" onClick={() => navigate("/")}>
                <img src={btn} alt="" className="arrow" />
                Back
            </div>
            {proceed && (
                <div className="proceed__btn" onClick={() => navigate("/image")} >
                    Proceed
                    <img src={btn} alt="" className="arrow right" />
                </div>
            )}
        </section>
    );
}

export default Forms;