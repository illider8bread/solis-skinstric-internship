import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";
import CameraIcon from '../assets/photo-icon.png';

import Message from "../components/CameraMessage";
import NavigationButton from "../components/NavigationButton";
import Uploading from "../components/ImagesUploading";
import CameraLoading from "../components/CameraLoading";

function Camera({ createPrediction, loading, created }) {
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [proceed, setProceed] = useState(false);
    const [cameraLoading, setCameraLoading] = useState(true)
    const [loadingDelay, setLoadingDelay] = useState(false)


    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const isCameraOn = () => {
        setCameraLoading(false);
    }

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
            setProceed(true);
        },
        [webcamRef]
    );

    useEffect(() => {
        if (loading) {
            setLoadingDelay(true)
        }
    }, [loading])

    useEffect(() => {
        if (loadingDelay) {
            setTimeout(() => {
                setLoadingDelay(false);
            }, 1000);
        }
    }, [loadingDelay])

    useEffect(() => {
        if (created) {
            navigate("/results")
        }
    }, [created])

    useEffect(() => {
        console.log(image)
    }, [image])

    return (
        <div className="webcam__container">
            {loadingDelay && <Uploading addClass="webcam__uploading" />}
            {cameraLoading ? <CameraLoading /> : (
                <>
                    <Message />
                    <NavigationButton text="back" navTo="/image" classes="inverted noContainer" />
                    {proceed ? (
                        <div className="success__message">Great Shot!</div>
                    ) : (
                        <button className="webcam__cap" onClick={capture}>
                            Take Picture
                            <img src={CameraIcon} className="webcam__icon" alt="Camera Icon" />
                        </button>
                    )}
                </>
            )}
            {image && <img src={image} className="image__preview" alt="Captured" />}
            <Webcam
                className="webcam position__centered"
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                onUserMedia={isCameraOn}
                videoConstraints={videoConstraints}
            />
            {proceed && (
                <NavigationButton text="proceed" navTo="" onClick={() => createPrediction(image)} classes="inverted noContainer" />
            )}
        </div>
    );

}
export default Camera