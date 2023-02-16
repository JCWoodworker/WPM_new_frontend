import React, { useState } from "react"
import axios from "axios"

const SignUpForm = () => {
	const [userPayload, setUserPayload] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		userType: "user",
	})  

	const handleChange = (e) => {
		setUserPayload({
			...userPayload,
			[e.target.name]: e.target.value,
		})
	}

	const submitForm = async (e) => {
		const { firstName, lastName, username, password, userType } = userPayload
		e.preventDefault()
    const response = await axios.post("http://localhost:3000/users/register", userPayload)
    console.log(response.data)
	}

	return (
		<div>
			
			<form className="form-control get-involved-form" onSubmit={submitForm}>
				<label>First Name</label>
				<input
					onChange={handleChange}
					name="firstName"
					type="text"
					placeholder="Enter your first name"
				/>

				<label>Last Name</label>
				<input
					onChange={handleChange}
					name="lastName"
					type="text"
					placeholder="Enter your last name"
				/>

				<label>User Name</label>
				<input
					onChange={handleChange}
					name="username"
					type="text"
					placeholder="Select a username"
				/>

				<label>Password</label>
				<input
					onChange={handleChange}
					name="password"
					type="password"
					placeholder="Password"
				/>

				<label>User Type</label>
				<select 
          onChange={handleChange} 
          name="userType">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

				<button type="submit">Submit</button>

			</form>
		</div>
	)
}

export default SignUpForm
