import { Container, Nav, Navbar } from "react-bootstrap"

import TopLinks from "./TopLinks.jsx"
import "../../../../public/Logo.png"

const TopNavigationBar = ({ loggedInState }) => {

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="navigationBar"
			fixed="top"
			variant="dark"
		>
			<Container>
				<Navbar.Brand href="https://www.rilocalwoodworks.com" target="_blank	">
					<img className="logo" src="/Logo.png" alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle className="navToggle" aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<TopLinks loggedInState={loggedInState}/>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default TopNavigationBar
