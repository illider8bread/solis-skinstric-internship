import {useEffect, useState} from 'react';

function FormPeice({ setProceed }){
    const [question, setQuestion] = useState("Introduce Yourself");
    const [clicked, setClicked] = useState(false);
    const [input, setInput] = useState('');
    const [name, setName] = useState(null);
    const [location, setLocation] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        if (name === null){
            sessionStorage.setItem('name', input);
            setName(sessionStorage.getItem('name'));
            setClicked(false);
            setQuestion("Where are you from?");
            setInput("");
        } else if (location === null){
            sessionStorage.setItem('location', input)
            setLocation(sessionStorage.getItem('location'));
        }
    };

    return(
        <div className="question">
            <p className="form__question">
                {clicked ? question : "Click to type"}
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="question__input"
                    className="question__input"
                    placeholder={question}
                    value={input}
                    onChange={(e) => {setInput(e.target.value); setClicked(true);}}
                />
            </form>
        </div>
    )
}

export default FormPeice