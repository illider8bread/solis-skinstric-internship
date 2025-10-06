import React from "react";
import btn from '../assets/buttin-icon-shrunk.png'
import { useNavigate } from "react-router";


function Pictures() {
    const navigate = useNavigate();
    return (
        <>
            <section className="body form">
                <h2 className="form__header">To Start Analysis</h2>
                <img className="form__bgk--img" alt="" />

                <div className="landing__btn back" onClick={() => navigate("/")}>
                    <img src={btn} alt="" className="left-arrow arrow" />
                    Back
                </div>
                <div className="landing__btn proceed" onClick={() => navigate("/result")} >
                    Proceed
                    <img src={btn} alt="" className="right-arrow arrow" />
                </div>

            </section>
        </>
    )
}

export default Pictures