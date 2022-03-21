import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import BecomeAMember from "./components/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionList from "./components/SortBar";
import LoginPage from "./components/LoginPage";
import AboutUs from "./components/AboutUs";

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
