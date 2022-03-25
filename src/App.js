import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BecomeAMember from "./pages/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import AuctionList from "./pages/AuctionList";
import AddAuctionPage from "./pages/AddAuctionPage";
import Faq from "./pages/Faq";
import UserPage from "./pages/UserPage";
import MyPage from "./pages/MyPage";
import AuctionPage from "./pages/AuctionPage";

function App() {
  const [idOfLoggedInUser, setIdOfLoggedInUser] = useState(null);
  useEffect(() => {
    console.log(idOfLoggedInUser);
  }, [idOfLoggedInUser]); //printar  i console id:t för user som är inloggad

  const [chosenAuction, setChosenAuction] = useState(-1)

  return (
    <Router>
      <Header idOfLoggedInUser={idOfLoggedInUser} setIdOfLoggedInUser={setIdOfLoggedInUser}/>
      <main>
        <Routes>
          {/*Pages go here as <Route>*/}
          <Route exact path="/" element={<AuctionList setChosenAuction={setChosenAuction} chosenAuction={chosenAuction}/>} />
          <Route path="/login" element={<LoginPage idOfLoggedInUser={idOfLoggedInUser} setIdOfLoggedInUser={setIdOfLoggedInUser}/>} />
          <Route path="/become-a-member" element={<BecomeAMember />} />
          <Route path="/new-auction" element={<AddAuctionPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/my-page" element={<MyPage loggedInUserID={idOfLoggedInUser}/>} />
          <Route path="/auction-page" element={<AuctionPage chosenAuction={chosenAuction}/>} />
          <Route
            path="/google-play-store"
            element={"https://play.google.com/store"}
          />
          <Route
            path="/apple-store"
            element={"https://www.apple.com/app-store/"}
          />
          <Route path="/facebook" element={"https://www.facebook.com"} />
          <Route path="/instagram" element={"https://www.instagram.com"} />
          <Route path="/twitter" element={"https://www.twitter.com"} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
