import React, { useContext, useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { loggedInContext } from "../../../App.jsx"

import FadeInSection from "../../services/FadeInSection.jsx"

import UserProjects from "./projects/UserProjects.jsx"

const UserHome = () => {
	const [loggedInState, setLoggedInState] = useContext(loggedInContext)
	const userHomeRef = useRef(null)

	useEffect(() => {
		userHomeRef.current.scrollIntoView({ behavior: "smooth" })
	}, [])

	return (
		<Container className="main_container" id="user-home" ref={userHomeRef}>

			<FadeInSection>
				<Row>
					<Col className="header-row" id="projects">
						<UserProjects />
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
