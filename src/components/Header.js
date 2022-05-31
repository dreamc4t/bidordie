import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { LoginContext } from "../App";
import userEvent from "@testing-library/user-event";

const Header = ({ setIsLoggedIn, setIsACompany, setIdOfLoggedInUser }) => {
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    console.log(loginContext);
  }, [loginContext]);

  const [burgerNav, setBurgerNav] = useState(true);
  const handleBurgerClick = () => {
    setBurgerNav((prev) => !prev);
  };
  const burgerClick = () => {
    setBurgerNav(true)
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setIsACompany(false);
    setIdOfLoggedInUser("");
    setBurgerNav(true)

  };

  return (
    <>
      <header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <GiHamburgerMenu className="burger-menu" onClick={handleBurgerClick} />

        <nav className="header-nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <HeaderButton text={"Auctions"} />
          </Link>
          {loginContext.isLoggedIn ? (
            <Link to={"new-auction"} style={{ textDecoration: "none" }}>
              {" "}
              <HeaderButton text={"New auction"} />
            </Link>
          ) : null}
          <Link to={"/about-us"} style={{ textDecoration: "none" }}>
            <HeaderButton text={"About"} />
          </Link>
          {!loginContext.isLoggedIn ? (
            <Link to={"become-a-member"} style={{ textDecoration: "none" }}>
              <HeaderButton text={"Signup"} />
            </Link>
          ) : null}
          {!loginContext.isLoggedIn ? (
            <Link to={"login"} style={{ textDecoration: "none" }}>
              <HeaderButton text={"Login"} />
            </Link>
          ) : (
            <Link to={"/"} style={{ textDecoration: "none" }} onClick={logOut}>
              <HeaderButton text={"Log Out"} />
            </Link>
          )}
          {loginContext.isLoggedIn ? (
            <Link
              to={"profile-page-user/" + loginContext.idOfLoggedInUser}
              style={{ textDecoration: "none" }}
            >
              <HeaderButton text={"My page"} />
            </Link>
          ) : null}
        </nav>
      </header>
      {burgerNav === true ?
       <></> 
       :
       <nav className="burger-header-nav">
       <Link to="/" style={{ textDecoration: "none" }} onClick={burgerClick}>
         <HeaderButton text={"Auctions"} />
       </Link>
       {loginContext.isLoggedIn ? (
         <Link to={"new-auction"} style={{ textDecoration: "none" }} onClick={burgerClick}>
           {" "}
           <HeaderButton text={"New auction"} />
         </Link>
       ) : null}
       <Link to={"/about-us"} style={{ textDecoration: "none" }} onClick={burgerClick}>
         <HeaderButton text={"About"} />
       </Link>
       {!loginContext.isLoggedIn ? (
         <Link to={"become-a-member"} style={{ textDecoration: "none" }} onClick={burgerClick}>
           <HeaderButton text={"Signup"} />
         </Link>
       ) : null}
       {!loginContext.isLoggedIn ? (
         <Link to={"login"} style={{ textDecoration: "none" }} onClick={burgerClick}>
           <HeaderButton text={"Login"}/>
         </Link>
       ) : (
         <Link to={"/"} style={{ textDecoration: "none" }} onClick={logOut}>
           <HeaderButton text={"Log Out"} />
         </Link>
       )}
       {loginContext.isLoggedIn ? (
         <Link
           to={"profile-page-user/" + loginContext.idOfLoggedInUser}
           style={{ textDecoration: "none" }}
           onClick={burgerClick}>
           <HeaderButton text={"My page"} />
         </Link>
       ) : null}
     </nav>}
    </>
  );
};

export default Header;
