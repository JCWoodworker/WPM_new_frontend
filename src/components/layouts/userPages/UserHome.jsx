import React, { useState, useEffect, useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { loggedInContext } from "../../../App.jsx"

import FadeInSection from "../../services/FadeInSection.jsx"

const UserHome = () => {
	const [loggedInState, setLoggedInState] = useContext(loggedInContext)

	return (
		<Container className="main_container">
			<FadeInSection>
				<Row>
					<Col className="top-col">
						<span></span>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="projects">
						<h1>Projects</h1>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="customers">
						<h1>Customers</h1>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="analytics">
						<h1>Analytics</h1>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="calculator">
						<h1>BF Calc</h1>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="settings">
						<h1>Settings</h1>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="priceList">
						<h1>Price List</h1>
					</Col>
				</Row>
			</FadeInSection>
		</Container>
	)
}

export default UserHome
