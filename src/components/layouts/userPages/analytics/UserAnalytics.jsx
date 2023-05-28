import React, { useState, useEffect } from "react"
import axios from "axios"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const UserAnalytics = () => {
	const [analyticsData, setAnalyticsData] = useState([])

	const getUserAnalytics = async () => {
		const userData = JSON.parse(sessionStorage.getItem("userData"))
		const access_token = `Bearer ${userData.wpm_access_token}`
		const config = {
			headers: { Authorization: access_token },
		}
		try {
			let res = await axios.get(`${API_BASE_URL}/users/analytics`, config)
      debugger
			setAnalyticsData(res.data)
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getUserAnalytics()
	}, [])

	return (
		<div>
			<h1>
				User Analytics
				<i className="bi bi-cone-striped"></i>
			</h1>
			<p>Under Construction</p>
		</div>
	)
}

export default UserAnalytics
