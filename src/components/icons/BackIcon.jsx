import React, { useState } from "react"

const BackIcon = ({ goBack }) => {
  const handleIconClick = () => {
    goBack()
  }

	return <i className="bi bi-arrow-left-square back-icon" onClick={handleIconClick}/>
}

export default BackIcon