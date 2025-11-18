import { useEffect, useState } from "react";
import Analysis from "../components/Analysis";
import NavigationButton from "../components/NavigationButton";
import Summaries from "../components/DemographicsSummaries";
import Breakdown from "../components/DemographicsBreakdown";
import Details from "../components/DemographicsDetails";

function Demographics({ createPrediction, predictions }) {
    const [race, setRace] = useState({});
    const [age, setAge] = useState({});
    const [sex, setSex] = useState({});
    const [selected, setSelected] = useState('race');
    const [mostConfidence, setMostConfidence] = useState([])

    function changeSelected(input) {
        setSelected(input)
    }

    function formatPredictions(dataset) {
        return Object.entries(dataset)
            .sort(([, valueA], [, valueB]) => valueB - valueA)
            .map(([key, value]) => {
                return {
                    key: key,
                    value: value
                };
            });
    }

    function sortByRange(arr) {
        return arr.sort((a, b) => {
            const getRangeStart = (key) => {
                if (key === "70+") return Infinity;
                const rangeParts = key.split('-');
                return parseInt(rangeParts[0], 10);
            };

            return getRangeStart(a.key) - getRangeStart(b.key);
        });
    }

    const findMostConfidence = (arr) => {
        return arr.reduce((maxObj, currentObj) => {
            return (currentObj.value > maxObj.value) ? currentObj : maxObj;
        });
    };

    function changeMostConfidence(newObject) {
        let targetIndex;
        if (selected === "race") {
            targetIndex = 0;
        } else if (selected === "age") {
            targetIndex = 1;
        } else if (selected === "sex") {
            targetIndex = 2;
        }

        const newArray = [...mostConfidence];
        newArray[targetIndex] = newObject;
        setMostConfidence(newArray)
    }


    useEffect(() => {
        if (Object.keys(predictions).length = 0) {
            createPrediction(localStorage.getItem("image"))
        }

        if (Object.keys(predictions).length > 0) {
            const newRace = formatPredictions(predictions.race);
            const newAge = sortByRange(formatPredictions(predictions.age));
            const newSex = formatPredictions(predictions.gender);

            setRace(newRace);
            setAge(newAge);
            setSex(newSex);
            setMostConfidence([
                findMostConfidence(newRace),
                findMostConfidence(newAge),
                findMostConfidence(newSex)
            ]);
        }
    }, [predictions]);

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
                    <Summaries mostConfident={mostConfidence} selected={selected} setSelected={changeSelected} />
                    <Details mostConfident={mostConfidence} selected={selected} />
                    <Breakdown race={race} age={age} sex={sex} selected={selected} confidence={findMostConfidence} changeMostConfident={changeMostConfidence} />
                </div>
                <NavigationButton text="back" navTo="/results" />
                <div className="change__buttons--wrapper">
                    <button
                        className=" change__button button__reset black__btn inverted"
                        onClick={() => {
                            setMostConfidence([
                                findMostConfidence(race),
                                findMostConfidence(age),
                                findMostConfidence(sex)
                            ])
                        }} >
                        Reset
                    </button>
                    <button
                        className=" change__button black__btn"
                        onClick={() => { }}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Demographics