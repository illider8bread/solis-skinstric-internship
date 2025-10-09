import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import radio from '../assets/radio-btn.png';
import radioSelected from '../assets/radio-btn-selected.png'
import { useEffect, useState } from "react";


function Demographics({results, buttonsHandler}) {
    console.log(results);
    
    return (
        <div className="demographicpage">
            <h1 className="demo__title">Demographics</h1>
            <h4 className="demo__subtitle">Predicted race & age</h4>
            <div className="demographics">
                <div className="demographic__selectors">
                    <div className="demographic__selector grey__hover">
                        <p className="selected">Insert Race </p>
                        <p className="demographic__listed">Race </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">Insert Age </p>
                        <p className="demographic__listed">Age </p>
                    </div>
                    <div className="demographic__selector grey__hover">
                        <p className="selected">Insert Sex </p>
                        <p className="demographic__listed">Sex</p>
                    </div>
                </div>
                <div className="demographic__info">
                    Insert Demographic

                    <div className="pie__percent">
                        insert dynamic percentage display
                    </div>
                </div>
                <div className="demographic__confidence">
                    <div className="confidence">
                        <div>
                            Race
                        </div>
                        <div>
                            A.I. Confidence
                        </div>
                    </div>
                    <ul>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>
                        <li className="confidence grey__hover">
                            <div>
                                <img src={radio} className="confidence__radio" />
                                list item
                            </div>
                            <div>
                                0 %
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <p className="disclaimer">
                if A.I. estimate is wrong, please select the correct one.
            </p>
            <div className="landing__btn back" onClick={() => buttonsHandler()}>
                <img src={btn} alt="" className="left-arrow arrow" /> Back
            </div>
            <div className="landing__btn proceed">
                Something somethin <img src={btn} alt="" className="right-arrow arrow" />
            </div>
        </div>
    );
}

export default Demographics;
