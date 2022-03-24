import { Link } from "react-router-dom"
import OtherLoginOption from "../components/OtherLoginOption"
import { useState } from "react"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                    <input placeholder="email" value={email} onChange={handleEmailChange}/>
                    <input placeholder="password" value={password} onChange={handlePasswordChange}/>
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