import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="FAQ">
        <h2>FAQ</h2>
        <h3>Welcome To FAQS</h3>
        <p>FAQS is a Professional job searching Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of job searching, with a focus on dependability and providing jobs. We're working to turn our passion for job searching into a booming online website. We hope you enjoy our job searching as much as we enjoy offering them to you.</p>
        <p>Any questions not answered here, feel free to contact us</p>   
        <Link to="/">
            <FaArrowLeft size={30} />
        </Link>
    </div>
  )
}

export default Faq;