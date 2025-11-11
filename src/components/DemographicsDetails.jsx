import { useEffect, useState } from "react"
import DonutChart from "./DemographicsChart"

function Details({ mostConfident, selected }) {
    const [display, setDisplay] = useState({ Loading: "Loading" })

    function findDisplay() {
        if (mostConfident.length > 0) {
            if (selected === "race") {
                setDisplay(mostConfident[0].race)
            } else if (selected === "age") {
                setDisplay(mostConfident[0].age)
            } else if (selected === "sex") {
                setDisplay(mostConfident[0].sex)
            }
        }

    }

    useEffect(() => {
        findDisplay()
    }, [mostConfident])

    return (
        <div className="demographics__details">
            <h2 className="demographics__details--title">
                {display.key}
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