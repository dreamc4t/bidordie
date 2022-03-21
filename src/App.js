import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import BecomeAMember from "./components/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionList from "./components/ActionList";
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
          </Routes>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
