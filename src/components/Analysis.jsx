import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import background from "../assets/form-bkg.png";


function Analysis({ buttonsHandler }) {

    return (
        <>
            <img src={background} className="form__bgk--img" />
            <div className="subtitle__para">
                A. I. has estimated the following. <br />
                Fix estimated information if needed.
            </div>
            <div className="results__buttons">
                <div className="results__button" onClick={() => { buttonsHandler() }}>
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
            <div className="landing__btn back" onClick={() => navigate("/")}>
                <img src={btn} alt="" className="left-arrow arrow" /> Back
            </div>
            <div className="landing__btn proceed" onClick={() => buttonsHandler()}>
                Get Summary <img src={btn} alt="" className="right-arrow arrow" />
            </div>
        </>
    );
}

export default Analysis;
