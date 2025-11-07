import background from "../assets/form-bkg.png";
import pointer from "../assets/pointer.png"

function ImageInput({icon, text, arrowDirection}) {

    return(
        <div className="image__input--wrapper">
            <img src={background} 
            className="position__centered image__input--background"
            alt="decorative background diamond, surrounding a button" />
            <button className="image__input--button">
                <img 
                src={icon} 
                className="image__input--icon"
                alt="button icon" />
                <p className="image__input--label"> {text} </p>
                <img src={pointer} className={`pointer ${arrowDirection}`} />
            </button>
        </div>
    )
}

export default ImageInput;