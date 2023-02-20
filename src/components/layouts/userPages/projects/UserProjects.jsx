import React, { useState, useEffect, useMemo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import NewProjectForm from "./NewProjectForm"
import axios from "axios"

const UserProjects = () => {
	const [projects, setProjects] = useState([])
	const [query, setQuery] = useState("")

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

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			return project.name.toLowerCase().includes(query.toLowerCase())
		})
	}, [projects, query])

	return (
		<>
			<div className="headerSearch">
				<h1>Projects</h1>
				<input
					className="searchBar"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					type="search"
					placeholder="Search..."
				/>
			</div>
			<div>
				<h3>Projects:</h3>
				{filteredProjects.map((project) => (
					<div>{project.name}</div>
				))}
				<h3>Add a new project</h3>
				<NewProjectForm projects={projects} setProjects={setProjects} />
			</div>
		</>
	)
}

export default UserProjects
