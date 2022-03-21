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
          <Link to="/google-play-store">
            <FaGooglePlay size={25} />
          </Link>
          <Link to="/apple-store">
            <FaAppStoreIos size={25} />
          </Link>
        </p>
        <FaQuestionCircle size={25} />
        <h2>BIDORDIE</h2>
        <p>
          <Link to="/facebook">
            <FaFacebook size={25} />
          </Link>
          <Link to="/instagram">
            <FaInstagram size={25} />
          </Link> 
          <Link to="/twitter">
            <FaTwitter size={25} />
          </Link>   
        </p>
        <p>
          <Link to="/about-us">
            <button>About Us</button>
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
