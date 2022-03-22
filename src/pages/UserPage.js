const UserPage = () => {
    const userReferences = [
        {}
    ]
    return (
      <div className="user-page">  
          <div className='user-top'>
              <img src="img/MonaLisa.jpg" className="profile-picture" />
              <h1>Mona Lisa</h1>
              <h3>Fullstack developer & React genius </h3>
              <h4>Venice, Italy</h4>
              <h5>0707-1337</h5>
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
  