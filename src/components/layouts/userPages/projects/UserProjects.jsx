import React, { useState, useEffect } from "react"
import axios from "axios"

import NewProjectForm from "./NewProjectForm"
import PlusMinusIcon from "../../../icons/PlusMinusIcon"
import ProjectTile from "./ProjectTile"

const UserProjects = () => {
	// const [toggleProjectForm, setToggleProjectForm] = useState(false)
	const [projects, setProjects] = useState([])
	const [formState, setFormState] = useState(false)
	const [iconState, setIconState] = useState(true)

	const getProjectData = async () => {
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
		getProjectData()
	}, [])

	let projectList = null
	let projectFormArea = null

	if (formState) {
		projectFormArea = (
			<NewProjectForm
				projects={projects}
				setProjects={setProjects}
				formState={formState}
				setFormState={setFormState}
				iconState={iconState}
				setIconState={setIconState}
			/>
		)
	} else {
		projectFormArea = null
		projectList = projects.map((project) => {
			return <ProjectTile project={project} />
		})
	}
	return (
		<>
			<h1>
				Projects
				<PlusMinusIcon
					iconState={iconState}
					setIconState={setIconState}
					formState={formState}
					setFormState={setFormState}
				/>
			</h1>
			{projectFormArea}
			<div className="project-tile-container">{projectList}</div>
		</>
	)
}

export default UserProjects
