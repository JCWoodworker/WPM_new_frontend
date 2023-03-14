import React, { useState } from "react"

const PlusIcon = (props) => {
	const [iconState, setIconState] = useState(true)
	const handleIconClick = () => {
		setIconState(!iconState)
		props.setFormState(!props.formState)
	}
	let iconClass = ""
	iconState? iconClass = "bi bi-plus-square green-icon" : iconClass = "bi bi-dash-square red-icon"

	return (
		<a href={props.link} target="_blank">
			<i className={iconClass} onClick={handleIconClick}/>
		</a>
	)
}

export default PlusIcon