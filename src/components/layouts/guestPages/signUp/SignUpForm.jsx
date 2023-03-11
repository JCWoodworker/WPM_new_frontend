import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"

const SignUpForm = () => {
	const [userPayload, setUserPayload] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		userType: "user",
	})
	const [formMessage, setFormMessage] = useState("")

	const handleChange = (e) => {
		setUserPayload({
			...userPayload,
			[e.target.name]: e.target.value,
		})
	}

	const clearForm = () => {
		setUserPayload({
			firstName: "",
			lastName: "",
			username: "",
			password: "",
			userType: "user",
		})
	}

	const submitForm = async (e) => {
		const { firstName, lastName, username, password, userType } = userPayload
		e.preventDefault()
		const response = await axios.post(
			"http://localhost:3000/users/register",
			userPayload
		)
		if (response.data === "Username already exists") {
			setFormMessage(
				"Something went wrong. Try using another username or try again later."
			)
		} else {
			setFormMessage("Success! Please sign in below. ⬇️")
			clearForm()
		}
	}

	return (
		<Container>
			<form
				className="form-control regular-form text-center row-bottom-text-container"
				onSubmit={submitForm}
			>
				<Row>
					<Col>
						<label>First Name</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="firstName"
							type="text"
							placeholder="Enter your first name"
							value={userPayload.firstName}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<label>Last Name</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="lastName"
							type="text"
							placeholder="Enter your last name"
							value={userPayload.lastName}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<label>User Name</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="username"
							type="text"
							placeholder="Select a username"
							value={userPayload.username}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<label>Password</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="password"
							type="password"
							placeholder="Password"
							value={userPayload.password}
						/>
					</Col>
				</Row>
				<Row>
					<p style={{ color: "red" }}>{formMessage}</p>
					<button type="submit" className="clickable-button">
						Submit
					</button>
				</Row>
			</form>

			<Row className="d-flex justify-content-center align-items-center text-center row-bottom-text-container">
				<h5>
					Side note ... You'll be able to adjust specific settings like labor
					rate, retail markup, and even wood waste, which accounts for the
					percentage of wood lost to milling!
				</h5>
			</Row>
		</Container>
	)
}

export default SignUpForm
