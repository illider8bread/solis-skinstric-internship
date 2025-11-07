import { useState } from "react";
import StartAnalysis from "../components/StartAnalysis";
import NavigationButton from "../components/NavigationButton";
import ImageInput from "../components/ImageInput";
import gallery from "../assets/galleryicon.png";
import camera from "../assets/cameraicon.png";

function Image() {
    return(
        <div className="container">
            <div className="row">
            <StartAnalysis/>
            <div className="image__wrapper">
                <div className="input__wrapper">
            <ImageInput icon={gallery} text="blah blah blah" arrowDirection="southwest" />

                </div>
                <div className="input__wrapper">
                    
            <ImageInput icon={camera} text="blah blah blah" arrowDirection="northeast" />
                </div>
            </div>
            <NavigationButton text="back" navTo="/"/>
            </div>
        </div>
    )
}
export default Image