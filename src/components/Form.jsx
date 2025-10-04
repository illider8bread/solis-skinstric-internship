import { useState } from 'react';
import background from "../assets/form-bkg.png";
import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png'


// Create bool for 'clicked?' 
// if false, display 'click to type' and the question in the placeholder
// if true, display question in the title and nothing in the placeholder
function Form({ question }) {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const input = document.getElementById("question__input");

    function clickHandler() {
        setClicked(true);
        input.value = "";
    }

    function proceedHandler() {
        setClicked(false);
        navigate('/form/location');
    }


    return (
        <section className="body form">
            <h2 className="form__header">To Start Analysis</h2>
            <img className="form__bgk--img" src={background} alt="" />
            <div className="question">
                <p className="form__question">
                    {clicked ? question : "Click to type"}
                </p>
                <form>
                    <input type="text" id="question__input" className="question__input" onClick={clickHandler} defaultValue={!clicked ? question : " "} />

                </form>
            </div>
            <div className="landing__btn back" onClick={() => navigate("/")}>
                <img src={btn} alt="" className="left-arrow arrow" />
                Back
            </div>
            {!clicked ? ""
                : (<div
                    className="landing__btn proceed"
                    onClick={proceedHandler}>
                    Proceed
                    <img src={btn} alt="" className="right-arrow arrow" />
                </div>)}
        </section>
    )
}

export default Form