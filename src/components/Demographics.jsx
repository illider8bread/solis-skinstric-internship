import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import background from "../assets/form-bkg.png";


function Demographics({ race, age, sex }) {


    return (
        <div className="demographicpage">
            <h1 className="demo__title">Demographics</h1>
            <h4 className="demo__subtitle">Predicted race & age</h4>
            <div className="demographics">
                <div className="demographic__selectors">
                    <div className="demographic__selector">
                        <p className="selected">Insert Race </p>
                        <p className="demographic__listed">Race </p>
                    </div>
                    <div className="demographic__selector">
                        <p className="selected">Insert Age </p>
                        <p className="demographic__listed">Age </p>
                    </div>
                    <div className="demographic__selector">
                        <p className="selected">Insert Sex </p>
                        <p className="demographic__listed">Sex</p>
                    </div>
                </div>
                <div className="demographic__info">
                    Insert Race 

                    <div className="pie__percent">
                        insert dynamic percentage display
                    </div>
                </div>
                <div className="demographic__confidence">
                    Race
                    A.I. Confidence
                    <ul>
                        <li>list item </li>
                        <li>list item </li>
                        <li>list item </li>
                        <li>list item </li>
                        <li>list item </li>
                        <li>list item </li>
                        <li>list item</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Demographics;
