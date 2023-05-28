import React, { useContext, useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { loggedInContext } from "../../../App.jsx"

import FadeInSection from "../../services/FadeInSection.jsx"

import UserProjectsIndex from "./projects/UserProjectsIndex.jsx"
import BoardFootIndex from "./boardfootCalculator.jsx/BoardFootIndex.jsx"
import UserAnalytics from "./analytics/UserAnalytics.jsx"

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
						<UserProjectsIndex />
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="customers">
						<h1>
							Customers
							<i className="bi bi-cone-striped"></i>
						</h1>
						<p>Under Construction</p>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="analytics">
						<UserAnalytics />
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="calculator">
						<BoardFootIndex />
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="settings">
						<h1>
							Settings
							<i className="bi bi-cone-striped"></i>
						</h1>
						<p>Under Construction</p>
					</Col>
				</Row>
			</FadeInSection>
			<FadeInSection>
				<Row>
					<Col className="header-row" id="priceList">
						<h1>
							Price List
							<i className="bi bi-cone-striped"></i>
						</h1>
						<p>Under Construction</p>
					</Col>
				</Row>
			</FadeInSection>
		</Container>
	)
}

export default UserHome
