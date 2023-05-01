import React, { useState, useContext } from "react"
import { loggedInContext } from "../../../../App.jsx"
import axios from "axios"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const NewProjectForm = ({
	projects,
	setProjects,
	formState,
	setFormState,
	iconState,
	setIconState,
	projectListState,
	setProjectListState,
}) => {
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
		const access_token = `Bearer ${userData.wpm_access_token}`
		const config = {
			headers: { Authorization: access_token },
		}
		try {
			const response = await axios.post(
				`${API_BASE_URL}/projects/newProject`,
				projectPayload,
				config
			)
			setProjects([...projects, response.data])
			setFormState(!formState)
			setIconState(!iconState)
			setProjectListState(!projectListState)
			console.log("success!!")
		} catch (error) {
			console.log(`Failure ${error}`)
		}
	}

	return (
		<div className="regular-form">
			<h5>Start A New Project:</h5>
			<form onSubmit={handleSubmit}>
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
				<select
						name="stage"
						onChange={handleChange}
            defaultValue={'DEFAULT'}
					>
						<option value="DEFAULT" hidden disabled>
							Stage
						</option>
						<option value="Design">Design</option>
						<option value="Cutlist">Cutlist</option>
						<option value="Wood Selection">Wood Selection</option>
						<option value="Milling">Milling</option>
						<option value="Assembly & Glue">Assembly & Glue</option>
						<option value="Final Dimensioning">Final Dimensioning</option>
						<option value="Sanding & Edging">Sanding & Edging</option>
						<option value="Finish">Finish</option>
						<option value="Delivery">Delivery</option>
						<option value="Delivered">Delivered</option>
						<option value="Issues">Issues</option>
					</select>
				<button type="submit" className="clickable-button">
					Submit
				</button>
			</form>
		</div>
	)
}

export default NewProjectForm
