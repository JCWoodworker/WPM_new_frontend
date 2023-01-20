import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const HomePage = () => {

	return (
		<Container className="main_container">
			<Row>
				<Col className="top-col">
					<span>hello</span>
				</Col>
			</Row>
			<Row>
				<Col className="header-col" xs={12}>
          <h1>Register</h1>
				</Col>
				<Col className="header-col" xs={12}>
          <h1>Sign In</h1>
				</Col>
				<Col className="header-col" xs={12}>
          <h1>Admin Login</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-col" xs={12}>
          <h1>About Us</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
