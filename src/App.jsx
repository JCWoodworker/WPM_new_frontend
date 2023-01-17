import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/TopNavigationBar.jsx"

function App() {
	return (
    <>
    <TopNavigationBar />
		<Container className="main_container">
      <Row>
        <Col className="top-col"><span>hello</span></Col>
      </Row>
			<Row>
				<Col className="header-col clickable-button" xs={12}>
					<h1>Projects</h1>
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
    </>
	)
}

export default App
