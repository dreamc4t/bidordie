import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer";
import ActionList from "./components/ActionList"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ActionList/>
        <Routes>
          {/*Pages go here as <Route>*/}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
