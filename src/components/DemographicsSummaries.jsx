import { useEffect, useState } from "react"


function Summaries({ mostConfident, selected, setSelected }) {
    const loading = ""
    const [race, setRace]=useState(loading);
    const [age, setAge]=useState(loading);
    const [sex, setSex]=useState(loading);

    function setDisplay(){
        if(mostConfident.length>0){
            setRace(mostConfident[0].key)
            setAge(mostConfident[1].key)
            setSex(mostConfident[2].key)
        }
    }

    useEffect(()=>{
        setDisplay()
    },[mostConfident])



    return (
            <div className="demographics__summaries">
                <div id="race"
                    className={`demographics__summary ${selected === "race" ? "inverted" : ""}`}
                    onClick={() => { setSelected("race") }}>
                    <p className="demographics__summary--text">{race}</p>
                    <p className="demographics__summary--text">Race</p>
                </div>
                <div id="age"
                    className={`demographics__summary ${selected === "age" ? "inverted" : ""}`}
                    onClick={() => { setSelected("age") }}>
                    <p className="demographics__summary--text">{age}</p>
                    <p className="demographics__summary--text">Age</p>
                </div>
                <div id="sex"
                    className={`demographics__summary ${selected === "sex" ? "inverted" : ""}`}
                    onClick={() => { setSelected("sex") }}>
                    <p className="demographics__summary--text">{sex}</p>
                    <p className="demographics__summary--text">Sex</p>
                </div>
            </div>
    )
}

export default Summaries