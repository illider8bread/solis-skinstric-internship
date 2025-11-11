import React, { useEffect, useState } from "react";
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

    const findMostConfidence = (arr) => {
        return arr.reduce((maxObj, currentObj) => {
            return (currentObj.value > maxObj.value) ? currentObj : maxObj;
        });
    };

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

    const createMostConfidence = () => {
        return [
            { race: findMostConfidence(race) },
            { age: findMostConfidence(age) },
            { sex: findMostConfidence(sex) }
        ]
    }

    useEffect(() => {
        if (Object.keys(predictions).length > 0) {
            setRace(formatPredictions(predictions.race))
            setAge(sortByRange(formatPredictions(predictions.age)))
            setSex(formatPredictions(predictions.gender))
        }
    }, [predictions])

    useEffect(() => {
        if (sex.length > 0 && age.length > 0 && race.length > 0) {
            setMostConfidence(createMostConfidence())
        }
        console.log(age)
    }, [sex, race, age])


    useEffect(() => {
        createPrediction(localStorage.getItem("image"))
    }, [])
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
                    <Summaries mostConfident={mostConfidence} selected={selected} setSelected={changeSelected} />
                    <Details mostConfident={mostConfidence} selected={selected} />
                    <Breakdown race={race} age={age} sex={sex} selected={selected} confidence={findMostConfidence} />
                </div>
                <NavigationButton text="back" navTo="/results" />
            </div>
        </div>
    )
}

export default Demographics