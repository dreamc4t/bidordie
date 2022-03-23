const UserPage = () => {
    const userName = "Mona Lisa"
    const userSkills = "Fullstack developer & react genius"

    return (
      <div className="user-page">  
          <div className='user-top'>
              <div className="user-page-pictures">
                <img src="img/profileBackground.jpg" className="userBackgroundPicture" />
                <img src="img/MonaLisa.jpg" className="profile-picture" />
              </div>
              <div className="user-profile-info">
                <h1>Mona Lisa</h1>
                <h3>Fullstack developer & React genius </h3>
                <h4>Venice, Italy</h4>
                <h5>0707-1337</h5>
              </div>
          </div>
          <div className="user-cv">
              CV visas här.
          </div>
          <div className="user-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacus diam. Cras a dignissim erat, pulvinar varius metus. Suspendisse rutrum odio nec elementum consectetur. Nam dictum odio quis iaculis interdum. Vivamus vel ligula rutrum, mollis orci in, viverra mauris. Ut risus nulla, luctus eget sodales congue, suscipit quis nibh. Donec lacus diam, eleifend ut tellus id, hendrerit malesuada sapien. Pellentesque cursus purus sit amet dui pharetra finibus.
          </div>
          <div className="user-references">
              Referenser visas här.
          </div>
          <div className="previous-commisions">
              Tidigare uppdrag visas här
          </div>
      </div>
    )
  }
  
  export default UserPage
  