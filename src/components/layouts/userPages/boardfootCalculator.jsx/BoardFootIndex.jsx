import React, { useState, useEffect } from "react"
import { v4 as uuid } from "uuid"

import BoardFootForm from "./BoardFootForm"
import Tallies from "./Tallies"

const BoardFootIndex = () => {
	const [boardFootFormValues, setBoardFootFormValues] = useState({
		length: null,
		width: null,
		thickness: null,
		price: null,
		woodType: "",
	})
	const [tallies, setTallies] = useState([])
	const [boardFootResults, setBoardFootResults] = useState({
		boardFeet: "",
		cost: "",
	})

	const [tallyAlert, setTallyAlert] = useState(false)

	const handleTallyAdd = () => {
		if (
			!boardFootResults.boardFeet ||
			!boardFootResults.cost ||
			parseFloat(boardFootResults.boardFeet) <= 0 ||
			parseFloat(boardFootResults.cost) <= 0 ||
			(boardFootFormValues.woodType.trim() === "")
		) {
			return alert("Please enter values for all fields")
		}
		return setTallies([
			...tallies,
			{
				id: uuid(),
				woodType: boardFootFormValues.woodType,
				boardFeet: boardFootResults.boardFeet,
				cost: boardFootResults.cost,
			},
		])
	}

	const handleTallyReset = () => {
		setTallies([])
	}

	const handleCheckboxChange = () => {
		setTallyAlert(!tallyAlert)
	}

	useEffect(() => {
		const result = (
			(boardFootFormValues.length *
				boardFootFormValues.width *
				boardFootFormValues.thickness) /
			144
		).toFixed(2)
		const cost = (result * boardFootFormValues.price).toFixed(2)
		setBoardFootResults({ boardFeet: result, cost: cost })
	}, [boardFootFormValues])

	return (
		<div>
			<div>
				<h1>Board Foot Calculator</h1>
			</div>
			<div className="bfc-form-and-results-container">
				<div className="bfc-form-container">
					<BoardFootForm
						boardFootFormValues={boardFootFormValues}
						setBoardFootFormValues={setBoardFootFormValues}
					/>
				</div>
				<div className="bfc-results-container">
					<h3>Results</h3>
					<p>Board Feet: {boardFootResults.boardFeet}</p>
					<p>Cost: ${boardFootResults.cost}</p>
					<div>
						<button onClick={handleTallyAdd}>Add Tally</button>
						<button onClick={handleTallyReset}>Reset Tallies</button>
					</div>
					<label className="tally-alert-checkbox">
						{`Check this box to remove the \nalert box when deleting a tally -->  `}
						<input
							type="checkbox"
							checked={tallyAlert}
							onChange={handleCheckboxChange}
						></input>
					</label>
				</div>
			</div>
			<Tallies tallies={tallies} setTallies={setTallies} tallyAlert={tallyAlert} />
		</div>
	)
}

export default BoardFootIndex
