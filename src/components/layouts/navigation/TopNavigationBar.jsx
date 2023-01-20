import { Container, Nav, Navbar } from "react-bootstrap"

const TopNavigationBar = () => {
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
					<Nav>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#customers">Customers</Nav.Link>
						<Nav.Link href="#data">Data</Nav.Link>
						<Nav.Link href="#settings">Settings</Nav.Link>
						<Nav.Link href="#calc">BF Calc</Nav.Link>
						<Nav.Link href="#priceList">Price List</Nav.Link>
						<Nav.Link eventKey={1} href="#signIn">
							Sign Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default TopNavigationBar
