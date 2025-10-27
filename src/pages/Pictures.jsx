import { useEffect, useRef, useState } from "react";
import preparing from "../assets/preparing.png";
import UploadImage from "../components/UploadImage";
import { useNavigate } from "react-router";

function Pictures({ uploadImage, loading }) {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [permissions, setPermissions] = useState(false);

    const changePermissions = () => {
        setPermissions(true);
    }

    const handlePermissions = ()=>{
        navigator.mediaDevices.getUserMedia({ video: true });
        navigate('/webcam');
    }

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        const reader = new FileReader(); // Create a FileReader setup
        if (file) {
            // Set up the onloadend event to handle the file once it's read
            reader.onloadend = function () {
                sessionStorage.setItem("image", reader.result);
            };
            // Read the file as a data URL (Base64)
            reader.readAsDataURL(file);
        }
        navigate("/results")
    };

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
                    setPermissions={changePermissions}
                    fileInputRef={fileInputRef} // Pass the ref to the child component
                />
            )}
            {permissions ? (
            <div className="camera__permissions">
                <p className="permission__question">Allow A.I. to access your camera?</p>
                <div className="permission__buttons">
                    <button className="permission__button grey" >Deny</button>
                    <button className="permission__button" onClick={handlePermissions} >Allow</button>
                </div>
            </div>
            ): null}
        </>
    );
}

export default Pictures;
