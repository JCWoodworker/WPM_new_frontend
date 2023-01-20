import React from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import HomePage from "./components/layouts/HomePage.jsx"

function App() {
	return (
		<>
			<TopNavigationBar />
			<HomePage />
		</>
	)
}

export default App
