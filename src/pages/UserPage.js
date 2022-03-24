import {GoLocation} from "react-icons/go"
import {GoPencil} from "react-icons/go"
import {GoLogoGithub} from "react-icons/go"

const UserPage = ({userImage, userFirstName, userLastName, userShortDescript, userLocation, userPhoneNumber, userCV, userBio, userReferences, userPreviousAuctions}) => {
    return (
      <div className="user-page">
        <div className="user-page-pictures">
          <button className="user-page-edit-button"><GoPencil className="user-page-edit-icon"/></button>
          <img src="img/profileBackground.jpg" className="userBackgroundPicture" />
          <img src="/img/erik.jpeg" className="profile-picture" />
          
        </div>
        <div className='user-page-top'>
          <div className="user-profile-info">
            <h1>{userFirstName} {userLastName}</h1>
            <p>{userShortDescript}</p>
            <p><GoLocation className="user-page-location-icon"/>{userLocation} - {userPhoneNumber}</p>
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
        <div className="user-page-bottom">
        </div>
      </div>
    )
  }
  
  export default UserPage
  