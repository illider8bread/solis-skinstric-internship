import NavigationButton from "../components/NavigationButton"
import Analysis from "../components/Analysis"
import background from "../assets/form-bkg.png"


function Results() {



    return (
        <div className="container">
            <div className="row">
                <Analysis />

                <img src={background} alt="" className="position__centered results__background" />
                <div className="results">
                    <div className="results__wrapper">
                        <div className="results__button">
                            <p className="results__button--text">
                                Demographics
                            </p>
                        </div>
                        <div className="results__button">
                            <p className="results__button--text">
                                Cosmetic Concerns
                            </p>
                        </div>
                        <div className="results__button">
                            <p className="results__button--text">
                                Skin Type Details
                            </p>
                        </div>
                        <div className="results__button">
                            <p className="results__button--text">
                                Weather
                            </p>
                        </div>
                    </div>
                </div>
                <NavigationButton text="back" navTo="/" />
            </div>
        </div>
    )
}

export default Results