import useFetch from "../customHooks/useFetch"
import UserPage from "./UserPage";
import UserPageMockAuctions from "../components/UserPageMockAuctions";



const MyPage = () => {
    const { data: user, userLoading } = useFetch("http://localhost:6001/auctions/1");
  return (
    <div className="user-page-wrapper">
        {userLoading && <div> LOADING USER PAGE....</div>}
        {user && <UserPage
          userImage={user.imageURL}
          userFirstName={user.firstName}
          userLastName={user.lastName}
          userShortDescript={user.competence.join(", ")}
          userLocation={user.town}
          userPhoneNumber={user.phone}
          userCV={user.CV}
          userBio={user.otherInfo}
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