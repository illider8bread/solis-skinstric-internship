import { useNavigate } from "react-router"
import { useEffect, useState } from "react";
import btn from '../assets/buttin-icon-shrunk.png';


function NavigationButton({ text, navTo, classes, onClick }) {
    const navigate = useNavigate();
    const [direction, setDirection] = useState("")

    useEffect(()=>{
    if (text === "back") {
        setDirection("left")
    } else if (text === "proceed" || text === "get summary") {
        setDirection("rightside")
    }
    },[])


    return (
        <button 
        className={`navigation__button bottom ${direction} ${direction==="rightside"? "proceed": ""} ${classes? classes : ""}`}
        onClick={navTo===""? onClick : ()=>{navigate(navTo)}}
        >
            <img
                src={btn}
                className={`button__icon ${direction==="rightside"? `right`: ' '}`}
                alt={`directional arrow with a border, pointing ${direction}`}
            />
            <p className="navigation__button--text">
                {text}
            </p>
        </button>
    )
}

export default NavigationButton;