import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { LoginContext } from "../App";

const Header = ({ setIsLoggedIn, setIsACompany, setIdOfLoggedInUser }) => {

  const loginContext = useContext(LoginContext)

  const logOut = () => {
    setIsLoggedIn(false)
    setIsACompany(false)
    setIdOfLoggedInUser("")
  }

  return (
    <header>
      <Link to="/" style={{textDecoration: "none"}}>
        <Logo />
      </Link>
      <nav className="header-nav">
        <Link to="/" style={{textDecoration: "none"}}>
          <HeaderButton text={"Auctions"}  />
        </Link>
        {!loginContext.isLoggedIn ? <Link to={"become-a-member"} style={{textDecoration: "none"}}><HeaderButton text={"Signup"}  /></Link>:null}
        <Link to={"new-auction"} style={{textDecoration: "none"}}>
          <HeaderButton text={"New auction"}  />
        </Link>
        <Link to={"/about-us"} style={{textDecoration: "none"}}>
          <HeaderButton text={"About"}  />
        </Link>
        {!loginContext.isLoggedIn ? <Link to={"login"} style={{textDecoration: "none"}}><HeaderButton text={"Login"}  /></Link> : <Link to={"/"} style={{textDecoration: "none"}} onClick={logOut}><HeaderButton text={"Log Out"}  /></Link>}
        {loginContext.isLoggedIn ? <Link to={"profile-page"} style={{textDecoration: "none"}}><HeaderButton text={"My page"}  /></Link> : null}
        <GiHamburgerMenu className="burger-menu" />
      </nav>
    </header>
  );
};

export default Header;
