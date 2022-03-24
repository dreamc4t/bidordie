import { Link } from "react-router-dom"
import { useState } from "react"

import OtherLoginOption from "../components/OtherLoginOption"
import useFetch from "../customHooks/useFetch";

const LoginPage = ({ idOfLoggedInUser, setIdOfLoggedInUser }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [failedToLogIn, setFailedToLogIn] = useState(false)

    const { data: users } = useFetch("http://localhost:6001/users");

    const validateLogin = (e) => {
        e.preventDefault()

        const loginAttempt = {
            email,
            password
        }
        let couldLogIn = false
        for (const user of users) {
            if(loginAttempt.email === user.email && loginAttempt.password === user.password) {
                couldLogIn = true
                setIdOfLoggedInUser(user.id)
            }
        }
        if(couldLogIn) {
            setFailedToLogIn(false)
            console.log('Successful login')
        } else {
            setFailedToLogIn(true)
            console.log('Failed to login')
        }
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
                <form>
                    <input type="text" key="email" placeholder="email" value={email} onChange={handleEmailChange}/>
                    <input type="password" key="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
                    <Link to="/">
                        <button className="button-element">Log in</button>
                    </Link>
                    <Link to="/become-a-member">
                        <button className="button-element">Create Account</button>
                    </Link>
                    <div id="log-in-with">
                       ---- or log in with ---- 
                    </div>
                    <OtherLoginOption />
                </form>
            </div>
        </div>
    )
}

export default LoginPage