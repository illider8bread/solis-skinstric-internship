import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import btn from '../assets/buttin-icon-shrunk.png';
import camera from "../assets/cameraicon.png";
import gallery from "../assets/galleryicon.png";
import background from "../assets/form-bkg.png";
import pointer from "../assets/pointer.png";

function Pictures() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [encodedImage, setEncodedImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        const reader = new FileReader(); //create a FileReader setup
        
        if (file) {
            
            // Set up the onloadend event to handle the file once it's read
            reader.onloadend = function () {
                setEncodedImage(reader.result); // Save the Base64 string to state
            };

            // Read the file as a data URL (Base64)
            reader.readAsDataURL(file);
        }
    };
    async function uploadImage() {
        setLoading(true);
        const postData = {
            "image": encodedImage
        };
        const endpoint = 'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo';
        axios.post(endpoint, postData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
    if (encodedImage) { // Only call uploadImage if there's an image
        uploadImage();
    }
}, [encodedImage]);


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
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
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
