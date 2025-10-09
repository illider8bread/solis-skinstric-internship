import React from "react";
import radio from '../assets/radio-btn.png';
import radioSelected from '../assets/radio-btn-selected.png'

function Confidence({selected, array}) {

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
                {array.map((item, index) => {
                    const key = Object.keys(item)[0]; // Get the key
                    const value = (item[key] * 100).toFixed(1); // Multiply the value by 100 and format it
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
        </>
    )
}

export default Confidence;