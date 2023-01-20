import React, { useState } from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import HomePage from "./components/layouts/HomePage.jsx"
import UserHome from "./components/layouts/userPages/UserHome.jsx"
import AdminHome from "./components/layouts/adminPages/AdminHome.jsx"

function App() {
	const [loggedIn, setLoggedIn] = useState({
		guest: false,
		admin: false,
		user: true,
	})

	if (loggedIn.user) {
		return (
			<>
				<TopNavigationBar loggedIn={loggedIn} />
				<UserHome />
			</>
		)
	} else if (loggedIn.admin) {
		return (
			<>
				<TopNavigationBar loggedIn={loggedIn} />
				<AdminHome />
			</>
		)
	} else {
		return (
			<>
				<TopNavigationBar loggedIn={loggedIn} />
				<HomePage />
			</>
		)
	}

}

export default App
