import { useState } from "react"
import "./App.css"
// import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#333"
      showAlert("Light mode enabled.", "success")
      document.title = "TextUtils - Darkmode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "#fff"
      showAlert("Light mode enabled.", "success")
      document.title = "TextUtils"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="MyFirstReact" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* use of exact */}
        {/* /user --> component1
            /user/profile --> component1  >> this happens when we dont use exact because /user are same */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm label="Input text.." mode={mode} showAlert={showAlert} />
        {/* }
            /> */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
