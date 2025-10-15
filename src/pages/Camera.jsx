import React from "react";
import Webcam from "react-webcam";

function Camera() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
    },
    [webcamRef]
  );
  return (
    <>
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        height={720}
        width={1280}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot()
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
    </>
  )
};

export default Camera;