import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import background from "../assets/form-bkg.png";


function Results() {
    const navigate = useNavigate();

    return (
        <>
            <section className="body results">
                <h2 className="form__header">A.I. Analysis</h2>
               <img src={background} className="form__bgk--img" />
                           <div className="subtitle__para">
                               A. I. has estimated the following. <br />
                               Fix estimated information if needed.
                           </div>
                           <div className="results__buttons">
                               <div className="results__button" onClick={() => {navigate('/demographics')}}>
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
                           <div className="back__btn" onClick={() => navigate("/")}>
                               <img src={btn} alt="" className="arrow" /> Back
                           </div>
                           <div className="proceed__btn" onClick={() => buttonsHandler()}>
                               Get Summary <img src={btn} alt="" className="arrow right" />
                           </div>             
            </section>
        </>
    );
}

export default Results;
