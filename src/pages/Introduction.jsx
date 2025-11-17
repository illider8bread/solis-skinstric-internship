import Analysis from "../components/Analysis";
import Form from "../components/Form";
import NavigationButton from "../components/NavigationButton";
import { useEffect } from "react";
import Background from "../components/Background";
import {gsap} from "gsap";

function Introduction({ createUser, loading, created }) {


    function processingAnimation() {
        let tl = gsap.timeline({repeat:-1});
        tl.to("#dot1", { y: -16, duration: 0.25 }) 
            .to("#dot1", { y: 16, duration: 0.25 }) 
            .to("#dot2", { y: -16, duration: 0.25 }) 
            .to("#dot2", { y: 16, duration: 0.25 }) 
            .to("#dot3", { y: -16, duration: 0.25 }) 
            .to("#dot3", { y: 16, duration: 0.25 });
    }

    // useEffect(() => {
    //     processingAnimation()
    // }, [])

    function renderContent() {
        if (sessionStorage.getItem("usercreated") === true || created) {
            return (
                <div className="position__centered submitted">
                    Thank You!<br />
                    Proceed for the next step
                </div>
            )
        } else if (loading) {
            return (
                <div className="position__centered processing">
                    Processing Submission <br />
                    <span id="dot1" className="processing__dot">.</span>
                    <span id="dot2" className="processing__dot">.</span>
                    <span id="dot3" className="processing__dot">.</span>
                </div>
            )
        } else {
            return (
                <Form createUser={createUser} />
            )
        }
    }

    return (
        <>
            <Background />
            <div className="container">
                <div className="row">
                    <Analysis />
                    <div className="position__centered processing">
                        Processing Submission <br />
                        <span id="dot1" className="processing__dot">.</span>
                        <span id="dot2" className="processing__dot">.</span>
                        <span id="dot3" className="processing__dot">.</span>
                    </div>
                    {/* {renderContent()} */}
                    <NavigationButton text="back" navTo="/" />
                    {created ? <NavigationButton text="proceed" navTo="/image" /> : <></>}
                </div>
            </div>
        </>
    )
}

export default Introduction;