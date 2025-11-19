function Popup({ text, onClickOne, buttonTextOne, onClickTwo, buttonTextTwo, position }) {

    return (
        <div className={`popup__wrapper popup__${position}`} >
            <p className="popup__text">
                {text}
            </p>
            <div className="popup__buttons--wrapper">
                <button className="popup__button" onClick={onClickOne}>
                    {buttonTextOne}
                </button>
                <button className="popup__button" onClick={onClickTwo}>
                    {buttonTextTwo}
                </button>
            </div>
        </div>
    )
}

export default Popup;