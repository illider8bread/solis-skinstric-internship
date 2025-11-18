import background from "../assets/form-bkg.png";
import pointer from "../assets/pointer.png"
import Background from "./Background";

function ImageInput({ icon, text, arrowDirection, onClick }) {

    return (
        <div className="image__input--wrapper">
            <div className="image__input--background">
                {/* <img src={background}
                    className="input__background--image"
                    alt="decorative background diamond, surrounding a button" /> */}
                    <Background width="35vw"/>
                <img src={pointer} className={`pointer ${arrowDirection}`} />
                <p className={`image__input--label para__${arrowDirection}`}> {text} </p>
            </div>
            <button className="image__input--button" onClick={onClick}>
                <img
                    src={icon}
                    className="image__input--icon"
                    alt="button icon" />
            </button>
        </div>
    )
}

export default ImageInput;