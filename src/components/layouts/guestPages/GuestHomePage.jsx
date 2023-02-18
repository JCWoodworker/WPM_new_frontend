import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

import FadeInSection from "../../services/FadeInSection"

import WhatIsThis from "./WhatIsThis"
import SignUpPage from "./signUp/SignUpPage"
import SignInPage from "./signIn/SignInPage"

const GuestHomePage = () => {

	return (
		<Container className="main_container">
			
			<FadeInSection>
				<Row>
					<Col className="header-row" id="whatIsThis" >
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

			<FadeInSection>
				<Row>
					<Col className="header-row" id="signInPage">
						<SignInPage />
					</Col>
				</Row>
			</FadeInSection>

		</Container>
	)
}

export default GuestHomePage
