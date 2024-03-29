import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "/sawdust.jpg"
import "/glueup002.jpg"

const WhatIsThis = () => {
	return (
		<>
			<h1>What Is This?</h1>
			<Container className="what-is-this">
				<Row className="d-flex justify-content-center align-items-center text-center">
					<h3>
						This is a project management tool <br /> for small woodworking
						businesses.
					</h3>
					{/* <Image
						fluid
						className="row-image"
						src="/glueup002.jpg"
						alt="placeholder"
					/> */}
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center">
					<h3>
						Use it to calculate costs, estimate retail pricing, <br /> and even
						manage customers with a built-in CRM.
					</h3>
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center row-bottom-text-container">
					<h5>It's free to use, give it a try!</h5>
					<h5>⬇️ Use the sign up form below ⬇️</h5>
				</Row>
			</Container>
		</>
	)
}

export default WhatIsThis
