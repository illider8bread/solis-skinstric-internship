import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";
import CameraIcon from '../assets/photo-icon.png';
import radio from '../assets/radio-btn.png'
import btn from '../assets/buttin-icon-shrunk.png';
import WebLoad from '../assets/webcamload.png'


const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const Camera = (uploadImage) => {
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState()
  const [proceed, setProceed] = useState(false);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
      setProceed(true);
    },
    [webcamRef]
  );

  useEffect(() => {
    // Simulate a loading state for 2 seconds (or until the camera is ready)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="webcam__container">
      {loading ? (
        <div className="loading">
          <img src={WebLoad} className="loading--img" />
          <div className="webcam__message inverted">
            To get better results make sure to have<br />
            <ul>
              <li><img src={radio} className='inverted' />Neutral Expression</li>
              <li><img src={radio} className='inverted' />Frontal Pose</li>
              <li><img src={radio} className='inverted' />Adequate lighting</li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <Webcam
            className="webcam"
            audio={false}
            height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          />
          <button className="webcam__cap" onClick={capture} >Take Picture
            <img src={CameraIcon} className="webcam__icon" />
          </button>
          <div className="webcam__message">
            To get better results make sure to have<br />
            <ul>
              <li><img src={radio} className='inverted' />Neutral Expression</li>
              <li><img src={radio} className='inverted' />Frontal Pose</li>
              <li><img src={radio} className='inverted' />Adequate lighting</li>
            </ul>
          </div>
          <div className="back__btn inverted" onClick={() => navigate("/")}>
            <img src={btn} alt="" className="arrow " /> Back
          </div>
        </>
      )}
      {!proceed ? null : (
        <>
        <div className="camera__shot" >
          Great Shot!
        </div>
        <div className="proceed__btn inverted" onClick={() => {navigate("/results"); sessionStorage.setItem("image", image)}} >
          Proceed
          <img src={btn} alt="" className="arrow right" />
        </div>
        </>
      )}
    </div>
  );
};

export default Camera;