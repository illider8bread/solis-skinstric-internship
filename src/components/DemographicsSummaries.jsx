import { useEffect, useState } from "react"

function Summaries({ mostConfident, selected, setSelected }) {
    const placeholder = "Fetching..."



    useEffect(() => {
        console.log("made it to summaries")
        console.log(mostConfident)
    }, [mostConfident])

    return (
            <div className="demographics__summaries">
                <div id="race"
                    className={`demographics__summary ${selected === "race" ? "inverted" : ""}`}
                    onClick={() => { setSelected("race") }}>
                    <p className="demographics__summary--text">{mostConfident[0].race.key}</p>
                    <p className="demographics__summary--text">Race</p>
                </div>
                <div id="age"
                    className={`demographics__summary ${selected === "age" ? "inverted" : ""}`}
                    onClick={() => { setSelected("age") }}>
                    <p className="demographics__summary--text">{mostConfident[1].age.key}</p>
                    <p className="demographics__summary--text">Age</p>
                </div>
                <div id="sex"
                    className={`demographics__summary ${selected === "sex" ? "inverted" : ""}`}
                    onClick={() => { setSelected("sex") }}>
                    <p className="demographics__summary--text">{mostConfident[2].sex.key}</p>
                    <p className="demographics__summary--text">Sex</p>
                </div>
            </div>
    )
}

export default Summaries