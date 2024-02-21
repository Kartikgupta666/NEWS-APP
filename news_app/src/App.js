
import './App.css';
import NavBar from './component/NavBar';
import Login from './component/Login';
import About from './component/About';
import News from './component/News';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact path="/login"
            element={<Login />} />
          <Route exact path="/aboutus" element={<About />} />
        </Routes>
        <News pageSize={8} />
      </Router >
    </>
  );
}

export default App;

