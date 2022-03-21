import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import BecomeAMember from "./components/BecomeAMember";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <main>
        <Routes>
          {/*Pages go here as <Route>*/}
          <Route
          path="/become-a-member"
          element={<BecomeAMember />} 
          />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
