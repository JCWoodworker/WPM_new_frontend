import React from "react"
import { Nav } from "react-bootstrap"

const TopLinks = ({ loggedIn }) => {

	const signUpInOutClick = (event) => {
		event.preventDefault()
		alert(`This functionality has not been implemented yet.`)
	}

	const userLinks = (
		<Nav>
			<Nav.Link id="navLink" href="#projects">
				Projects
			</Nav.Link>
			<Nav.Link id="navLink" href="#customers">
				Customers
			</Nav.Link>
			<Nav.Link id="navLink" href="#analytics">
				Analytics
			</Nav.Link>
			<Nav.Link id="navLink" href="#calculator">
				BF Calc
			</Nav.Link>
			<Nav.Link id="navLink" href="#settings">
				Settings
			</Nav.Link>
			<Nav.Link id="navLink" href="#priceList">
				Price List
			</Nav.Link>
			<Nav.Link id="navLink" eventKey={2} onClick={signUpInOutClick}>
				Sign Out
			</Nav.Link>
		</Nav>
	)

	const adminLinks = (
		<Nav>
			<Nav.Link id="navLink" href="#pricing">
				Pricing
			</Nav.Link>
			<Nav.Link id="navLink" href="#messaging">
				Messaging
			</Nav.Link>
			<Nav.Link id="navLink" href="#analytics">
				Analytics
			</Nav.Link>
			<Nav.Link id="navLink" eventKey={2} onClick={signUpInOutClick}>
				Sign Out
			</Nav.Link>
		</Nav>
	)

	const guestLinks = (
		<Nav>
			<Nav.Link id="navLink" href="#whatIsThis">
				What Is This?
			</Nav.Link>
			<Nav.Link id="navLink" href="#signUpPage">
				Sign Up
			</Nav.Link>
			<Nav.Link id="navLink" eventKey={1} onClick={signUpInOutClick}>
				Sign In
			</Nav.Link>
		</Nav>
	)

	const showLinks = () => {
		if (loggedIn.admin) {
			return adminLinks
		} else if (loggedIn.user) {
			return userLinks
		} else {
			return guestLinks
		}
	}

	return <>{showLinks()}</>
}

export default TopLinks
