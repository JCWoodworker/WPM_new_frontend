import React from "react"

const ProjectTile = ({ project }) => {
  return (
    <div key={project.projectId} className="project-tile">
      <h3>{project.name}</h3>
    </div>
  )
}

export default ProjectTile