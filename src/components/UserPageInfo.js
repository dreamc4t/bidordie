import UserPage from "../pages/UserPage"
import UserPageMockAuctions from "./UserPageMockAuctions"
import useFetch from "../customHooks/useFetch"

const UserPageInfo = () => {

  return (
    <div className="user-page-info">
       <div className="user-page-container">
        <UserPage
            userImage={"/img/erik.jpeg"}
            userFirstName={"Erik"}
            userLastName={"Sund"}
            userShortDescript={"Kan stå på händer"}
            userLocation={"Malmö"}
            userPhoneNumber={"0707-133737"}
            userBio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lacus diam. Cras a dignissim erat, pulvinar varius metus. Suspendisse rutrum odio nec elementum consectetur. Nam dictum odio quis iaculis interdum. Vivamus vel ligula rutrum, mollis orci in, viverra mauris. Ut risus nulla, luctus eget sodales congue, suscipit quis nibh. Donec lacus diam, eleifend ut tellus id, hendrerit malesuada sapien. Pellentesque cursus purus sit amet dui pharetra finibus."}
        />
    </div>
    <div className="previous-commisions">
        <UserPageMockAuctions />
        <UserPageMockAuctions />
        <UserPageMockAuctions />
        <UserPageMockAuctions />
    </div>
    </div>
    
  )
}

export default UserPageInfo