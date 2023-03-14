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
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
	})
	const [formMessage, setFormMessage] = useState({
		message: "",
		color: "",
	})

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
		setErrors({
			firstName: "",
			lastName: "",
			username: "",
			password: "",
		})
	}

	const validation = () => {
		let firstNameError = ""
		let lastNameError = ""
		let usernameError = ""
		let passwordError = ""

		!userPayload.firstName
			? (firstNameError = "Required")
			: (firstNameError = "")
		!userPayload.lastName
			? (lastNameError = "Required")
			: (lastNameError = "")
		!userPayload.username || userPayload.username.length < 6
			? (usernameError = "Required - Must be at least 6 characters")
			: (usernameError = "")
		!userPayload.password || userPayload.password.length < 8
			? (passwordError = "Required - Must be at least 8 characters")
			: (passwordError = "")
		if (firstNameError || lastNameError || usernameError || passwordError) {
			setErrors({
				firstName: firstNameError,
				lastName: lastNameError,
				username: usernameError,
				password: passwordError,
			})
			return false
		}
		return true
	}

	const submitForm = async (e) => {
		const isValid = validation()
		const { firstName, lastName, username, password, userType } = userPayload
		e.preventDefault()
		if (isValid) {
			const response = await axios.post(
				"http://localhost:3000/users/register",
				userPayload
			)
			if (response.data === "Username already exists") {
				setFormMessage({
					message:
						"Something went wrong.Try using another username or try again later.",
					color: "red",
				})
			} else {
				setFormMessage({
					message: "Success! Please sign in below. ⬇️",
					color: "green",
				})
				clearForm()
			}
		} else {
			setFormMessage({
				message: "Please correct errors and try again",
				color: "red",
			})
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
						<p className="errors">{errors.firstName}</p>
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
						<p className="errors">{errors.lastName}</p>
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
						<p className="errors">{errors.username}</p>
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
						<p className="errors">{errors.password}</p>
					</Col>
				</Row>
				<Row>
					<p style={{ color: formMessage.color, fontWeight: "bold" }}>
						{formMessage.message}
					</p>
					<button type="submit" className="clickable-button">
						Sign Up
					</button>
				</Row>
			</form>

			<Row className="d-flex justify-content-center align-items-center text-center row-bottom-text-container">
				<h5>
					Side note ... You'll be able to adjust specific settings like labor
					rate, retail markup, and even wood waste (which accounts for the
					percentage of wood lost to milling)!
				</h5>
			</Row>
		</Container>
	)
}

export default SignUpForm
