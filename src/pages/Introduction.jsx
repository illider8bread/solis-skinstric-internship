import Analysis from "../components/Analysis";
import Form from "../components/Form";
import NavigationButton from "../components/NavigationButton";
import { useEffect } from "react";
import Background from "../components/Background";
import {gsap} from "gsap";

function Introduction({ createUser, loading, created }) {




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
                    Processing Submission . . .
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
            <Background width="42.5rem" marginTop="2rem"/>
            <div className="container">
                <div className="row">
                    <Analysis />
                    {renderContent()}
                    <NavigationButton text="back" navTo="/" />
                    {created ? <NavigationButton text="proceed" navTo="/image" /> : <></>}
                </div>
            </div>
        </>
    )
}

export default Introduction;