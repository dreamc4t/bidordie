import {GoLocation} from "react-icons/go"
import {GoPencil} from "react-icons/go"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa"

const UserPage = ({userImage, userFirstName, userLastName, userShortDescript, userLocation, userPhoneNumber, userCV, userBio, userReferences, userPreviousAuctions}) => {
    return (
      <div className="user-page">
        <div className="user-page-pictures">
          <button className="user-page-edit-button"><GoPencil className="user-page-edit-icon"/></button>
          <img src="img/profileBackground.jpg" className="userBackgroundPicture" />
          <img src={userImage} className="profile-picture" />
          
        </div>
        <div className="tempNameOMG">
        <div className='user-page-top'>
          <div className="user-profile-info">
            <h1>{userFirstName} {userLastName}</h1>
            <p>{userShortDescript}</p>
            <p><GoLocation size={15} className="user-page-icons"/>{userLocation} - {userPhoneNumber}</p>
          </div>
          <div className="user-cv">
            {userCV}
          </div>
        </div>
        <div className="user-bio">
          {userBio}
        </div>
        <div className="user-references">
          {userReferences}
        </div>
        </div>
        <div className="user-page-social-media-links">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook size={25} className="user-page-icons"/>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram size={25} className="user-page-icons"/>
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <FaTwitter size={25} className="user-page-icons"/>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn size={25} className="user-page-icons"/>
          </a>
        </div>
      </div>
    )
  }
  
  export default UserPage
  