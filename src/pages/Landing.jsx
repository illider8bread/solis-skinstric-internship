import { Link } from "react-router"

function Landing() {

    return (
        <>
            <section className="landing__body">
                <div className="landing__discover--wrapper">
                    <Link>
                        <img src="" alt="" className="left-arrow" />
                        Discover All
                    </Link>
                </div>
                <div className="landing__title--wrapper">
                    <h1 className="landing__title">Sophisticated Skincare</h1>
                </div>
                <div className="landing__test--wrapper">
                    <Link>
                        Take Test
                        <img src="" alt="" className="right-arrow" />
                    </Link>
                </div>
            </section>
            <div className="landing__footer">
                <p className="landing__footer--text">
                    Skinstric developed an A.I. that creates a highly personalized routine tailored to what your skin needs.
                </p>
            </div>
        </>
    )
}

export default Landing