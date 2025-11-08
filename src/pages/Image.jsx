import { useState } from "react";
import StartAnalysis from "../components/StartAnalysis";
import NavigationButton from "../components/NavigationButton";
import ImageInput from "../components/ImageInput";
import gallery from "../assets/galleryicon.png";
import camera from "../assets/cameraicon.png";

function Image({ createPrediction }) {
    return (
        <div className="container">
            <div className="row">
                <StartAnalysis />
                <div className="image__wrapper">
                    <div className="input__wrapper">
                        <ImageInput
                            icon={camera}
                            text="Allow A.I. to scan your face"
                            arrowDirection="northeast"
                            onClick={() => { console.log("you clicked camera") }} />
                    </div>
                    <div className="input__wrapper">
                        <ImageInput
                            icon={gallery}
                            text="Allow A.I. to accss your gallery"
                            arrowDirection="southwest"
                            onClick={() => { console.log("you clicked gallery") }} />
                    </div>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef} // Use the ref passed from the parent
                    style={{ display: 'none' }}
                />
                <NavigationButton text="back" navTo="/" />
            </div>
        </div>
    )
}
export default Image