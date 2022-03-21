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
        <FaGooglePlay size={25} />
        <FaAppStoreIos size={25} />
        </p>
        <FaQuestionCircle size={25} />
        <h2>BIDORDIE</h2>
        <p>
        <FaFacebook size={25} />
        <FaInstagram size={25} />
        <FaTwitter size={25} />
        </p>
        <button type="button" onClick={(e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000';
        }}>About Us</button>
      </div>
    </footer>
  )
}

export default Footer
