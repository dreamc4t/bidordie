import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

import BecomeAMember from "./components/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SortBar from "./components/SortBar";
import LoginPage from "./components/LoginPage";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";

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
