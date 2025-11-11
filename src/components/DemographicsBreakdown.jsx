import { useEffect, useState } from "react";
import radio from "../assets/radio-btn.png";
import selectedRadio from "../assets/radio-btn-selected.png"

function Breakdown({ race, age, sex, selected, confidence }) {
    const [dataset, setDataset] = useState([])
    const [confidentDemo, setConfidentDemo] = useState()

    function selectDataset() {
        if (race.length > 0) {
            setConfidentDemo(confidence(race,"race"))
            if (selected === "race") {
                setDataset(race)
                
            } else if (selected === "age") {
                setDataset(age)
                // setConfidentDemo(confidence(age))
            } else if (selected === "sex") {
                setDataset(sex)
                // setConfidentDemo(confidence(sex))
            }
        }

    }

    useEffect(() => {
        if (race.length > 0) {
            setDataset(race)
        }
    }, [race])
    useEffect(() => {
        selectDataset()
    }, [selected])

    useEffect(() => {
        if (dataset.length > 0){
            setConfidentDemo(confidence(dataset))
        }
    }, [dataset])

    return (
        <div className="demographics__breakdown">
            <ul className="demographics__breakdown--items">
                <li className="demographics__breakdown--item">
                    <p className="breakdown__item--para">{selected}</p>
                    <p className="breakdown__item--para">A.I. Confidence</p>
                </li>
                {dataset.length > 0 ? dataset.map((item, index) => {
                    const isSelected = confidentDemo === item
                    return (
                        <li 
                        key={index} 
                        onClick={()=>setConfidentDemo(item)}
                        className={`demographics__breakdown--item ${isSelected ? "inverted":""}`}>
                            <p className="breakdown__item--para">
                                <img 
                                src={isSelected ? selectedRadio : radio} 
                                className={`radio`}
                                id={`${isSelected? "white":""}`} />
                                {item.key}
                            </p>
                            <p className="breakdown__item--para">
                                {(item.value * 100).toFixed(2)}%
                            </p>
                        </li>
                    )
                }) : <></>}
            </ul>
        </div>
    )
}
export default Breakdown