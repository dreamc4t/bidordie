import {GoLocation} from "react-icons/go"
import useFetch from "../customHooks/useFetch"



const UserPage = ({userImage, userFirstName, userLastName, userShortDescript, userLocation, userPhoneNumber, userCV, userBio, userReferences, userPreviousAuctions}) => {
  const { data: user, userLoading } = useFetch("http://localhost:6001/auctions/1");
    return (
      <div className="user-page">
          <div className='user-page-top'>
              <div className="user-page-pictures">
                <img src="img/profileBackground.jpg" className="userBackgroundPicture" />
                <img src="/img/erik.jpeg" className="profile-picture" />
              </div>
              <div className="user-profile-info">
                <h1>{userFirstName} {userLastName}</h1>
                <p>{userShortDescript}</p>
                <p><GoLocation/>{userLocation} - {userPhoneNumber}</p>
              </div>
          </div>
          <div className="user-cv">
              CV visas här. {userCV}
          </div>
          <div className="user-bio">
            {userBio}
          </div>
          <div className="user-references">
              {userReferences}
          </div>
      </div>
    )
  }
  
  export default UserPage
  