import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

import OtherLoginOption from "../components/OtherLoginOption"
import AuthService from "../services/AuthService";

const LoginPage = ({ setIsLoggedIn, setIsACompany, setIdOfLoggedInUser }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failedToLogIn, setFailedToLogIn] = useState(false)

    const navigate = useNavigate()

    const validateLogin = (e) => {
        e.preventDefault()

        const loginRequest = {
            "username": email,
            "password": password
        }

        AuthService.login(loginRequest)
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(true)
                    setFailedToLogIn(false)
                    setIdOfLoggedInUser(response.data.id)
                    console.log(response)
                    setIsACompany(response.data.roles.includes('ROLE_COMPANY'))
                    localStorage.setItem('token', response.data.token)
                    navigate('/', true)
                } else {
                    setFailedToLogIn(true)
                }
            })
            .catch(() => {
                setFailedToLogIn(true)
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return(
        <div id="login-page">
            <div id="login-container">
                <h2>Log In</h2>
                <form onSubmit={validateLogin}>
                    {failedToLogIn && <p>Failed to login, try again</p>}
                    <input type="text" placeholder="email" value={email} onChange={handleEmailChange}/>
                    <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                        <button className="button-element">Log in</button>
                    <Link to="/become-a-member">
                        <button className="button-element">Create Account</button>
                    </Link>
                    {/*<p id="log-in-with">
                       ---- or log in with ---- 
                    </p>
                    <OtherLoginOption />*/}
                </form>
            </div>
        </div>
    )
}

export default LoginPage