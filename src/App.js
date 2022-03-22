import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import BecomeAMember from "./pages/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import AuctionList from "./pages/AuctionList";
import AddAuctionPage from "./pages/AddAuctionPage"; 
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
        <Header />
        <main>
          <Routes>
            {/*Pages go here as <Route>*/}
            <Route 
              exact
              path="/"
              element={<AuctionList />}
            />
            <Route 
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/become-a-member"
              element={<BecomeAMember />}
            />
            <Route
              path="/about-us"
              element={<AboutUs />}
            />
            <Route
            path="/FAQ"
            element={<Faq />}
            />
            <Route
              path="/google-play-store"
              element={('https://play.google.com/store')}
            />
            <Route
              path="/apple-store"
              element={('https://www.apple.com/app-store/')}
            />
            <Route
              path="/facebook"
              element={('https://www.facebook.com')}
            />
            <Route
              path="/instagram"
              element={('https://www.instagram.com')}
            />
            <Route
              path="/twitter"
              element={('https://www.twitter.com')}
            /> 
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
