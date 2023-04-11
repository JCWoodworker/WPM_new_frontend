import React, { useState, useEffect } from "react"

import BoardFootForm from "./BoardFootForm"
import Tallies from "./Tallies"

const BoardFootIndex = () => {
	const [boardFootFormValues, setBoardFootFormValues] = useState({
		length: "",
		width: "",
		thickness: "",
		price: "",
		woodType: "",
	})
	const [tallies, setTallies] = useState([])
	const [boardFootResults, setBoardFootResults] = useState({
		boardFeet: "",
		cost: "",
	})

	const handleTallyAdd = () => {
		if (
			!boardFootResults.boardFeet ||
			!boardFootResults.cost ||
			parseInt(boardFootResults.boardFeet) <= 0 ||
			parseInt(boardFootResults.cost) <= 0
		) {
			return alert("Please enter values for all fields")
		}
		return setTallies([
			...tallies,
			{
				woodType: boardFootFormValues.woodType,
				boardFeet: boardFootResults.boardFeet,
				cost: boardFootResults.cost,
			},
		])
	}

	const handleTallyReset = () => {
		setTallies([])
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
				</div>
			</div>
			<Tallies tallies={tallies} setTallies={setTallies} />
		</div>
	)
}

export default BoardFootIndex