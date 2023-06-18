import React, { useRef, useState } from 'react'

function Task5() {
    const [date, setDate] = useState("");
    const [age, setAge] = useState(0);
    const dateInputRef = useRef(null);
    const handleChange = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };
    const calculateAge = (date) => {
        const today = new Date().getTime();
        const birthDate = new Date(date).getTime();
        const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365));
        setAge(age);
    };
    return (
        <div className="container" >
            <header className="App-header" style={{"display": "flex", "flexDirection": "column", "justifyContent":"center", "alignItems":"center"}}>
                <h1>Age Calculator</h1>
                <h5>Enter your date of birth</h5>
                <div className="Age-Container" style={{"display": "flex", "flexDirection": "column", "justifyContent":"center", "alignItems":"center"}}>
                    <input type="date" onChange={handleChange} ref={dateInputRef} /> <br />
                    <button className='btn bg-primary text-white' onClick={() => calculateAge(date)}>Calculate Age</button>
                    {age === 0 ? (
                        <h3>Enter Date to calculate your age</h3>
                    ) : (
                        <h3>You are {age} years old</h3>
                    )}
                </div>
            </header>
        </div>

    )
}

export default Task5