

function Uploading({ addClass }) {
    return (
        <>
            <div className={`loading__wrapper ${addClass}`}>
                <p className="loading__para">
                    Preparing your Analysis ...
                </p>
            </div>
        </>
    )
}

export default Uploading