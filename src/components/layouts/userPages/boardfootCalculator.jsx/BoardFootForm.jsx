import React, { useState } from "react"

const BoardFootForm = ({ boardFootFormValues, setBoardFootFormValues }) => {
	const handleOnChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setBoardFootFormValues({ ...boardFootFormValues, [name]: value })
	}

	return (
		<div>
			<form className="board-foot-form">
				<h3>Use Inches For All Fields</h3>
				<div className="form-input-container">
					<label htmlFor="boardFootForm__length">Length</label>
					<input
						type="number"
						className="form-control"
						id="boardFootForm_length"
						placeholder="inches"
						name="length"
						value={boardFootFormValues.length}
						onChange={handleOnChange}
					/>
				</div>
				<div className="form-input-container">
					<label htmlFor="boardFootForm__width">Width</label>
					<input
						type="number"
						className="form-control"
						id="boardFootForm_width"
						placeholder="inches"
						name="width"
						value={boardFootFormValues.width}
						onChange={handleOnChange}
					/>
				</div>
				<div className="form-input-container">
					<label htmlFor="boardFootForm_thickness">Thickness</label>
					<input
						type="number"
						className="form-control"
						id="boardFootForm_thickness"
						placeholder="inches"
						name="thickness"
						value={boardFootFormValues.thickness}
						onChange={handleOnChange}
					/>
				</div>
				<div className="form-input-container">
					<label htmlFor="boardFootForm_price">Price</label>
					<input
						type="number"
						className="form-control"
						id="boardFootForm_thickness"
						placeholder="$/BF"
						name="price"
						value={boardFootFormValues.price}
						onChange={handleOnChange}
					/>
				</div>
			</form>
		</div>
	)
}

export default BoardFootForm
