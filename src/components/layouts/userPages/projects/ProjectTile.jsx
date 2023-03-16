import React from "react"

const ProjectTile = ({ project }) => {
  return (
    <div key={project.projectId} className="project-tile">
      <h5>{project.name}</h5>
    </div>
  )
}

export default ProjectTile