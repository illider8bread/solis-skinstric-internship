import loadingbackground from "../assets/preparing.png";
import cameraicon from "../assets/cameraicon.png"
import Message from "./CameraMessage";
import Background from "./Background";

function CameraLoading() {
    return(
        <>
                <div className="loading__wrapper">
                    <Background width="42.5rem" />
                    <p className="loading__para camera__loading">
                        <img src={cameraicon} alt="" />
                        Setting up camera ...
                    </p>
                </div>
                <Message addClass="inverted loading__message" />
        </>
    )
}

export default CameraLoading