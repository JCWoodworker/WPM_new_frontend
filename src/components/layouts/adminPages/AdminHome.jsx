import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const HomePage = () => {

	return (
		<Container className="main_container">
			<Row>
				<Col className="top-col">
					<span></span>
				</Col>
			</Row>
			<Row>
				<Col className="header-col" xs={12}>
          <h1>Pricing</h1>
				</Col>
				<Col className="header-col" xs={12}>
          <h1>Messaging</h1>
				</Col>
				<Col className="header-col" xs={12}>
          <h1>Analytics</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
