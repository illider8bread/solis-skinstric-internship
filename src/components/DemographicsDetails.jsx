import { useEffect, useState } from "react"
import DonutChart from "./DemographicsChart"

function Details({ mostConfident, selected }) {
    const [display, setDisplay] = useState({ key: "", value:" " })

    function findDisplay() {
        if (mostConfident.length > 0) {
            if (selected === "race") {
                setDisplay(mostConfident[0])
            } else if (selected === "age") {
                setDisplay(mostConfident[1])
            } else if (selected === "sex") {
                setDisplay(mostConfident[2])
            }
        }

    }

    useEffect(() => {
        findDisplay()
    }, [selected, mostConfident])

    return (
        <div className="demographics__details">
            <h2 className="demographics__details--title">
                {display.key} <span className="details__span">{selected==="age"?"y.o.":""}</span>
            </h2>
            <div className="demographics__details--percentage">
                <div className="percentage__wrapper">
                    <DonutChart percentage={(display.value * 100).toFixed(2)} />
                    <p className="percentage__para position__centered">
                        {(display.value * 100).toFixed(1)} <span className="percentage__span">%</span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Details