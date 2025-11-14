import loadingbackground from "../assets/preparing.png";

function Uploading({addClass}) {
    return (
        <div className={`loading__wrapper ${addClass}`}>
            <img src={loadingbackground} className="position__centered" alt="" />
            <p className="loading__para">
                Preparing your Analysis ...
            </p>
        </div>
    )
}

export default Uploading