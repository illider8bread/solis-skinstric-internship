import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';

import { useEffect, useState } from "react";
import Confidence from "./Confidence";
import Percentage from "./Percentage";


function Demographics({ demographics, buttonsHandler }) {
    const [predictedRace, setPredictedRace] = useState('');
    const [raceConfidence, setRaceConfidence] = useState();
    const [predictedAge, setPredictedAge] = useState('');
    const [ageConfidence, setAgeConfidence] = useState();
    const [predictedSex, setPredictedSex] = useState('');
    const [sexConfidence, setSexConfidence] = useState();
    const [raceArray, setRaceArray] = useState([]);
    const [ageArray, setAgeArray] = useState([]);
    const [sexArray, setSexArray] = useState([]);


    function findMaxKey(obj) {
        return Object.entries(obj).reduce((max, current) => {
            return current[1] > max[1] ? current : max;
        })[0]; // Return the key of the max value
    };

    function findMaxValue(obj) {
        const values = Object.values(obj);
        let maxValue = Math.max(...values);
        maxValue = (maxValue * 100).toFixed(1) 
        return maxValue;
    };

    function makeArray(obj) {
        return Object.entries(obj).map(([key, value]) => ({ [key]: value }))
    };

    useEffect(() => {
        setPredictedRace(findMaxKey(demographics.race));
        setRaceConfidence(findMaxValue(demographics.race));
        setPredictedAge(findMaxKey(demographics.age));
        setAgeConfidence(findMaxValue(demographics.age));
        setPredictedSex(findMaxKey(demographics.gender));
        setSexConfidence(findMaxValue(demographics.gender));
        setRaceArray(makeArray(demographics.race));
        setAgeArray(makeArray(demographics.age));
        setSexArray(makeArray(demographics.gender));
    }, [demographics])

    return (
        <div className="demographicpage">
            <h1 className="demo__title">Demographics</h1>
            <h4 className="demo__subtitle">Predicted race & age</h4>
            <div className="demographics">
                <div className="demographic__selectors">
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            {predictedRace}
                        </p>
                        <p className="demographic__listed">Race </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            {predictedAge}
                        </p>
                        <p className="demographic__listed">Age </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            {predictedSex}
                        </p>
                        <p className="demographic__listed">Sex</p>
                    </div>
                </div>
                <div className="demographic__info">
                    <Percentage selected={predictedRace} percentage={raceConfidence} />
                </div>
                <div className="demographic__confidence">
                    {raceArray.length > 0 && <Confidence selected={"Race"} array={raceArray} />}
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
