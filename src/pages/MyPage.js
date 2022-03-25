import useFetch from "../customHooks/useFetch"
import UserPage from "./UserPage";
import UserPageMockAuctions from "../components/UserPageMockAuctions";
import { Link, Navigate } from "react-router-dom"


const MyPage = ({loggedInUserID}) => {
    const {data: user, userLoading} = useFetch("http://localhost:6001/users/" + loggedInUserID);

  return (
    <div className="user-page-wrapper">
      {console.log("Hej hej hej", {loggedInUserID} )}
      {loggedInUserID == null && < Navigate to="/" />}
        {userLoading && <div> LOADING USER PAGE....</div>}
        {user && <UserPage
          userImage={user.imageUrl}
          userFirstName={user.firstName}
          userLastName={user.lastName}
          userShortDescript={user.competence.join(", ")}
          userLocation={user.town}
          userPhoneNumber={user.phone}
          userCV={user.CV}
          userBio={user.biography}
        />}
      <div className="previous-commisions">
          <UserPageMockAuctions />
          <UserPageMockAuctions />
          <UserPageMockAuctions />
          <UserPageMockAuctions />
      </div>
    </div>
  )
}

export default MyPage