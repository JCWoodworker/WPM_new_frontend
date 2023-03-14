import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "/sawdust.jpg"
import "/glueup002.jpg"

const WhatIsThis = () => {
	return (
		<>
			<h1>What Is This?</h1>
			<Container>
				<Row className="d-flex justify-content-center align-items-center text-center">
					<h3>
						This is a project management tool for small woodworking businesses.
					</h3>
					<Image
						fluid
						className="row-image"
						src="/glueup002.jpg"
						alt="placeholder"
					/>
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center">
						<h3>
							Use it to calculate costs, estimate retail pricing, and even
							manage customers with a built-in CRM.
						</h3>
						<Image
							fluid
							className="row-image"
							src="/glueup001.jpg"
							alt="placeholder"
						/>
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center row-bottom-text-container">
						<h3>It's free to use, give it a try!</h3>
						<h5>⬇️ Use the sign up form below ⬇️</h5>
				</Row>
			</Container>
		</>
	)
}

export default WhatIsThis
