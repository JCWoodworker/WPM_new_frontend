import React from "react"
import { Nav } from "react-bootstrap"

const TopLinks = ({ loggedIn }) => {
	const userLinks = (
		<Nav>
			<Nav.Link href="#projects">Projects</Nav.Link>
			<Nav.Link href="#customers">Customers</Nav.Link>
			<Nav.Link href="#analytics">Analytics</Nav.Link>
			<Nav.Link href="#calculator">BF Calc</Nav.Link>
			<Nav.Link href="#settings">Settings</Nav.Link>
			<Nav.Link href="#priceList">Price List</Nav.Link>
			<Nav.Link eventKey={1} href="#signIn">
				Sign Out
			</Nav.Link>
		</Nav>
	)

	const adminLinks = (
		<Nav>
			<Nav.Link href="#pricing">Pricing</Nav.Link>
			<Nav.Link href="#messaging">Messaging</Nav.Link>
			<Nav.Link href="#analytics">Analytics</Nav.Link>
		</Nav>
	)

	const guestLinks = (
		<Nav>
			<Nav.Link href="#signIn">Sign In</Nav.Link>
			<Nav.Link href="#register">Register</Nav.Link>
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
