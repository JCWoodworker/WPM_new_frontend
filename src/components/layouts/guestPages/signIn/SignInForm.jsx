import React, { useState, useContext } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { loggedInContext } from "../../../../App.jsx"
import axios from "axios"

const SignInForm = () => {
	const [loggedInState, setLoggedInState] = useContext(loggedInContext)
	const [userPayload, setUserPayload] = useState({
		username: "",
		password: "",
	})
	const [formMessage, setFormMessage] = useState("")
	const [jwt, setJwt] = useState("")

	const handleChange = (e) => {
		setUserPayload({
			...userPayload,
			[e.target.name]: e.target.value,
		})
	}

	const clearForm = () => {
		setUserPayload({
			username: "",
			password: "",
		})
	}

	const submitForm = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post(
				"http://localhost:3000/users/auth/login",
				userPayload
			)
			if (response.status === 201) {
				const sessionInfo = {
					wpm_access_token: response.data.access_token,
					wpm_user: response.data.user,
				}
				sessionStorage.setItem("userData", JSON.stringify(sessionInfo))
				setLoggedInState({
					...loggedInState,
					loggedIn: true,
					userData: response.data.user,
				})
				clearForm()
			}
		} catch (error) {
			if (error.response.status === 401) {
				setFormMessage("Incorrect username/password combination")
			}
			console.log(error)
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
						<label>User Name</label>
					</Col>
					<Col>
						<input
							onChange={handleChange}
							name="username"
							type="text"
							placeholder="Enter your username"
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
							placeholder="Enter your password"
							vaue={userPayload.password}
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
		</Container>
	)
}

export default SignInForm
