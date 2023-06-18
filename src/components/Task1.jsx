import React, { useState } from "react";
import "../Task1.css";

const Task1 = () => {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleCountClick = () => {
        const trimmedText = text.trim();
        const words = trimmedText === "" ? [] : trimmedText.split(/\s+/);
        setWordCount(words.length);
    };

    return (
        <div className="word-counter">
            <textarea
                className="word-counter__textarea"
                value={text}
                onChange={handleTextChange}
                rows={4}
                placeholder="Enter your text here..."
            />
            <br />
            <button className="word-counter__button" onClick={handleCountClick}>
                Count Words
            </button>
            <p className="word-counter__count">Word Count: {wordCount}</p>
        </div>
    );
};

export default Task1;