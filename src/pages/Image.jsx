import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import Analysis from "../components/Analysis";
import NavigationButton from "../components/NavigationButton";
import ImageInput from "../components/ImageInput";
import gallery from "../assets/galleryicon.png";
import camera from "../assets/cameraicon.png";
import loadingbackground from "../assets/preparing.png";
import Popup from "../components/Popup";


function Image({ createPrediction, loading, created, setCreated }) {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState(null);
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
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        console.log(photo)
        if (photo != null) {
            createPrediction(photo)
        }
    }, [photo])


    return (
        <div className="container">
            <div className="row">
                <Analysis />
                {loading ? (
                    <div className="loading__wrapper">
                        <img src={loadingbackground} className="position__centered" alt="" />
                        <p className="loading__para">
                            Preparing your Analysis ...
                        </p>
                    </div>
                ) : (
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
                {created ? 
                <Popup text="Image Analized Successfully!" onClickOne={()=>{setCreated(false)}} buttonTextOne="Upload New" onClickTwo={()=>{navigate('/')}} buttonTextTwo="Proceed" position="gallery" />
                : <></>}
                {created ? 
                <NavigationButton text="proceed" navTo="/" />
                : <></>}
                <NavigationButton text="back" navTo="/" />
            </div>
        </div>
    )
}
export default Image