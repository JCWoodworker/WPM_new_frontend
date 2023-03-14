import React, { useState, useEffect } from "react"
import axios from "axios"

import NewProjectForm from "./NewProjectForm"
import PlusIcon from "../../../icons/PlusIcon"

const UserProjects = () => {
	// const [toggleProjectForm, setToggleProjectForm] = useState(false)
	const [projects, setProjects] = useState([])
	const [formState, setFormState] = useState(false)

	const getAllData = async () => {
		const userData = JSON.parse(sessionStorage.getItem("userData"))
		const access_token = `Bearer ${userData.wpm_access_token}`
		const config = {
			headers: { Authorization: access_token },
		}
		try {
			const response = await axios.get(
				`http://localhost:3000/projects/`,
				config
			)
			setProjects(response.data)
		} catch (error) {
			console.log(`Failure ${error}`)
		}
	}

	useEffect(() => {
		getAllData()
	}, [])

	let projectList = projects.map((project) => {
		return (
			<div key={project.name}>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
			</div>
		)
	})

	let projectFormArea = null
	formState
		? (projectFormArea = (
				<NewProjectForm projects={projects} setProjects={setProjects} />
		))
		: (projectFormArea = null)

	return (
		<>
			<h1>
				Projects
				<PlusIcon formState={formState} setFormState={setFormState} />
			</h1>
			{projectFormArea}
			{projectList}
		</>
	)
}

export default UserProjects
