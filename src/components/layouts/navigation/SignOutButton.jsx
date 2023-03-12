import React from "react"
import { Nav } from "react-bootstrap"

const SignOutButton = ({ loggedInState, setLoggedInState }) => {
  
  const logUserOut = (event) => {
    event.preventDefault()
    setLoggedInState({ ...loggedInState, loggedIn: false, userData: undefined })
    sessionStorage.removeItem('userData')
  }

  return (
    <Nav.Link id="navLink" onClick={logUserOut}>
      Sign Out
    </Nav.Link>
  )

}

export default SignOutButton



