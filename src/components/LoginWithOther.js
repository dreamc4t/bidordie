import { Link } from "react-router-dom";
import { FaAppStoreIos, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";


const LoginWithOther = () => {

    const others =[ 
      {key: 1, site: "Facebook", logo: <FaFacebook />},
      {key: 2, site:  "Google", logo: <FaGoogle />},    
      {key: 3, site:  "Twitter", logo: <FaTwitter />},        
    ]

  return (
    <div className="login-with-other">
       {others.map((x) =>
       <button>{x.logo} {x.site}</button>
       )}
       <div>
      
         </div>
    </div>
  )
}

export default LoginWithOther
