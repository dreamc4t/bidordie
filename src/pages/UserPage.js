const UserPage = ({userFirstName, userLastName, userShortDescript, userLocation, userPhoneNumber, userCV, userBio, userReferences, userPreviousAuctions}) => {

    return (
      <div className="user-page">  
          <div className='user-top'>
              <div className="user-page-pictures">
                <img src="img/profileBackground.jpg" className="userBackgroundPicture" />
                <img src="img/MonaLisa.jpg" className="profile-picture" />
              </div>
              <div className="user-profile-info">
                <h1>{userFirstName}{userLastName}</h1>
                <p>{userShortDescript}</p>
                <p>{userLocation}</p>
                <p>{userPhoneNumber}</p>
              </div>
          </div>
          <div className="user-cv">
              CV visas här.
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
  