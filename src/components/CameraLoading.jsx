import loadingbackground from "../assets/preparing.png";
import cameraicon from "../assets/cameraicon.png"
import Message from "./CameraMessage";

function CameraLoading() {
    return(
        <>
                <div className="loading__wrapper">
                    <img src={loadingbackground} className="position__centered" alt="" />
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