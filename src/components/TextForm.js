import React, { useState } from "react"

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    const newText = text.toUpperCase()
    setText(newText)
    props.showAlert("All text converted to UpperCase!", "warning")
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked")
    const newText = text.toLowerCase()
    setText(newText)
    props.showAlert("All text converted to LowerCase!", "secondary")
  }
  const handleClearClick = () => {
    setText("")
    props.showAlert("All text has been removed!", "danger")
  }

  const handleGmailClick = () => {
    const newValue = text + "@gmail.com"
    setText(newValue)
    props.showAlert("@gmail.com has been added!", "primary")
  }
  const handleCopy = () => {
    const text = document.getElementById("exampleFormControlTextarea1")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("All the word have been copied to clipboard!", "success")
  }

  const handleOnChange = event => {
    setText(event.target.value)
  }
  const [text, setText] = useState("") //This is state
  // text = "new text goes here"   >>wrong way
  // setText("New text goes  here...")

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "#fff" }}
      >
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            {props.label}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "#fff" : "#333",
              color: props.mode === "light" ? "black" : "#fff",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Upper-Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Lower-Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleGmailClick}>
          @gmail.com
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy all text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "#fff" }}
      >
        <h2>Summary</h2>
        <p>
          Total words: {text.split(" ").length} & Total characters:{" "}
          {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} minutes - to read all.</p>
        <h3>Preview:</h3>
        <p>{text.length > 0 ? text : "Enter your text to see preview."}</p>
      </div>
    </>
  )
}
