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
          <h1>Projects</h1>
				</Col>
				<Col className="header-col" xs={12}>
          <h1>Customers</h1>
				</Col>
				<Col className="header-col" xs={12}>
          <h1>Data</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
