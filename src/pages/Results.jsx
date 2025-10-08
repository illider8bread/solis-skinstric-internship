import React, { useState } from "react";
import Analysis from "../components/Analysis";
import Demographics from "../components/Demographics";


function Results({ results }) {
    const [showDemo, setShowDemo] = useState(false);
    function resultsButtonHandler(){
        setShowDemo(!showDemo);
    }

    return (
        <>
            <section className="body results">
                <h2 className="form__header">A.I. Analysis</h2>
                {!showDemo ? 
                <Analysis buttonsHandler={resultsButtonHandler}/>
                :
                <Demographics demographics={results} buttonsHandler={resultsButtonHandler}/> 
                }               
            </section>
        </>
    );
}

export default Results;
