import cameraicon from "../assets/cameraicon.png"
import Message from "./CameraMessage";
import Background from "./Background";

function CameraLoading() {
    return(
        <>
                <div className="loading__wrapper">
                    <Background width="min(42.5rem, 110%)" />
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