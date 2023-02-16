import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../../../../public/sawdust.jpg"
import "../../../../public/glueup002.jpg"

const WhatIsThis = () => {
	return (
		<>
			<h1>What Is This?</h1>
			<Container>
				<Row className="d-flex justify-content-center align-items-center text-center">
					<Col>
						<h3>
							This is a project management tool for small woodworking
							businesses.
						</h3>
					</Col>
					<Col>
						<img
							className="row-image"
							src="/glueup002.jpg"
							alt="placeholder"
						/>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center">
					<Col>
						<img
							className="row-image"
							src="/glueup001.jpg"
							alt="placeholder"
						/>
					</Col>
					<Col>
						<h3>Use it to calculate costs, estimate retail pricing,
							and even manage customers with a built-in CRM.</h3>
					</Col>
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center whatIsIt-row3">
					<Col>
						<h3>It's free to use, give it a try!</h3>
						<h5>⬇️ Use the sign up form below ⬇️</h5>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default WhatIsThis
