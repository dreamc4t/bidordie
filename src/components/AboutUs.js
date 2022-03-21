import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

const AboutUs = () => {
  return (
    <AboutUs>  
        <div className="about-us">
            <h2>About Us</h2>
            <Link to="/">
                <FaArrowLeft size={30} />
            </Link>
        </div>
    </AboutUs>
  )
}

export default AboutUs;