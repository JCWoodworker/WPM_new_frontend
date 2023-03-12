import React, { useState, createContext, useEffect } from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import UserHome from "./components/layouts/userPages/UserHome.jsx"
import GuestHomePage from "./components/layouts/guestPages/GuestHomePage"

export const loggedInContext = createContext()

function App() {
	const [loggedInState, setLoggedInState] = useState({
		userData: undefined,
		loggedIn: false,
	})

	useEffect(() => {
		const storedUserData = sessionStorage.getItem("userData")
		if (storedUserData) {
			const userData = JSON.parse(storedUserData)
			setLoggedInState({
				...loggedInState,
				loggedIn: true,
				userData: userData.wpm_user,
			})
		}
	}, [])

	let mainPage = <GuestHomePage />

	if (loggedInState.loggedIn) {
		mainPage = <UserHome />
	}

	return (
		<loggedInContext.Provider value={[loggedInState, setLoggedInState]}>
			<TopNavigationBar
				loggedInState={loggedInState}
				setLoggedInState={setLoggedInState}
			/>
			{mainPage}
		</loggedInContext.Provider>
	)
}

export default App
