import React from "react"

import BackIcon from "../../../icons/BackIcon"
import EditIcon from "../../../icons/EditIcon"

const ProjectShow = ({
	projectListState,
	setProjectListState,
	projectShowState,
	setProjectShowState,
	activeProject,
}) => {
	const goBack = () => {
		setProjectListState(true)
		setProjectShowState(false)
	}
	const edit = () => {
		alert("Edit Project")
	}

	return (
		<div className='project-show-container'>
			<div className="project-icons">
				<BackIcon goBack={goBack} />
				<EditIcon edit={edit}/>
			</div>
			<h3>{activeProject.name}</h3>
			<p>{activeProject.description}</p>
			<ul className="details-list">
				<li>Stage: {activeProject.stage}</li>
				<li>Quantity: {activeProject.quantity}</li>
				<li>Est Labor: {activeProject.laborHours} hrs</li>
				<li>
					{activeProject.customerId == undefined
						? "No Customer Attached To This Project"
						: `Customer ${activeProject.customerID}`}
				</li>
			</ul>
		</div>
	)
}

export default ProjectShow
