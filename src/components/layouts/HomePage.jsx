import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import TestGet from "../TestGet.jsx"

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
					<TestGet />
				</Col>
				<Col className="header-col clickable-button" xs={12}>
					<h1>Customers</h1>
				</Col>
				<Col className="header-col clickable-button" xs={12}>
					<h1>Analytics</h1>
				</Col>
			</Row>
			<Row>
				<Col className="paragraph-col">
					<p>Paragraph</p>
				</Col>
				<Col className="button-col">
					<button className="clickable-button">Test Button</button>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
