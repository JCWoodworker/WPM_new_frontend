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
						min="0.01"
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
						min="0.01"
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
						min="0.01"
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
						min="0.01"
						className="form-control"
						id="boardFootForm_thickness"
						placeholder="$/BF"
						name="price"
						value={boardFootFormValues.price}
						onChange={handleOnChange}
					/>
				</div>
        {/* These options will eventually be mapped from a price-list table on the server */}
				<div className="form-input-container">
					<label htmlFor="woodType">Wood Type</label>
					<select
						name="woodType"
						id="woodType"
						onChange={handleOnChange}
            defaultValue={'DEFAULT'}
					>
						<option value="DEFAULT" hidden disabled>
							Choose...
						</option>
						<option value="Oak">Oak</option>
						<option value="Maple">Maple</option>
						<option value="Walnut">Walnut</option>
						<option value="Cherry">Cherry</option>
						<option value="Mahogany">Mahogany</option>
						<option value="Cedar">Cedar</option>
						<option value="Ash">Ash</option>
						<option value="Poplar">Poplar</option>
						<option value="Willow">Other</option>
					</select>
				</div>
			</form>
		</div>
	)
}

export default BoardFootForm
