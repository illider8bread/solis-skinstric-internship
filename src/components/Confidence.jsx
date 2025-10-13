import React, { useEffect, useState } from "react";
import radio from '../assets/radio-btn.png';
import radioSelected from '../assets/radio-btn-selected.png'

function Confidence({ selected, results }) {
    const [array, setArray] = useState([]);
    useEffect(() => {
        toArrayOfObjects(results.race)
    }, [results])

    useEffect(() => {
        console.log("array")
        console.log(array)
    }, [array])

    function toArrayOfObjects(obj) {
        const result = [];
        for (const [key, value] of Object.entries(obj)) {
            const newObj = { "key": key, "value": value };
            result.push(newObj);
        }
        setArray(result)
    }


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
                            <li key={index} className="confidence grey__hover">
                                <div>
                                    <img src={radio} className="confidence__radio" alt="radio" />
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