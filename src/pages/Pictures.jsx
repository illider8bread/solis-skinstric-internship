import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import preparing from "../assets/preparing.png";
import UploadImage from "../components/UploadImage";

function Pictures({ uploadImage, loading }) {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [encodedImage, setEncodedImage] = useState("");

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        const reader = new FileReader(); // Create a FileReader setup
        if (file) {
            // Set up the onloadend event to handle the file once it's read
            reader.onloadend = function () {
                setEncodedImage(reader.result); // Save the Base64 string to state
            };
            // Read the file as a data URL (Base64)
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (encodedImage) {
            // Only call uploadImage if there's an image
            uploadImage(encodedImage);
        }
    }, [encodedImage]);

    return (
        <>
            {loading ? (
                <div className="container">
                    <figure className="preparing__image">
                        <img src={preparing} alt="" />
                    </figure>
                    <div className="preparing__text">Preparing your analysis...</div>
                </div>
            ) : (
                <UploadImage 
                    handleButtonClick={handleButtonClick} 
                    handleFileChange={handleFileChange} 
                    fileInputRef={fileInputRef} // Pass the ref to the child component
                />
            )}
        </>
    );
}

export default Pictures;
