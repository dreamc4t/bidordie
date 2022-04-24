import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";

import BecomeAMember from "./pages/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import AuctionList from "./pages/AuctionList";
import AddAuctionPage from "./pages/AddAuctionPage";
import Faq from "./pages/Faq";
import AuctionPage from "./pages/AuctionPage";
import NotLoggedInPage from "./pages/NotLoggedInPage";
import ProfilePageUser from "./pages/ProfilePageUser";

export const LoginContext = createContext()

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isACompany, setIsACompany] = useState(false)
  const [idOfLoggedInUser, setIdOfLoggedInUser] = useState("")

  return (
    <LoginContext.Provider value={{
      isLoggedIn: isLoggedIn,
      isACompany: isACompany,
      idOfLoggedInUser: idOfLoggedInUser
    }}>
      <Router>
        <Header setIsLoggedIn={setIsLoggedIn} setIsACompany={setIsACompany} setIdOfLoggedInUser={setIdOfLoggedInUser}/>
        <main>
          <Routes>
            {/*Pages go here as <Route>*/}
            <Route exact path="/" element={<AuctionList/>} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setIsACompany={setIsACompany} setIdOfLoggedInUser={setIdOfLoggedInUser}/>} />
            <Route path="/become-a-member" element={<BecomeAMember />} />
            <Route path="/new-auction" element={<AddAuctionPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/FAQ" element={<Faq />} />
            <Route path="/profile-page-user/:auctionOwnerId" element={<ProfilePageUser/>} />
            <Route path="/auction-page/:auctionId/:auctionOwnerId" element={<AuctionPage />} />
            <Route path="/not-logged-in" element={<NotLoggedInPage />} />
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
    </LoginContext.Provider>
  );
}

export default App;
