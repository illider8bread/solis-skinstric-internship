import NavigationButton from "../components/NavigationButton"
import Analysis from "../components/Analysis"
import background from "../assets/background-square.png"
import { useNavigate } from "react-router"
import gsap from "gsap"

function Results() {
    const navigate = useNavigate();
    let tl;

    function backgroundAnim(tl) {
        if (!tl) {
            tl = gsap.timeline({ paused: true })
            tl.add("startSimultaneous", "0")
                .fromTo("#box2",
                    {
                        scale: 1,
                        opacity: 0
                    },
                    {
                        scale: 1.1,
                        opacity: 0.66,
                        duration: 0.5
                    },
                    "startSimultaneous")
                .fromTo("#box3",
                    {
                        scale: 1,
                        opacity: 0
                    },
                    {
                        scale: 1.2,
                        opacity: 0.33,
                        duration: 0.5
                    },
                    "startSimultaneous")
        }
        return tl

    }

    return (
        <div className="container">
            <div className="row">
                <Analysis />

                <img src={background} alt="" id="box1" className="position__centered results__background" />
                <img src={background} alt="" id="box2" className="position__centered results__background" style={{ opacity: 0 }} />
                <img src={background} alt="" id="box3" className="position__centered results__background" style={{ opacity: 0 }} />
                <div className="results">
                    <div className="results__wrapper"
                        onMouseEnter={() => { tl = backgroundAnim(tl); tl.play() }}
                        onMouseLeave={() => { tl.reverse() }}>
                        <div
                            className="results__button"
                            onClick={() => { navigate("/demographics") }}>
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
                <NavigationButton text="back" navTo="/image" />
                <NavigationButton text="get summary" navTo="/demographics" />
            </div>
        </div>
    )
}

export default Results