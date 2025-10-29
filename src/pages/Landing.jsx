import { useNavigate } from "react-router"
import btn from '../assets/buttin-icon-shrunk.png'
import triangle from '../assets/Rectangle-bkg.png'

function Landing() {
    const navigate = useNavigate();
    return (
            <section className="body landing__body">
                <img src={triangle} alt="" className="triangle left" />
                    <div className="landing__btn">
                        <img src={btn} alt="" className="arrow" />
                        Discover A.I.
                    </div>
                <div className="landing__title--wrapper">
                    <h1 className="landing__title">Sophisticated skincare</h1>
                </div>
                    <div onClick={()=>{navigate('/form')}} id="landing__btn--right" className="landing__btn">
                        Take Test
                        <img src={btn} alt="" className="arrow right" />
                    </div>
                    <img src={triangle} alt="" className="triangle right" />
            <div className="landing__footer">
                <p className="landing__footer--text">
                    Skinstric developed an A.I. that creates a highly personalized routine tailored to what your skin needs.
                </p>
            </div>
            </section>
    )
}

export default Landing