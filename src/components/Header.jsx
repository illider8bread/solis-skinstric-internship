

function Header(){

    return(
        <header>
            <div className="header__logo--wrapper">
                <h4 className="header__logo">
                    skinstric
                </h4>
                <p className="header__logo--location">
                    [ INTRO ] {/* Make this line dynamic? */}
                </p>
            </div>
            <div className="header__btn--wrapper"> {/* Make this display only on the first page (maybe a function attached to the buttons that toggles true or false?) */}
                <button className="black__btn">
                    Enter Code
                </button>
            </div>
            
        </header>
    )
}

export default Header