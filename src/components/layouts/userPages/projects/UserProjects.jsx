import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import NewProjectForm from "./NewProjectForm"
import axios from "axios"

const UserProjects = () => {
	// const [toggleProjectForm, setToggleProjectForm] = useState(false)
	const [projects, setProjects] = useState([])

	const getAllData = async () => {
		const userData = JSON.parse(sessionStorage.getItem("userData"))
		const userId = userData.wpm_user.userId
		const access_token = `Bearer ${userData.wpm_access_token}`
		const config = {
			headers: { Authorization: access_token },
		}
		try {
			debugger
			const response = await axios.get(
				`http://localhost:3000/projects/`,
				config
			)
			debugger
			setProjects(response.data)
		} catch (error) {
			debugger
			console.log(`Failure ${error}`)
		}
	}

	useEffect(() => {
		getAllData()
	}, [])

	let projectList = projects.map((project) => {
		debugger
		return (
			<div key={project.name}>
				<h3>{project.name}</h3>
				<p>{project.description}</p>
			</div>
		)
	})

	return (
		<>
			<h1>Projects</h1>
			<NewProjectForm projects={projects} setProjects={setProjects} />
			{projectList}
		</>
	)
}

export default UserProjects
