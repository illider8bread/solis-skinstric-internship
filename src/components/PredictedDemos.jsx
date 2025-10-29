import { useEffect, useState } from "react"

function PredictedDemos({ predictions, changeSelection, selected}) {


    function toggleClassById(id) {
        const element = document.getElementById(id);

        if (element) {
            const allSelectors = document.querySelectorAll('.demographic__selector');
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

    
    useEffect(() => {
        toggleClassById(selected)
    }, [selected])

    function predictionsLoaded() {
        if (Object.keys(predictions).length > 0) {
            return (
                <div className="demographic__selectors">
                    <div
                        id="race"
                        className="demographic__selector black"
                        onClick={() => { changeSelection("race")}}>
                        <p className="selected">
                            {predictions.race.key}
                        </p>
                        <p className="demographic__listed" >Race</p>
                    </div>
                    <div
                        id="age"
                        className="demographic__selector grey__hover"
                        onClick={() => { changeSelection("age")}}>
                        <p className="selected">
                            {predictions.age.key}
                        </p>
                        <p className="demographic__listed">Age</p>
                    </div>
                    <div
                        id="gender"
                        className="demographic__selector grey__hover"
                        onClick={() => { changeSelection("gender")}}>
                        <p className="selected">
                            {predictions.gender.key}
                        </p>
                        <p className="demographic__listed">Sex</p>
                    </div>
                </div>
            )
        } else {
            return (
                null
            )
        }
    }

    return (
        <>
            {predictionsLoaded()}
        </>
    )
}

export default PredictedDemos