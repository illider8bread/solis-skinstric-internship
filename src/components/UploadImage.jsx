import { useNavigate } from "react-router";
import background from "../assets/form-bkg.png";
import camera from "../assets/cameraicon.png";
import gallery from "../assets/galleryicon.png";
import pointer from "../assets/pointer.png";
import btn from '../assets/buttin-icon-shrunk.png';

function UploadImage({ handleButtonClick, handleFileChange, fileInputRef, setPermissions }) {
    const navigate = useNavigate();

    return (
        <>
            <section className="body form">
                <h2 className="form__header">To Start Analysis</h2>
                <div className="container">
                    <div className="selection">
                        <div className="option" onClick={setPermissions}>
                            <img src={camera} className="icon" alt="camera icon" />
                            <img src={pointer} alt="" className="camera-pointer" />
                            <p className="camera__para">Allow A.I. to scan your face</p>
                        </div>
                    </div>
                    <div className="selection">

                        <div className="option" onClick={()=>{handleButtonClick; navigate("/results")}}>
                            <img src={gallery} className="icon" alt="photo gallery icon" />
                            <img src={pointer} alt="" className="gallery-pointer" />
                            <p className="gallery__para">Allow A.I. access to your gallery</p>
                        </div>
                    </div>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef} // Use the ref passed from the parent
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <div className="back__btn" onClick={() => navigate("/")}>
                    <img src={btn} alt="" className="arrow" /> Back
                </div>
            </section>
        </>
    );
}

export default UploadImage;
