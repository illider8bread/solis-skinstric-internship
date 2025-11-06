import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { gsap } from "gsap"; // Import GSAP
import btn from '../assets/buttin-icon-shrunk.png';
import triangle from '../assets/Rectangle-bkg.png';
import emphasisTriangle from "../assets/Rectangle-bkg-emphasis.png"

function Landing() {
    const navigate = useNavigate();
    const [buttonVisible, setButtonVisible] = useState(true);

    const slideOff = () => {
        gsap.to("#animated__btn", {
            x: "-100%",
            duration: 0.5,
            onComplete: () => {
                setButtonVisible(false);
            }
        });
    };

    const slideOn = () => {
        gsap.set("#animated__btn", { x: "-100%", autoAlpha: 0 });

        gsap.to("#animated__btn", {
            x: "0%",
            autoAlpha: 1,
            duration: 0.5,
            onStart: () => {
                setButtonVisible(true);
            }
        });
    };

    useEffect(() => {

        return () => {
            gsap.killTweensOf("#animated__btn");
        };
    }, []);

    return (
        <div className="container">
            <div className="row">
                <section className="landing">
                    {buttonVisible ? (
                        <div
                            id="animated__btn"
                            className="button__left"
                        >
                            <img
                                src={triangle}
                                className="button__frame"
                                id="button__frame--left"
                                alt="a decorative triangle"
                            />

                            <button className="navigation__button landing__button">
                                <img
                                    src={btn}
                                    className="button__icon"
                                    alt="directional triangle inside of a rotated square, pointing left"
                                />

                                <p className="navigation__button--text">
                                    Discover A.I.
                                </p>
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="title">
                        Sophisticated skincare
                    </div>
                    <div className="button__right">
                        <img
                            src={buttonVisible? triangle : emphasisTriangle}
                            className="button__frame right"
                            id="button__frame--right"
                            alt="a decorative triangle"
                        />

                        <button
                            className="navigation__button landing__button"
                            onMouseEnter={slideOff}
                            onMouseLeave={slideOn}
                        >
                            <p className="navigation__button--text">
                                Take Test
                            </p>

                            <img
                                src={btn}
                                className="button__icon right"
                                alt="directional triangle inside of a rotated square, pointing right"
                            />
                        </button>
                    </div>
                    <div className="disclaimer">
                        Skinstric developed an A.I. that creates
                        a highly-personalised routine tailored to
                        what your skin needs.
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Landing;
