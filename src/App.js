import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import BecomeAMember from "./components/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionList from "./components/ActionList"
import LoginPage from "./components/LoginPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ActionList/>
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
