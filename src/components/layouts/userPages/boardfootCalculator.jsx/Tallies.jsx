import React, { useState, useEffect } from "react"

const Tallies = ({ tallies, setTallies, tallyAlert }) => {
	const [tallyTotals, setTallyTotals] = useState({
		totalBoardFeet: 0,
		totalCost: 0,
	})

	const handleDeleteSingleTally = (tallyId) => {
		if (!tallyAlert) {
			const confirmation = confirm("Are you sure you want to delete this tally?")
			if (!confirmation) {
				return
			}
		}
		const newTallies = tallies.filter(tally => tally.id != tallyId)
		setTallies(newTallies)
	}

	const sum = (arr, measurement) => {
		let sum = 0
		for (let i = 0; i < arr.length; i++) {
			sum += parseFloat(arr[i][measurement])
		}
		return sum
	}

	useEffect(() => {
		if (tallies.length === 0) {
			setTallyTotals({ totalBoardFeet: 0, totalCost: 0 })
		}
		if (tallies.length >= 1) {
			const totalBoardFeet = sum(tallies, "boardFeet").toFixed(2)
			const totalCost = sum(tallies, "cost").toFixed(2)
			setTallyTotals({ totalBoardFeet: totalBoardFeet, totalCost: totalCost })
		}
	}, [tallies])

	let talliesList = null
	if (tallies.length > 0) {
		talliesList = tallies.map((tally) => {
			const handleClick = (event) => handleDeleteSingleTally(tally.id)
			return (
				<li key={tally.id} onClick={handleClick}>
					{tally.woodType} - {tally.boardFeet} BF - ${tally.cost}
					<span className="delete-tally">X</span>
				</li>
			)
		})
	}

	return (
		<div className="bfc-tally-container">
			<h3>
				TALLIES:{` `}
				<span>
					{tallies.length > 0
						? `${tallyTotals.totalBoardFeet} board feet - $${tallyTotals.totalCost}`
						: `None yet`}
				</span>
			</h3>
			<ul>{talliesList}</ul>
		</div>
	)
}

export default Tallies