import { useState } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

import TopLinks from "./TopLinks.jsx"

const TopNavigationBar = ({ loggedIn }) => {

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="navigationBar"
			sticky="top"
			variant="dark"
		>
			<Container>
				<Navbar.Brand href="#home">RILW's Wood App</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<TopLinks loggedIn={loggedIn}/>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default TopNavigationBar
