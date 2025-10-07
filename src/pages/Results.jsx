import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import btn from '../assets/buttin-icon-shrunk.png';
import background from "../assets/form-bkg.png";


function Results({ results }) {
    console.log(typeof results)
    console.log(results)

    return (
        <>
            <section className="body form">
                <h2 className="form__header">A.I. Analysis</h2>
                <div className="subtitle__para">
                    A. I. has estimated the following. <br/>
                    Fix estimated information if needed.
                </div>
                <div className="results__buttons">
                    <div className="results__button">
                        <p className="results__button--text">
                        Demographics
                        </p>
                        </div>
                    <div className="results__button">
                        <p className="results__button--text">
                        Cosmetic Concerns
                        </p>
                        </div>
                    <div className="results__button">
                        <p className="results__button--text">
                        Skin Type Details
                        </p>
                        </div>
                    <div className="results__button">
                        <p className="results__button--text"> 
                        Weather
                        </p>
                        </div>
                </div>

                <div className="landing__btn back" onClick={() => navigate("/")}>
                    <img src={btn} alt="" className="left-arrow arrow" /> Back
                </div>
                <div className="landing__btn proceed" onClick={() => navigate("/")}>
                    Proceed <img src={btn} alt="" className="right-arrow arrow" />
                </div>
            </section>
        </>
    );
}

export default Results;
