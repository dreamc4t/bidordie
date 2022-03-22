import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer";
import BecomeAMember from "./pages/BecomeAMember";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import AuctionList from "./pages/AuctionList";
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
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
