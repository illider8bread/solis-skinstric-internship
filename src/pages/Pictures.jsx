import React, { useRef } from "react";
import { useNavigate } from "react-router";
import btn from '../assets/buttin-icon-shrunk.png';
import camera from "../assets/cameraicon.png";
import gallery from "../assets/galleryicon.png";
import background from "../assets/form-bkg.png";
import pointer from "../assets/pointer.png";

function Pictures() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null); // Move ref declaration here

    const handleButtonClick = () => {
        console.log("pressed");
        fileInputRef.current.click(); // Trigger the file input click
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            console.log('Selected file:', file.name); // You can handle the file here
        }
        const reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file);
    };

return (
    <>
        <section className="body form">
            <h2 className="form__header">To Start Analysis</h2>
            <img className="form__bgk--img" alt="" />
            <div className="container">
                <div className="selection">
                    <img src={background} alt="background image of swirling squares" className="background" />
                    <div className="option">
                        <img src={camera} alt="camera icon" />
                    </div>
                    <img src={pointer} alt="" className="camera-pointer" />
                    <p className="camera__para option__para">
                        Allow A.I. to scan your face
                    </p>
                </div>
                <div className="selection">
                    <img src={background} alt="background image of swirling squares" className="background" />
                    <div className="option" onClick={handleButtonClick}>
                        <img src={gallery} alt="photo gallery icon" />
                    </div>
                    <img src={pointer} alt="" className="gallery-pointer" />
                    <p className="gallery__para option__para">
                        Allow A.I. access to your gallery
                    </p>
                </div>
            </div>
            <input
                type="file"
                ref={fileInputRef} // Change itemRef to ref
                style={{ display: 'none' }} // Hide the file input
                onChange={handleFileChange} // Handle file selection
            />
            <div className="landing__btn back" onClick={() => navigate("/")}>
                <img src={btn} alt="" className="left-arrow arrow" />
                Back
            </div>
            <div className="landing__btn proceed" onClick={() => navigate("/")}>
                Proceed
                <img src={btn} alt="" className="right-arrow arrow" />
            </div>
        </section>
    </>
);
}

export default Pictures;
