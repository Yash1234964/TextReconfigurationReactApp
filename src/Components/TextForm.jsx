/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("")
    const handleUpClick = () => {
        // console.log("Upper case was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        // console.log("Upper case was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleCopyClick = () => {

        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const countWords = (text) => {
        const trimmedText = text.trim();

        const wordsArray = trimmedText.split(/\s+/);

        const filteredWords = wordsArray.filter(word => word !== '');

        return filteredWords.length + 1;
    }

    return (
        <>
            <div>
                <h1>{props.textHeading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Handle Extra Space</button>
            </div>
            <div className='container my-2'>
                <h1>Your Text Summary</h1>
                <p>{countWords()} words and {text.length} characters</p>
                <p>{0.008 * countWords()} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}