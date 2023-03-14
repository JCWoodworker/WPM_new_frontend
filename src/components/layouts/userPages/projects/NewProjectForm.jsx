import React, { useState, useContext } from "react"
import { loggedInContext } from "../../../../App.jsx"
import axios from "axios"

const NewProjectForm = (props) => {
	const [loggedInState, setLoggedInState] = useContext(loggedInContext)
	const [projectPayload, setProjectPayload] = useState({
		name: "",
		description: "",
		customerId: null,
		userId: loggedInState.userData.userId,
		laborHours: "",
		quantity: "",
		stage: "",
	})

	const handleChange = (e) => {
		setProjectPayload({
			...projectPayload,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const userData = JSON.parse(sessionStorage.getItem("userData"))
		const access_token = (`Bearer ${userData.wpm_access_token}`)
		const config = {
			headers: { Authorization: access_token },
		}
    try {
		const response = await axios.post(
			"http://localhost:3000/projects/newProject",
			projectPayload,
			config
		)
    props.setProjects([...props.projects, response.data])
    console.log("success!!")
    } catch (error) {
      console.log(`Failure ${error}`)
    }
	}

	return (
		<div className="regular-form">
			<h3>Start A New Project:</h3>
			<form onSubmit={handleSubmit} >
				<input
					type="text"
					onChange={handleChange}
					name="name"
					placeholder="name"
				></input>
				<input
					type="text"
					onChange={handleChange}
					name="description"
					placeholder="description"
				></input>
				<input
					type="number"
					onChange={handleChange}
					name="customerId"
					placeholder="customerId (optional)"
				></input>
				<input
					type="number"
					onChange={handleChange}
					name="laborHours"
					placeholder="est labor hours"
				></input>
				<input
					type="number"
					onChange={handleChange}
					name="quantity"
					placeholder="quantity"
				></input>
				<input
					type="text"
					onChange={handleChange}
					name="stage"
					placeholder="stage"
				></input>
				<button type="submit" className="clickable-button">Submit</button>
			</form>
		</div>
	)
}

export default NewProjectForm
