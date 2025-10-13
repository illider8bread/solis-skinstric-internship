
function PredictedDemos({ predictions }) {

    function predictionsLoaded() {
        if (Object.keys(predictions).length > 0) {
            return (
                <div className="demographic__selectors">
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            {predictions.race.key}
                        </p>
                        <p className="demographic__listed">Race </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            {predictions.age.key}
                        </p>
                        <p className="demographic__listed">Age </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            {predictions.gender.key}
                        </p>
                        <p className="demographic__listed">Sex</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="demographic__selectors">
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            Fetching...
                        </p>
                        <p className="demographic__listed">Race </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            Fetching...
                        </p>
                        <p className="demographic__listed">Age </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">
                            Fetching...
                        </p>
                        <p className="demographic__listed">Sex</p>
                    </div>
                </div>
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