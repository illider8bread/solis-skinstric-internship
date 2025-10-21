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
                <img className="form__bgk--img" alt="" />
                <div className="container">
                    <div className="selection">
                        <img src={background} alt="background image of swirling squares" className="background" />
                        <div className="option" onClick={setPermissions}>
                            <img src={camera} alt="camera icon" />
                        </div>
                        <img src={pointer} alt="" className="camera-pointer"  />
                        <p className="camera__para option__para">Allow A.I. to scan your face</p>
                    </div>
                    <div className="selection">
                        <img src={background} alt="background image of swirling squares" className="background" />
                        <div className="option" onClick={handleButtonClick}>
                            <img src={gallery} alt="photo gallery icon" />
                        </div>
                        <img src={pointer} alt="" className="gallery-pointer" />
                        <p className="gallery__para option__para">Allow A.I. access to your gallery</p>
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
                <div className="proceed__btn" onClick={() => navigate("/")}>
                    Proceed <img src={btn} alt="" className="arrow right" />
                </div>
            </section>
        </>
    );
}

export default UploadImage;
