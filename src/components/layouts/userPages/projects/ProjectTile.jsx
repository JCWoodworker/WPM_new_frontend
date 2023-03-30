import React from "react"

const ProjectTile = ({
	project,
	projectListState,
	setProjectListState,
	projectShowState,
	setProjectShowState,
  activeProject,
  setActiveProject
}) => {
	const handleTileClick = () => {
		setProjectListState(false)
    setProjectShowState(true)
    setActiveProject(project)
	}

	return (
		<div className="project-tile" onClick={handleTileClick}>
			<h5>{project.name}</h5>
			<p>{project.description}</p>
		</div>
	)
}

export default ProjectTile
