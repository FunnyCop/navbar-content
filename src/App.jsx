import React, { useState } from "react"

import userName from "./context/Context.jsx"
import NavBar from "./components/NavBar.jsx"
import Form from "./components/Form.jsx"

import "./App.css"

const App = () => {
  const [ name, setName ] = useState( "Logan Prunty" )

  return (
    <div className = "App">
      <userName.Provider value = {{ name, setName }}>
        <NavBar />
        <Form />
      </userName.Provider>
    </div>
  )
}

export default App
