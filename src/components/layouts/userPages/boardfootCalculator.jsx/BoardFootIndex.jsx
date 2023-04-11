import React, { useState, useEffect } from "react"

import BoardFootForm from "./BoardFootForm"

const BoardFootIndex = () => {
	const [boardFootFormValues, setBoardFootFormValues] = useState({
		length: "",
		width: "",
		thickness: "",
		price: "",
		woodType: "",
	})
	const [boardFootResults, setBoardFootResults] = useState({
		boardFeet: "",
		cost: "",
	})
	const [tallys, setTallys] = useState([])
	const [tallyTotals, setTallyTotals] = useState({
		totalBoardFeet: 0,
		totalCost: 0,
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
		return setTallys([
			...tallys,
			{
				woodType: boardFootFormValues.woodType,
				boardFeet: boardFootResults.boardFeet,
				cost: boardFootResults.cost,
			},
		])
	}

	const handleTallyReset = () => {
		setTallys([])
	}

	function handleDeleteSingleTally(event) {
		event.preventDefault()
		const confirmation = confirm("Are you sure you want to delete this tally?")
		if (!confirmation) {
			return
		}
		const clickedIndex = event.currentTarget.key;
		const newTallys = [...tallys]
		newTallys.splice(clickedIndex, 1)
		setTallys(newTallys)

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

	const sumBoardFeet = (arr) => {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += parseFloat(arr[i].boardFeet)
		}
		return sum
	}
	const sumCost = (arr) => {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += parseFloat(arr[i].cost)
		}
		return sum
	}

	useEffect(() => {
		if (tallys.length === 0) {
			setTallyTotals({ totalBoardFeet: 0, totalCost: 0 })
		}
		if (tallys.length >= 1) {
			const totalBoardFeet = sumBoardFeet(tallys).toFixed(2)
			const totalCost = sumCost(tallys).toFixed(2)
			setTallyTotals({ totalBoardFeet: totalBoardFeet, totalCost: totalCost })
		}
	}, [tallys])

	let tallysList = null
	if (tallys.length > 0) {
		tallysList = tallys.map((tally, index) => {
			return (
				<li key={index} onClick={handleDeleteSingleTally}>
					{tally.woodType} - ${tally.cost} - {tally.boardFeet} BF
					<span className="delete-tally">X</span>
				</li>
			)
		})
	}

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
			<div className="bfc-tally-container">
				<h3>
					TALLYS:{" "}
					<span>
						{tallys.length > 0 ? `${tallyTotals.totalBoardFeet} board feet - $${tallyTotals.totalCost}` : `None yet`}
					</span>
				</h3>
				<ul>{tallysList}</ul>
			</div>
		</div>
	)
}

export default BoardFootIndex
