import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import radio from '../assets/radio-btn.png';
import radioSelected from '../assets/radio-btn-selected.png'
import { useEffect, useState } from "react";


function Demographics({ demographics, buttonsHandler }) {
    const [predictedRace, setPredictedRace] = useState('');
    const [predictedAge, setPredictedAge] = useState('');
    const [predictedSex, setPredictedSex] = useState('');

    const raceArray = Object.entries(demographics.race).map(([key, value]) => ({ [key]: value }));
    const ageArray = Object.entries(demographics.age).map(([key, value]) => ({ [key]: value }));
    const sexArray = Object.entries(demographics.gender).map(([key, value]) => ({ [key]: value }));

    function findMaxKey(obj) {
        return Object.entries(obj).reduce((max, current) => {
            return current[1] > max[1] ? current : max;
        })[0]; // Return the key of the max value
    };

    useEffect(() => {
        setPredictedRace(findMaxKey(demographics.race));
        setPredictedAge(findMaxKey(demographics.age));
        setPredictedSex(findMaxKey(demographics.gender));
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
                    Insert Demographic

                    <div className="pie__percent">
                        insert dynamic percentage display
                    </div>
                </div>
                <div className="demographic__confidence">
                    <div className="confidence">
                        <div>
                            Race
                        </div>
                        <div>
                            A.I. Confidence
                        </div>
                    </div>
                    <ul>
                        {raceArray.map((item, index) => {
                            const key = Object.keys(item)[0]; // Get the key
                            const value = (item[key] * 100).toFixed(2); // Multiply the value by 100 and format it
                            return (
                                <li key={index} className="confidence grey__hover">
                                    <div>
                                        <img src={radio} className="confidence__radio" alt="radio" />
                                        {key}
                                    </div>
                                    <div>
                                        {value} %
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
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
