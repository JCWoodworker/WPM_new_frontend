import React, { useState, useEffect, useMemo } from "react"
import axios from "axios"

import NewProjectForm from "./NewProjectForm"
import PlusMinusIcon from "../../../icons/PlusMinusIcon"
import ProjectTile from "./ProjectTile"
import ProjectShow from "./ProjectShow"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const UserProjectsIndex = () => {
	const [projects, setProjects] = useState([])
	const [formState, setFormState] = useState(false)
	const [iconState, setIconState] = useState(true)
	const [projectListState, setProjectListState] = useState(true)
	const [projectShowState, setProjectShowState] = useState(false)
	const [activeProject, setActiveProject] = useState(null)
	debugger
	const getProjectData = async () => {
		const userData = JSON.parse(sessionStorage.getItem("userData"))
		const access_token = `Bearer ${userData.wpm_access_token}`
		const config = {
			headers: { Authorization: access_token },
		}
		try {
			const response = await axios.get(
				`${API_BASE_URL}/projects/`,
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

	let projectContent = null

	if (projectShowState) {
		projectContent = (
			<ProjectShow
				projectListState={projectListState}
				setProjectListState={setProjectListState}
				projectShowState={projectShowState}
				setProjectShowState={setProjectShowState}
				activeProject={activeProject}
				key={activeProject.projectId}
			/>
		)
	} else {
		projectContent = (
			<>
				<h1>
					Projects
					<PlusMinusIcon
						iconState={iconState}
						setIconState={setIconState}
						formState={formState}
						setFormState={setFormState}
						projectListState={projectListState}
						setProjectListState={setProjectListState}
					/>
				</h1>
				{formState ? (
					<NewProjectForm
						projects={projects}
						setProjects={setProjects}
						formState={formState}
						setFormState={setFormState}
						iconState={iconState}
						setIconState={setIconState}
						projectListState={projectListState}
						setProjectListState={setProjectListState}
					/>
				) : null}
				<div className="project-tile-container">
					{projectListState
						? projects.map((project) => {
								return (
									<ProjectTile
										project={project}
										projectListState={projectListState}
										setProjectListState={setProjectListState}
										projectShowState={projectShowState}
										setProjectShowState={setProjectShowState}
										activeProject={activeProject}
										setActiveProject={setActiveProject}
										key={project.projectId}
									/>
								)
						  })
						: null}
				</div>
			</>
		)
	}

	return <>{projectContent}</>
}

export default UserProjectsIndex
