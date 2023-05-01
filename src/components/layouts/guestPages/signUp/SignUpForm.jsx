import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"

const SignUpForm = () => {
	const [userPayload, setUserPayload] = useState({
		firstName: "",
		lastName: "",
		email: "",
		cellPhone: "",
		username: "",
		password: "",
		userType: "user",
	})
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		cellPhone: "",
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
			email: "",
			cellPhone: "",
			username: "",
			password: "",
			userType: "user",
		})
		setErrors({
			firstName: "",
			lastName: "",
			email: "",
			cellPhone: "",
			username: "",
			password: "",
		})
	}

	const validation = () => {
		let firstNameError = ""
		let lastNameError = ""
		let emailError = ""
		let cellPhoneError = ""
		let usernameError = ""
		let passwordError = ""
		const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
		const cellPhoneRegex = /^\d{10}$/g

		!userPayload.firstName
			? (firstNameError = "First name is required")
			: (firstNameError = "")
		!userPayload.lastName ? (lastNameError = "Lase name is required") : (lastNameError = "")
		!userPayload.email || !emailRegex.test(userPayload.email)
			? (emailError = "Must be a valid email address")
			: (emailError = "")
		!userPayload.cellPhone || !cellPhoneRegex.test(userPayload.cellPhone)
			? (cellPhoneError = "Must be 10 digits, no spaces or dashes")
			: (cellPhoneError = "")
		!userPayload.username || userPayload.username.length < 6
			? (usernameError = "Must be at least 6 characters")
			: (usernameError = "")
		!userPayload.password || userPayload.password.length < 8
			? (passwordError = "Must be at least 8 characters")
			: (passwordError = "")
		if (firstNameError || lastNameError || usernameError || passwordError) {
			setErrors({
				firstName: firstNameError,
				lastName: lastNameError,
				email: emailError,
				cellPhone: cellPhoneError,
				username: usernameError,
				password: passwordError,
			})
			return false
		}
		return true
	}

	const submitForm = async (e) => {
		const isValid = validation()
		const {
			firstName,
			lastName,
			email,
			cellPhone,
			username,
			password,
			userType,
		} = userPayload
		e.preventDefault()
		if (isValid) {
			const response = await axios.post(
				`https://wpm-new-backend-staging.herokuapp.com/users/register`,
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
				message: "Please fill out all required fields",
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
					</Col>
					<p className="errors">{errors.firstName}</p>
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
					<p className="errors">{errors.lastName}</p>
				</Row>
				<Row>
					<Col>
						<label>Email</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="email"
							type="text"
							placeholder="Enter your email"
							value={userPayload.email}
						/>
					</Col>
					<p className="errors">{errors.email}</p>
				</Row>
				<Row>
					<Col>
						<label>Cell Phone</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="cellPhone"
							type="text"
							placeholder="Enter your cell phone"
							value={userPayload.cellPhone}
							maxLength="10"
						/>
					</Col>
					<p className="errors">{errors.cellPhone}</p>
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
					<p className="errors">{errors.username}</p>
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
					<p className="errors">{errors.password}</p>
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
