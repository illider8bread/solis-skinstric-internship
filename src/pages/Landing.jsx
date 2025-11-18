import { useEffect} from "react";
import { useNavigate } from "react-router";
import { gsap } from "gsap";
import btn from '../assets/buttin-icon-shrunk.png';
import triangle from '../assets/Rectangle-bkg.png';

function Landing() {
    const navigate = useNavigate();

    const slideOff = () => {
        let timeline = gsap.timeline()
        timeline.to("#animated__btn",
            {
                x: "-200%",
                duration: 1
            })
            .to(".title",
                {
                    x: "-40%",
                    duration: 1
                },
                "-=1")
            .to("#triangle1",
                {
                    scale: 1.4,
                    opacity: 0.5,
                    duration: 1
                },
                "-=1")
            .to("#triangle2",
                {
                    scale: 1.2,
                    opacity: 0.75,
                    duration: 1
                },
                "-=1")

    };

    const slideOn = () => {
        gsap.to("#animated__btn, .title, #triangle1, #triangle2",
            {
                x: "0%",
                scale: 1,
                duration: 1
            })
        gsap.to("#triangle1, #triangle2",
            {
                opacity:0
            },
        "")

    };

    useEffect(() => {

        return () => {
            gsap.killTweensOf("#animated__btn");
        };
    }, []);

    return (
        <div className="container">
            <section className="landing">
                <div
                    id="animated__btn"
                    className="button__left"
                >
                    <img
                        src={triangle}
                        className="button__frame"
                        alt="a decorative triangle"
                    />

                    <button id="nav__left"
                    className="navigation__button landing__button">
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
                <div className="title">
                    Sophisticated skincare
                </div>
                <div className="button__right">
                    <img
                        src={triangle}
                        className="button__frame right"
                        id="triangle1"
                        alt="a decorative triangle"
                        style={{opacity:0}}
                    />
                    <img
                        src={triangle}
                        className="button__frame right"
                        id="triangle2"
                        alt="a decorative triangle"
                        style={{opacity:0}}
                    />
                    <img
                        src={triangle}
                        className="button__frame right"
                        id="triangle3"
                        alt="a decorative triangle"
                    />


                    <button
                        id="nav__right"
                        className="navigation__button landing__button"
                        onMouseEnter={slideOff}
                        onMouseLeave={slideOn}
                        onClick={() => navigate("/introduction")}
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
    );
}

export default Landing;
