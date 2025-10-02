

function Header(){

    return(
        <header>
            <div className="header__logo--wrapper">
                <h4 className="header__logo">
                    SKINSTRIC
                </h4>
                <p className="header__logo--location">
                    [INTRO] {/* Make this line dynamic? */}
                </p>
            </div>
            <div className="header__btn--wrapper">
                <button className="header__btn">
                    Enter Code
                </button>
            </div>
        </header>
    )
}

export default Header