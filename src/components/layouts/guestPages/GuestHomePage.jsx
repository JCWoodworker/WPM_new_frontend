import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import WhatIsThis from "./WhatIsThis"
import SignUpPage from "./signUp/SignUpPage"
import FadeInSection from "../../services/FadeInSection"

const GuestHomePage = () => {
	const [pageViewToggle, setPageViewToggle] = useState(false)
	const togglePageView = () => {
		return null
	}

	return (
		<Container className="main_container">
			
			<FadeInSection>
				<Row>
					<Col className="header-row" id="whatIsThis">
						<WhatIsThis />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="header-row" id="signUpPage">
						<SignUpPage />
					</Col>
				</Row>
			</FadeInSection>

		</Container>
	)
}

export default GuestHomePage
