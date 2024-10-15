import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Coppied to clipboard","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces","success");
  }

  const [text, setText] = useState("");
  
  const style = {
    color: props.mode === 'black' ? 'white':'black',
    backgroundColor: props.mode === 'black' ? '#042743':'white' 
  }

  return (
    <>
      <div className="container" style={style}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter text here"
            id="myBox"
            rows="8"
            style={{color: props.mode === 'black' ? 'white':'black',backgroundColor: props.mode === 'black' ? 'rgb(36 74 104)':'white' }}
          ></textarea>
        </div>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          style={style}
          onClick={handleUp}
          disabled={text.length===0}
        >
          To Uppercase
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          style={style}
          onClick={handleLo}
          disabled={text.length===0}
        >
          To Lowercase
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          style={style}
          onClick={handleClear}
          disabled={text.length===0}
        >
          Clear
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          style={style}
          onClick={handleCopy}
          disabled={text.length===0}
        >
          Copy
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          style={style}
          onClick={handleExtraSpaces}
          disabled={text.length===0}
        >
          Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={style}>
        <h2>Your text summary</h2>
        <p>
          {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters
        </p>
        <p>
          {0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string.isRequired,
};