import { useEffect, useState } from "react";

function Form({createUser}) {
    const [question, setQuestion] = useState("Introduce Yourself");
    const [clicked, setClicked] = useState(false);
    const [input, setInput] = useState("");
    const [name, setName] = useState(null);
    const [location, setLocation] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === null) {
            setName(input);
            setClicked(false);
            setQuestion("Where are you from?");
            setInput("");
        } else if (location === null) {
            setLocation(input);
        }
    };

    useEffect(()=>{
        if(location != null){
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("location", location);
            createUser(name, location);
        }
    },[location])

    return (
        <div className="form__wrapper position__centered">
            <p className="form__question">
                {clicked ? question : "Click to type"}
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="form__input"
                    className="form__input"
                    placeholder={clicked ? " " : question}
                    value={input}
                    onClick={() => {
                        setClicked(true);
                    }}
                    onChange={(e) => { setInput(e.target.value); setClicked(true) }}
                />
            </form>
        </div>
    )
}
export default Form;