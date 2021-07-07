import React, { useContext } from "react"

import userName from "../context/Context.jsx"

const NavBar = props => {

    // state = [ name, setName ] in App.jsx
    // context.name, context.setName
    const context = useContext( userName )

    return (
        <nav className = "NavBar">Hi { context.name }!</nav>
    )
}

export default NavBar