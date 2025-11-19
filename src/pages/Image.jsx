import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import Analysis from "../components/Analysis";
import NavigationButton from "../components/NavigationButton";
import ImageInput from "../components/ImageInput";
import gallery from "../assets/galleryicon.png";
import camera from "../assets/cameraicon.png";
import Popup from "./Popup";
import Uploading from "../components/ImagesUploading";
import Background from "../components/Background";


function Image({ createPrediction, loading, created, setCreated }) {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
    const [takePhoto, setTakePhoto] = useState(false)
    const fileInputRef = useRef(null);

    const triggerUpload = () => {
        fileInputRef.current.click();
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
                localStorage.setItem("image", reader.result)
                // REMOVE ABOVE LINE
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (photo != null) {
            createPrediction(photo)
        }
    }, [photo])


    return (
        <>
        {loading ? <Background width="min(42.5rem, 110%)" marginTop="2rem" /> : <></> }
        <div className="container">
            <div className="row">
                <Analysis />
                {loading ? (
                    <Uploading/>
                ) : (
                    <div className="image__wrapper">
                        <div className="input__wrapper">
                            <ImageInput
                                icon={camera}
                                text="Allow A.I. to scan your face"
                                arrowDirection="northeast"
                                onClick={() => { setTakePhoto(true) }} />
                        </div>
                        <div className="input__wrapper">
                            <ImageInput
                                icon={gallery}
                                text="Allow A.I. to accss your gallery"
                                arrowDirection="southwest"
                                onClick={triggerUpload} />
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handlePhotoChange}
                            />
                        </div>
                    </div>
                )}
                {takePhoto ?
                    <Popup text="Allow A.I. to access your camera?" onClickOne={() => { setTakePhoto(false) }} buttonTextOne="Deny" onClickTwo={() => { navigate('/camera') }} buttonTextTwo="Allow" position="camera" />
                    : <></>}
                {created ?
                    <Popup text="Image Analized Successfully!" onClickOne={() => { setCreated(false) }} buttonTextOne="Upload New" onClickTwo={() => { navigate('/results') }} buttonTextTwo="Proceed" position="gallery" />
                    : <></>}
                {created ?
                    <NavigationButton text="proceed" navTo="/results" />
                    : <></>}
                <NavigationButton text="back" navTo="/introduction" />
            </div>
        </div>
        </>
    )
}
export default Image