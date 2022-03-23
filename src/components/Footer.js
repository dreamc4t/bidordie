import { Link } from "react-router-dom";
import { FaAppStoreIos } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>
          <a href="https://play.google.com/store" target="_blank">
            <FaGooglePlay size={25} />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <FaAppStoreIos size={25} />
          </a>
        </p>
          <Link to="/FAQ">
          <FaQuestionCircle size={25} />
        </Link>
        <h2>BIDORDIE</h2>
        <p>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook size={25} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={25} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter size={25} />
          </a>   
        </p>
        <p>
          <Link to="/about-us">
            <button className="button-element">About Us</button>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
