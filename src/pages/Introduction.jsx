import { useState } from "react";
import Analysis from "../components/Analysis";
import background from "../assets/form-bkg.png"
import Form from "../components/Form";
import NavigationButton from "../components/NavigationButton";

function Introduction({createUser, loading, created}) {

    function renderContent(){
        if(created){
            return(
                <div className="position__centered submitted">
                    Thank You!<br/>
                    Proceed for the next step
                </div>
            )
        } else if(loading){
            return(
                <div className="position__centered processing">
                    Processing Submission ...
                </div>
            )
        } else{
            return(
                <Form createUser={createUser}/>
            )
        }
    }
    return(
        <div className="container">
            <div className="row">
            <Analysis />
            <img src={background} className="form__background--img position__centered"/>
            {renderContent()}
            <NavigationButton text="back" navTo="/"/>
            {created ? <NavigationButton text="proceed" navTo="/image"/> : <></>}
            </div>
        </div>
    )
}

export default Introduction;