import React, { useState } from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import UserHome from "./components/layouts/userPages/UserHome.jsx"
import AdminHome from "./components/layouts/adminPages/AdminHome.jsx"
import GuestHomePage from "./components/layouts/guestPages/GuestHomePage"

function App() {
	const [loggedIn, setLoggedIn] = useState({
		guest: true,
		admin: false,
		user: false,
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
	}

	return (
		<>
			<TopNavigationBar loggedIn={loggedIn} />
			<GuestHomePage />
		</>
	)
}

export default App
