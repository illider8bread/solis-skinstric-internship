import React from "react";
import Webcam from "react-webcam";
import CameraIcon from '../assets/photo-icon.png';
import radio from '../assets/radio-btn.png'
import btn from '../assets/buttin-icon-shrunk.png';
import { useNavigate } from "react-router";


const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const Camera = (uploadImage) => {
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      sessionStorage.setItem("image", imageSrc);
    },
    [webcamRef]
  );
  return (
    <div className="webcam__container">
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
      <div className="landing__btn back inverted" onClick={() => navigate("/")}>
        <img src={btn} alt="" className="left-arrow arrow " /> Back
      </div>
    </div>


  );
};

export default Camera;