import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <h3>Welcome To BIDORDIE</h3>
      <p>
        {" "}
        BIDORDIE is a Professional Job Platform. Here we will provide you only
        interesting content, which you will like very much. We're dedicated to
        providing you the best of jobs, with a focus on dependability and job
        offers. We're working to turn our passion for jobs into a booming online
        website. We hope you enjoy our site as much as we enjoy offering it to
        you.
      </p>
      <p>
        We will keep posting more important posts on our Website for all of you.
        Please give your support and love.
      </p>
      <p>Thanks For Visiting our Site</p>
      <p>Have a nice day !</p>
      <Link to="/">
        <FaArrowLeft size={30} />
      </Link>
    </div>
  );
};

export default AboutUs;
