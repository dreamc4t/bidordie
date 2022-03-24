import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const headerNav = [
    { key: 1, text: "Auctions", hashLink: "/" },
    { key: 2, text: "Signup", hashLink: "become-a-member" },
    { key: 3, text: "New auction", hashLink: "new-auction" },
    { key: 4, text: "About", hashLink: "/about-us" },
    { key: 5, text: "Login", hashLink: "login" },
    { key: 6, text: "My page", hashLink: "my-page" },
  ];
  return (
    <header>
      <Link to="/" style={{textDecoration: "none"}}>
        <Logo />
      </Link>
      <nav className="header-nav">
        {headerNav.map((buttonName) => (
          <Link to={buttonName.hashLink} key={buttonName.key} style={{textDecoration: "none"}}>
            <HeaderButton text={buttonName.text}  />
          </Link>
        ))}
        <GiHamburgerMenu className="burger-menu" />
      </nav>
    </header>
  );
};

export default Header;
