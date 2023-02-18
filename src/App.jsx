import React, { useState, createContext } from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import UserHome from "./components/layouts/userPages/UserHome.jsx"
import GuestHomePage from "./components/layouts/guestPages/GuestHomePage"

export const loggedInContext = createContext()

function App() {
	const [loggedInState, setLoggedInState] = useState({
		user: undefined,
		loggedIn: false,
	})

	const changeUser = (event) => {
		event.preventDefault()
		setLoggedInState({...loggedInState, loggedIn: false})
	}

	let mainPage = <GuestHomePage />
	let buttonText = "Not Currently Logged In"

	if (loggedInState.loggedIn) {
		mainPage = <UserHome />
		buttonText = "Log Out The Current User"
	}

	return (
		<loggedInContext.Provider value={[loggedInState, setLoggedInState]}>
			<TopNavigationBar loggedInState={loggedInState} />
			{mainPage}
			<button className="clickable-button" onClick={changeUser}>{buttonText}</button>
		</loggedInContext.Provider>
	)
}

export default App
