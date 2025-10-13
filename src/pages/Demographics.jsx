import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import { useEffect, useState } from "react";
import PredictedDemos from "../components/PredictedDemos";
// import Confidence from "./Confidence";
// import Percentage from "./Percentage";


function Demographics({ demographics, buttonsHandler }) {
    const [predictions, setPredictions] = useState({})
    const [sortedResults, setSortedResults] = useState({})
    useEffect(()=>{
        findPredictions(demographics);
        sortByValues(demographics);
    }, [demographics])
    

function findPredictions(obj) {
    const results = {}; 
    for (const [category, values] of Object.entries(obj)) {
        const entries = Object.entries(values);
        const [maxKey, maxValue] = entries.reduce((max, current) => {
            return current[1] > max[1] ? current : max;
        });
        results[category] = { key: maxKey, value: maxValue };
    }
    setPredictions(results);
    return results;
}
function sortByValues(obj) {
    const sorted = {}; // Create a new object to store the sorted values

    for (const [key, childObj] of Object.entries(obj)) {
        const entries = Object.entries(childObj).map(([k, v]) => [String(k), parseFloat(v)]);
        entries.sort((a, b) => b[1] - a[1]);
        const formattedEntries = entries.map(([k, v]) => [k, (v * 100).toFixed(2)]);
        sorted[key] = Object.fromEntries(formattedEntries);
    }
    setSortedResults(sorted);
    return sorted; // Return the new sorted object
}

    return (
        <div className="demographicpage">
            <h1 className="demo__title">Demographics</h1>
            <h4 className="demo__subtitle">Predicted race & age</h4>
            <div className="demographics">
                <PredictedDemos predictions={predictions} />
                <div className="demographic__info">
                    {/* <Percentage selected={predictedRace} percentage={raceConfidence} /> */}
                </div>
                <div className="demographic__confidence">
                    {/* <Confidence selected={"Race"} array={predictions.race} /> */}
                </div>
            </div>
            <p className="disclaimer">
                if A.I. estimate is wrong, please select the correct one.
            </p>
            <div className="landing__btn back" onClick={() => buttonsHandler()}>
                <img src={btn} alt="" className="left-arrow arrow" /> Back
            </div>
            <div className="landing__btn proceed">
                Something somethin <img src={btn} alt="" className="right-arrow arrow" />
            </div>
        </div>
    );
}

export default Demographics;
