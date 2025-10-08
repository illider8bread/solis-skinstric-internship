import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import btn from '../assets/buttin-icon-shrunk.png';
import background from "../assets/form-bkg.png";
import Analysis from "../components/Analysis";
import Demographics from "../components/Demographics";


function Results({ results }) {

    return (
        <>
            <section className="body results">
                <h2 className="form__header">A.I. Analysis</h2>
                {/* <Analysis /> */}
                <Demographics demographics={results}/>

                <div className="landing__btn back" onClick={() => navigate("/")}>
                    <img src={btn} alt="" className="left-arrow arrow" /> Back
                </div>
                
            </section>
        </>
    );
}

export default Results;
