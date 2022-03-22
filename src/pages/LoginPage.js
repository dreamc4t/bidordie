import { Link } from "react-router-dom"
import OtherLoginOption from "../components/OtherLoginOption"


const LoginPage = () => {
    return(
        <div id="login-page">
            <div id="login-container">
                <h2>Log In</h2>
                <form>
                    <input placeholder="email"/>
                    <input placeholder="password" />
                    <Link to="auction-list">
                        <button className="button-element">Log in</button>
                    </Link>
                    <Link to="/become-a-member">
                        <button className="button-element">Create Account</button>
                    </Link>
                    <div>
                       ---- log in with ---- 
                    </div>
                    <OtherLoginOption />
                </form>
            </div>
        </div>
    )
}

export default LoginPage