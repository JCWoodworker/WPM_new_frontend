import React, { useState, useEffect } from "react"

import BoardFootForm from "./BoardFootForm"

const BoardFootIndex = () => {
	const [boardFootFormValues, setBoardFootFormValues] = useState({
		length: null,
		width: null,
		thickness: null,
		price: null,
	})
	const [boardFootResults, setBoardFootResults] = useState({
		boardFeet: null,
		cost: null,
	})

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
				<h1>
					BF Calc<i className="bi bi-cone-striped"></i>
				</h1>
				<p>Under Construction</p>
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
				</div>
			</div>
			<div className="bfc-tally-container">
				<p>Tallys</p>
			</div>
		</div>
	)
}

export default BoardFootIndex
