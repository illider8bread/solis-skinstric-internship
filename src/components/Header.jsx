import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const path = location.pathname;

    function renderSection() {
        if(path === "/" || path === "/introduction" || path === "/image"){
            return ("INTRO")
        } else {
            return ("ANALYSIS")
        }
    }

    return (
        <header>
            {path === "/camera" ? (<></>) : (<>
            <div className="header__logo--wrapper">
                <h4 className="header__logo">
                    skinstric
                </h4>
                <p className="header__logo--location">
                    [ {renderSection()} ]
                </p>
            </div>
            {path === "/" ?
                (<div className="header__btn--wrapper"> 
                    <button className="black__btn">
                        Enter Code
                    </button>
                </div>)
                : null}
            </>)}
        </header>
    )
}

export default Header