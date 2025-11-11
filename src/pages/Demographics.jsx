import React, { useEffect, useState } from "react";
import Analysis from "../components/Analysis";
import radio from "../assets/radio-btn.png";
import NavigationButton from "../components/NavigationButton";
import { formatPostcssSourceMap } from "vite";

function Demographics({ createPrediction, predictions }) {
    const [race, setRace] = useState({});
    const [age, setAge] = useState({});
    const [sex, setSex] = useState({});

    function formatPredictions(dataset){
        return Object.entries(dataset).map(([key, value]) => {
            return{
                key: key,
                value: value
            }
        })
    }

    // useEffect(()=>{
    //     if(Object.keys(predictions).length > 0){
    //         setRace(formatPredictions(predictions.race))
    //         setAge(formatPredictions(predictions.age))
    //         setSex(formatPredictions(predictions.gender))
    //     }
    // },[predictions])

    // useEffect(()=>{
    //     console.log(`race: ${race}, age: ${age}, sex: ${sex}`)
    // },[race, age, sex])

    // useEffect(()=>{
    //     createPrediction(localStorage.getItem("image"))
    // },[])
    // REMOVE THIS USEEFFECT AND THE CREATE PREDICTION PARAM ABOVE

    return (
        <div className="container">
            <div className="row">
                <Analysis />
                <div className="demographics__header">
                    <h1 className="demographics__title">
                        Demographics
                    </h1>
                    <p className="demographics__subtitle">
                        Predicted Race & Age
                    </p>
                </div>
                <div className="demographics__wrapper">
                    <div className="demographics__summaries">
                        <div className="demographics__summary inverted">
                            <p className="demographics__summary--text">~Prediction~</p>
                            <p className="demographics__summary--text">Race</p>
                        </div>
                        <div className="demographics__summary">
                            <p className="demographics__summary--text">~Prediction~</p>
                            <p className="demographics__summary--text">Age</p>
                        </div>
                        <div className="demographics__summary">
                            <p className="demographics__summary--text">~Prediction~</p>
                            <p className="demographics__summary--text">Sex</p>
                        </div>
                    </div>
                    <div className="demographics__details">
                        <h2 className="demographics__details--title">
                            ~Prediction~
                        </h2>
                        <div className="demographics__details--percentage">
                            display
                        </div>
                    </div>
                    <div className="demographics__breakdown">
                        <ul className="demographics__breakdown--items">
                            <li className="demographics__breakdown--item">
                                <p className="breakdown__item--para">~Selected~</p>
                                <p className="breakdown__item--para">A.I. Confidence</p>
                            </li>
                            <li className="demographics__breakdown--item inverted">
                                <p className="breakdown__item--para">
                                    <img src={radio} className="radio" />
                                    ~Demographic~
                                </p>
                                <p className="breakdown__item--para">
                                    ~00%%~
                                </p>
                            </li>
                            <li className="demographics__breakdown--item">
                                <p className="breakdown__item--para">
                                    <img src={radio} alt="" className="radio" />
                                    ~Demographic~
                                </p>
                                <p className="breakdown__item--para">
                                    ~00%%~
                                </p>
                            </li>
                            <li className="demographics__breakdown--item">
                                <p className="breakdown__item--para">
                                    <img src={radio} alt="" className="radio" />
                                    ~Demographic~
                                </p>
                                <p className="breakdown__item--para">
                                    ~00%%~
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <NavigationButton text="back" navTo="/results" />
            </div>
        </div>
    )
}

export default Demographics