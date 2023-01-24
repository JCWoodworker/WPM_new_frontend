import React, { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import { boardfootCalculator } from "../../services/boardfootCalculator"

const BoardFootCalc = () => {
	const [calculations, setCalculations] = useState({
		thickness: 0,
		width: 0,
		length: 0,
		price: 0,
		boardFeet: 0,
		totalPrice: 0,
	})

	const setBoardFeet = () => {
		let totalBoardFeet = boardfootCalculator(
			calculations.length,
			calculations.width,
			calculations.thickness,
			1
		)
		let totalPrice = (totalBoardFeet * calculations.price).toFixed(2)
		setCalculations({
			...calculations,
			boardFeet: totalBoardFeet,
			totalPrice: totalPrice,
		})
	}

	const calculateBoardfeet = (e) => {
		setCalculations({
			...calculations,
			[e.target.id]: e.target.value,
		})
	}

	useEffect(() => {
		setBoardFeet()
	}, [
		calculations.thickness,
		calculations.width,
		calculations.length,
		calculations.price,
	])

	return (
		<div className="form-container">
			<Form ControlId="BFC" className="boardfoot-form">
				<Form.Group className="form-group">
					<Form.Label className="form-label">Thickness</Form.Label>
					<Form.Control
						className="form-control"
						type="number"
						min={0}
						onChange={calculateBoardfeet}
						id="thickness"
					/>
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Width</Form.Label>
					<Form.Control
						type="number"
						min={0}
						onChange={calculateBoardfeet}
						id="width"
					/>
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Length</Form.Label>
					<Form.Control
						type="number"
						min={0}
						onChange={calculateBoardfeet}
						id="length"
					/>
				</Form.Group>
				<Form.Group className="form-group">
					<Form.Label>Price per bdft</Form.Label>
					<Form.Control
						type="number"
						step="0.01"
						min={0}
						onChange={calculateBoardfeet}
						placeholder="0.00"
						id="price"
					/>
				</Form.Group>
			</Form>
			<h2>Board feet: {calculations.boardFeet}</h2>
			<h2>Cost: ${calculations.totalPrice}</h2>
		</div>
	)
}

export default BoardFootCalc
