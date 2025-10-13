import React, { useEffect, useState } from "react";
import radio from '../assets/radio-btn.png';
import radioSelected from '../assets/radio-btn-selected.png'

function Confidence({ selected, results }) {
    const [array, setArray] = useState([]);
    const [predicted, setPredicted] = useState(document.getElementById("0"))
    useEffect(() => {
        if (selected === "race") {
            toArrayOfObjects(results.race)
        } else if (selected === "age") {
            toArrayOfObjects(results.age)
        } else if (selected === "gender") {
            toArrayOfObjects(results.gender)
        }
    }, [results, selected])

    function toArrayOfObjects(obj) {
        const result = [];
        for (const [key, value] of Object.entries(obj)) {
            const newObj = { "key": key, "value": value };
            result.push(newObj);
        }
        setArray(result)
    }

    function correctPrediction() {
        const element = predicted;

        if (element) {
            const allSelectors = document.querySelectorAll('.confidence__set');
            allSelectors.forEach(selector => {
                selector.classList.remove("black");
                selector.classList.add("grey__hover");
            });

            if (element.classList.contains("black")) {
                element.classList.remove("black");
                element.classList.add("grey__hover");
            } else {
                element.classList.remove("grey__hover");
                element.classList.add("black");
            }
        } else {
            return
        }
    }

    function setRadio(className) {
        console.log("changing radio");
        const imageElement = document.querySelector(`.${className}`);

        // Check if the image element exists
        if (imageElement) {
            const allSelectors = document.querySelectorAll('.confidence__radio');
            allSelectors.forEach(selector => {
                selector.src = radio;
                selector.classList.remove("inverted")
            });

            // Change the source of the image
            imageElement.src = radioSelected;
        } else {
            console.error(`Image with class "${className}" not found.`);
        }
    }

useEffect(() => {
    correctPrediction(predicted);
}, [predicted])


return (
    <>
        <div className="confidence">
            <div>
                {selected}
            </div>
            <div>
                A.I. Confidence
            </div>
        </div>
        <ul>
            {array.length > 0 ?
                array.map((item, index) => {
                    return (
                        <li key={index} id={index} className="confidence confidence__set grey__hover" onClick={() => { setPredicted(document.getElementById(index)); setRadio(`radio${index}`) }}>
                            <div>
                                <img src={radio} className={`confidence__radio radio${index}`} alt="radio" />
                                {item.key}
                            </div>
                            <div>
                                {item.value} %
                            </div>
                        </li>
                    );
                }) :
                <>Loading...</>
            }
        </ul>
    </>
)
}

export default Confidence;