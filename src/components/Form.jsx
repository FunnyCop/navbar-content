import React, { useContext } from "react"

import userName from "../context/Context.jsx"

const Form = props => {
    const context = useContext( userName )

    return (
        <form className = "Form form-control" onSubmit = { e => e.preventDefault() }>
            <label htmlFor="name">Name</label>

            <input type="text" name="name"
                value = { context.name }
                onChange = { e => context.setName( e.target.value ) }
            />
        </form>
    )
}

export default Form