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
			<h5><span className="highlight">{project.name.toUpperCase()}</span> - {project.description}</h5>
		</div>
	)
}

export default ProjectTile
