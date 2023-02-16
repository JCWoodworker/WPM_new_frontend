import React, { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

import BoardFootCalc from "./BoardFootCalc"
import Registration from "../../Registration"

const HomePage = () => {

	return (
		<Container className="main_container">
			<Row>
				<Col className="top-col">
					<span></span>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="projects">
					<Registration />
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="customers">
					<h1>Customers</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="analytics">
					<h1>Analytics</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="calculator">
					<BoardFootCalc />
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="settings">
					<h1>Settings</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="priceList">
					<h1>Price List</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
