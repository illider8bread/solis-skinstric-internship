import React, { useEffect, useState } from "react";

function Percentage({ selected, results }) {
    const [prediction, setPrediction] = useState(results.race.key);
    const [percentage, setPercentage] = useState(results.race.value)

    function setValues() {
        if (selected === "race") {
            setPrediction(results.race.key);
            setPercentage(results.race.value);
        } else if (selected === "age") {
            setPrediction(results.age.key);
            setPercentage(results.age.value);
        } else if (selected === "gender") {
            setPrediction(results.gender.key);
            setPercentage(results.gender.value);
        }
    }
    useEffect(()=>{
        setValues()
    },[selected])


    return (
        <>
            {prediction}

            <div className="pie__percent">
                {(percentage * 100).toFixed(2)} %
            </div>
        </>
    )
}

export default Percentage;