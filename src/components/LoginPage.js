import { Link } from "react-router-dom"

const LoginPage = () => {
    return(
        <div id="login-page">
            <div id="login-container">
                <h2>Log In</h2>
                <form>
                    <input placeholder="email"/>
                    <input placeholder="password" />
                    <Link to="auction-list">
                        <button>Log in</button>
                    </Link>
                    <Link to="/become-a-member">
                        <button>Create Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default LoginPage