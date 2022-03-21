import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const headerNav = [
    { key: 1, text: "Signup" },
    { key: 2, text: "New auction" },
    { key: 3, text: "About" },
  ];
  return (
    <header>
        <Logo />

      <nav className="header-nav">
        {headerNav.map((buttonName) => (
          <HeaderButton text={buttonName.text} />
        ))}
        <GiHamburgerMenu className="burger-menu" />
      </nav>
    </header>
  );
};

export default Header;
