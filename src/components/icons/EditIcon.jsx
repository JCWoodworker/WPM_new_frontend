import React, { useState } from "react"

const EditIcon = ({ edit }) => {
  const handleIconClick = () => {
    edit()
  }

	return <i className="bi bi-pencil edit-icon" onClick={handleIconClick}/>
}

export default EditIcon