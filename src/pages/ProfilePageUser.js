const ProfilePageUser = ({ProfileUserId}) => {
  return (
    <div className="profile-page">

        <div className="profile-page-pictures">
            <button className="profile-page-edit-button"><GoPencil className="profile-page-edit-icon"/></button>
            <img src="img/profileBackground.jpg" className="profile-background-picture" />
            <img src={userImage} className="profile-picture" />
        </div>
        
        <div className="profile-page-body">
            <div className='profile-page-top'>
                <div className="profile-page-info">
                    <h1>{userFirstName} {userLastName}</h1>
                    <p>{userShortDescript}</p>
                    <p><GoLocation size={15} className="profile-page-icons"/>{userLocation} - {userPhoneNumber}</p>
                </div>
                <div className="profile-cv">
                    {userCV}
                </div>
            </div>
            <div className="profile-bio">
                {userBio}
            </div>
            <div className="profile-references">
                {userReferences}
            </div>
        </div>

        <div className="profile-page-social-media-links">
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

export default ProfilePageUser