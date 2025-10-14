import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';

function Percentage({ selected, results }) {
    const [prediction, setPrediction] = useState(results.race.key);
    const [percentage, setPercentage] = useState(results.race.value)

    


    function setValues() {
        if (selected === "race") {
            setPrediction(results.race.key);
            setPercentage(results.race.value);
        } else if (selected === "age") {
            setPrediction(results.age.key + " years old");
            setPercentage(results.age.value);
        } else if (selected === "gender") {
            setPrediction(results.gender.key);
            setPercentage(results.gender.value);
        }
    }
    useEffect(()=>{
        setValues()
    },[selected, results])


    return (
        <>
            <div className="prediction__percent">
            {prediction} 
            </div>

            <div className="pie__percent">
                {percentage} %
            </div>

        </>
    )
}

export default Percentage;