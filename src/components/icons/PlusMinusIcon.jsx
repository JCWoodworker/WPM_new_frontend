import React, { useState } from "react"

const PlusMinusIcon = ({ iconState, setIconState, formState, setFormState }) => {
	const handleIconClick = () => {
		setIconState(!iconState)
		setFormState(!formState)
	}
	let iconClass = ""
	iconState? iconClass = "bi bi-plus-square green-icon" : iconClass = "bi bi-dash-square red-icon"

	return <i className={iconClass} onClick={handleIconClick}/>
}

export default PlusMinusIcon